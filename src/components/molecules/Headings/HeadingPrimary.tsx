import React from 'react';

interface HeadingPrimaryProps {}

export const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({
  children,
  ...rest
}) => {
  return <h1 {...rest}>{children}</h1>;
};
