import React, { ElementType, ReactNode } from 'react'
import classNames from "classnames";

interface TypographyProps {
  as?: "span" | "p" | `h${1 | 2 | 3 | 4 | 5 | 6}`;
  variant?: "title" | "description";
  mb?: "xs"
  children: ReactNode;
  className?: string;
}

const Typography = ({ as: Component = "p", children, variant, mb }: TypographyProps) => {

  return (
    <Component className={classNames("typography", {
      [`typography--${variant}`]: variant,
      [`typography--mb-${mb}`]: mb
    })}>
      {children}
    </Component>
  )
}

export default Typography
