import React from 'react';
import './styles.scss';

interface CenteredHeadingProps {}

export const CenteredHeading: React.FC<CenteredHeadingProps> = ({
  children,
}) => {
  return (
    <h1 className=" t__heading--centered--big t_paragraph--200 ">
      {children}
    </h1>
  );
};
