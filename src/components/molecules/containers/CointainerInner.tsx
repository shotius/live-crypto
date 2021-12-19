import React from 'react';

interface CointainerInnerProps {}

export const CointainerInner: React.FC<CointainerInnerProps> = ({
  children,
}) => {
  return <div className="wrap__inner">{children}</div>;
};
