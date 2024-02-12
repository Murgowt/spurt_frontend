import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';
import RegisterAdminSection from '@components/organisms/RegisterAdminSection';

export interface RegisterAdminPageProps {}

const RegisterAdminPage: FC<RegisterAdminPageProps> = () => {
  return (
    <>
      <SeoComponent title="Register Admin" href="register-admin" />
      <div className="px-4 tablet:px-10 desktop:px-20">
        <RegisterAdminSection />
      </div>
    </>
  );
};

export default RegisterAdminPage;
