import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface RegisterAdminPageProps {}

const RegisterAdminPage: FC<RegisterAdminPageProps> = () => {
  return (
    <>
      <SeoComponent title="Register Admin" href="register-admin" />
      <div className="px-4 tablet:px-10 desktop:px-20">Register Admin Page</div>
    </>
  );
};

export default RegisterAdminPage;
