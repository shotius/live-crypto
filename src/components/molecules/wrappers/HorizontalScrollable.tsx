import React from 'react';
import './styles.scss';

interface HorizontalScrollableProps {}

export const HorizontalScrollable: React.FC<HorizontalScrollableProps> = ({
  children,
  ...rest
}) => {
  return (
    <div {...rest} className="wrap__scroll--horizontal">
      {children}
    </div>
  );
};
