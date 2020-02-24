import React from 'react'

import Image from '../../../shared/Image'

export const Card = ({ className, description, fileName, title }) => {
  return (
    <div className={className}>
      <Image maxWidth={600} alt="Gatsby in Space" filename={fileName} className="card__header-image" />
      <div className="card__body">
        <span className="card__description">{description}</span>
        <div className="card__description-border" />
        <h3 className="card__title">{title}</h3>
      </div>
    </div>
  )
}

export default Card
