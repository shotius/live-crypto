import React from 'react';

interface buttonPrimaryProps {}

export const ButtonPrimary: React.FC<buttonPrimaryProps> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};
