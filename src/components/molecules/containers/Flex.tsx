import React from 'react'
import "./styles.scss"

interface FlexProps {

}

export const Flex: React.FC<FlexProps> = ({children, ...rest}) => {
    return (
      <div className="flex" {...rest}>
        {children}
      </div>
    );
}