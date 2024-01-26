import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <>
      <SeoComponent title="Login" href="login" />
      <div className="">Login Page</div>
    </>
  );
};

export default LoginPage;
