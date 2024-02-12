import { FC, ReactNode } from 'react';
import { ImSpinner8 } from 'react-icons/im';

export interface ButtonProps {
  type: 'primary';
  isLoading?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ type, isLoading = false, children }) => {
  return (
    <button
      type="button"
      className={`w-full px-6 py-3 font-medium text-center rounded-lg text-lg tablet:px-5 tablet:py-2 tablet:text-md
				${!isLoading ? 'duration-150 ease-in-out' : ''}
				${type === 'primary' ? 'bg-purple300  disabled:bg-purple300/30 text-white' : ''}
				`}
      disabled={isLoading}
    >
      {isLoading && <ImSpinner8 className="animate-spin" size={24} />}
      {!isLoading && children && <span>{children}</span>}
    </button>
  );
};

export default Button;
