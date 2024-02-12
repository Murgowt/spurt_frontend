import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';
import LoginSection from '@components/organisms/LoginSection';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <>
      <SeoComponent title="Login" href="login" />
      <div className="px-4 tablet:px-10 desktop:px-20">
        <LoginSection />
      </div>
    </>
  );
};

export default LoginPage;
