import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const CardSection = ({ children }: Props) => {
  return (
    <div className="card__section">
      {children}
    </div>
  )
}

export default CardSection
