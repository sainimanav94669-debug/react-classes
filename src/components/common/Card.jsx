import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

const Card = ({card}) => {
  return (
    <div>
        <img width={295} height={298} src={card.img} alt={card.title} />
        <Heading text={card.title}/>
        <Paragraph text={card.price}/>
    </div>
  )
}

export default Card
