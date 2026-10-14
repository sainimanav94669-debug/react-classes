import React from 'react'

const Heading = ({text , className}) => {
  return (
   <div>
     <h2 className={`text-3xl text-red-500 font-bold leading-[150%] ${className}`}>
      {text}
    </h2>
   </div>
  )
}

export default Heading

// function abc(text) {
//     console.log(text)
// }

// abc("hello world")