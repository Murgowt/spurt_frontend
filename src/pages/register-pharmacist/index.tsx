import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface RegisterPharmacistPageProps {}

const RegisterPharmacistPage: FC<RegisterPharmacistPageProps> = () => {
  return (
    <>
      <SeoComponent title="Register Pharmacist" href="register-pharmacist" />
      <div className="px-4 tablet:px-10 desktop:px-20">
        Register Pharmacist Page
      </div>
    </>
  );
};

export default RegisterPharmacistPage;
