import React from 'react'
import { Link } from 'react-router-dom'
import { CARDDATA } from '../utils/helper'

const Cards = () => {

  return (
    <div>
        {CARDDATA.map((item  , index) => (
            <Link to={`${item.title.replaceAll(" ","-").toLowerCase()}`}>{item.title}</Link>
        ))}
    </div>
  )
}

export default Cards
