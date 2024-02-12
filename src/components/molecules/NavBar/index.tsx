import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import BrandLogo from '@components/atoms/BrandLogo';
import NavBarLink from '@components/atoms/NavBarLink';
import Button from '@components/atoms/Button';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTER_ADMIN_PAGE,
  REGISTER_PHARMACIST_PAGE,
} from '@constants/routes';

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-24 max-h-24">
      <div className="flex items-center justify-between w-full h-full px-4 tablet:px-10 desktop:px-20">
        <BrandLogo link={HOME_PAGE} />
        <div>
          <ul className="hidden item-center text-brown300 tablet:flex desktop:flex">
            <NavBarLink
              type="desktop"
              href={REGISTER_PHARMACIST_PAGE}
              active={location.pathname === REGISTER_PHARMACIST_PAGE}
            >
              Register Pharmacist
            </NavBarLink>
            <NavBarLink
              type="desktop"
              href={REGISTER_ADMIN_PAGE}
              active={location.pathname === REGISTER_ADMIN_PAGE}
            >
              Register Admin
            </NavBarLink>
            <NavBarLink type="desktop" href={LOGIN_PAGE}>
              <Button type="primary">Login</Button>
            </NavBarLink>
            {/* <NavBarLink type="desktop" href={LOGIN_PAGE}>
              <Button type="primary">Log out</Button>
            </NavBarLink> */}
          </ul>
        </div>
        <button
          type="button"
          aria-label="nav-button-open"
          onClick={handleMenuClick}
          className={`cursor-pointer tablet:hidden desktop:hidden ${
            menuOpen ? 'hidden' : ''
          }`}
        >
          <AiOutlineMenu size={28} />
        </button>
        <div
          className={`fixed z-[99] w-[100%] h-screen overflow-hidden p-10 top-0 tablet:hidden desktop:hidden bg-bgYellow ease-in duration-300
					${menuOpen ? 'left-0' : 'left-[100%] opacity-0'}`}
        >
          <div className="flex items-center justify-end w-full">
            <button
              type="button"
              aria-label="nav-button-close"
              onClick={handleMenuClick}
              className="cursor-pointer"
            >
              <AiOutlineClose size={28} />
            </button>
          </div>
          <div className="flex-col">
            <ul>
              <NavBarLink type="mobile" href={REGISTER_PHARMACIST_PAGE}>
                Register Pharmacist
              </NavBarLink>
              <NavBarLink type="mobile" href={REGISTER_ADMIN_PAGE}>
                Register Admin
              </NavBarLink>
              <NavBarLink type="mobile" href={LOGIN_PAGE}>
                <Button type="primary">Login</Button>
              </NavBarLink>
              {/* <NavBarLink type="mobile" href={LOGIN_PAGE}>
                <Button type="primary">Logout</Button>
              </NavBarLink> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
