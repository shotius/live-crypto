import React from 'react';

interface CenteredHeadingProps {}

export const CenteredHeading: React.FC<CenteredHeadingProps> = ({
  children,
}) => {
  return (
    <h1 style={{ paddingTop: '200px', textAlign: 'center' }}>{children}</h1>
  );
};
