import React from 'react'

const Paragraph = ({text , className}) => {
  return (
    <p className={`text-lg text-[#010101] leading-[150%] font-medium ${className}`}>
        {text}
    </p>
  )
}

export default Paragraph

// function abc(a) {
//     console.log(a)
// }
// abc(456789)