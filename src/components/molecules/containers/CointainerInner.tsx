import React from 'react';

interface CointainerInnerProps {}

export const CointainerInner: React.FC<CointainerInnerProps> = ({
  children,
}) => {
  return <div className="innerContainer">{children}</div>;
};
