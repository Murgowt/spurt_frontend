import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface NavBarLinkProps {
  type: 'mobile' | 'desktop';
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavBarLink: FC<NavBarLinkProps> = ({ type, href, children, onClick }) => {
  return (
    <Link to={href} onClick={onClick}>
      {type === 'mobile' && (
        <li className="py-4 text-lg font-semibold">{children}</li>
      )}
      {type === 'desktop' && (
        <li className="ml-10 font-semibold">{children}</li>
      )}
    </Link>
  );
};

export default NavBarLink;
