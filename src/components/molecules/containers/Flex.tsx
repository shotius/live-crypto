import React from 'react'

interface FlexProps {

}

export const Flex: React.FC<FlexProps> = ({children, ...rest}) => {
    return (
      <div {...rest}>
        {children}
      </div>
    );
}