import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface ResetPasswordPageProps {}

const ResetPasswordPage: FC<ResetPasswordPageProps> = () => {
  return (
    <>
      <SeoComponent title="Login" href="login" />
      <div className="">Reset Password Page</div>
    </>
  );
};

export default ResetPasswordPage;
