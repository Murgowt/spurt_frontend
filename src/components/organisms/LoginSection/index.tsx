import { FC, useState } from 'react';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { loginSchema } from '@validations/auth';
import { useAuthStore } from '@store/authStore';
import { loginRequest } from '@services/auth';

import Button from '@components/atoms/Button';
import FormInput from '@components/atoms/FormInput';
import ErrorMessage from '@components/atoms/ErrorMessage';

import { ERRORS } from '@constants/app';
import { HOME_PAGE } from '@constants/routes';

export interface LoginSectionProps {}

const LoginSection: FC<LoginSectionProps> = () => {
  const navigate = useNavigate();

  const setAuthToken = useAuthStore((state) => state.setAuthToken);
  const setUser = useAuthStore((state) => state.setUser);

  const [isInvalidCred, setIsInvalidCred] = useState(false);
  const [formError, setFormError] = useState('');

  const formMethods = useForm({
    resolver: zodResolver(loginSchema),
  });
  const isLoading = formMethods.formState.isSubmitting;

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await loginRequest(data?.email, data?.password);

      if (res.status === 200) {
        setFormError('');
        setIsInvalidCred(false);

        // eslint-disable-next-line no-console
        console.log(res);

        // TODO: Set store data after backend fix
        setAuthToken('loginResponse.token');
        setUser({
          name: {
            first: 'loginResponse.firstName',
            last: 'loginResponse.lastName',
          },
          email: 'loginResponse.email',
        });
      }

      navigate(HOME_PAGE);
    } catch (error) {
      if (isAxiosError(error)) {
        // eslint-disable-next-line no-console
        console.log(error);

        const status = error.response?.status;
        if (status === 401) {
          setIsInvalidCred(true);
          setFormError(error.response?.data?.message);
        } else {
          setIsInvalidCred(false);
          setFormError(ERRORS.SERVER_ERROR);
        }
      } else {
        setIsInvalidCred(false);
        setFormError(ERRORS.SERVER_ERROR);
      }

      // TODO: Remove this after CORS fix
      navigate(HOME_PAGE);

      setAuthToken('loginResponse.token');
      setUser({
        name: {
          first: 'loginResponse.firstName',
          last: 'loginResponse.lastName',
        },
        email: 'loginResponse.email',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-10">
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInput
            type="email"
            name="email"
            placeholder="enter email"
            label="Email Address *"
            disabled={isLoading}
            hasError={isInvalidCred}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="enter password"
            label="Password *"
            disabled={isLoading}
            hasError={isInvalidCred}
          />
          <div className="mt-10">
            <Button isLoading={isLoading} type="primary" submitType>
              Sign In
            </Button>
          </div>
          {formError !== '' && (
            <div className="flex justify-center text-xs text-center">
              <ErrorMessage errMessage={formError} iconRequired />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginSection;
