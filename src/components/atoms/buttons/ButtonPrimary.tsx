import React from 'react';
import './styles.scss';

interface buttonPrimaryProps {}

export const ButtonPrimary: React.FC<buttonPrimaryProps> = ({
  children,
  ...rest
}) => {
  return (
    <button className="btn--primary t_paragraph--200" {...rest}>
      {children}
    </button>
  );
};
