import React from 'react';

interface CenteredHeadingProps {}

export const CenteredHeading: React.FC<CenteredHeadingProps> = ({
  children,
}) => {
  return (
    <h1 style={{ paddingTop: '100px', textAlign: 'center' }} className='text__paragraph--roboto'>{children}</h1>
  );
};
