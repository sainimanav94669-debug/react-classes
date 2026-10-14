import React from 'react'
import { useParams } from 'react-router-dom'
import { CARDDATA } from '../../utils/helper'

const ProductDeatils = () => {
    const {id} = useParams()
    const paramsData = CARDDATA.find(item => item.title.toLowerCase().replaceAll(" ","-") === id)
      return (
    <div>
        {id}
        {paramsData.content}
    </div>
  )
}

export default ProductDeatils
