import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface ResetPasswordPageProps {}

const ResetPasswordPage: FC<ResetPasswordPageProps> = () => {
  return (
    <>
      <SeoComponent title="Reset Password" href="reset-password" />
      <div className="">Reset Password Page</div>
    </>
  );
};

export default ResetPasswordPage;
