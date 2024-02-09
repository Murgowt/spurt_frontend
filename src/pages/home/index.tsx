import { FC } from 'react';

import SeoComponent from '@components/atoms/SeoComponent';

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <SeoComponent title="Home" href="/home" />
      <div className="px-4 tablet:px-10 desktop:px-20">Home Page</div>
    </>
  );
};

export default HomePage;
