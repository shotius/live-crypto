import React from 'react';
import './styles.scss';

interface ButtonSqrProps {
  active?: boolean;
  onClick: () => void;
}

export const ButtonSqr: React.FC<ButtonSqrProps> = ({
  active = false,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-sqr-primary ${active && 'active'}`}
      {...rest}
    >
      {children}
    </button>
  );
};
