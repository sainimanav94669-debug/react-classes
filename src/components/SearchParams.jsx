import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchParams = () => {
    const BUTTONS_DATA = [
        {
            title : "Front End Developer",
            content : "A front-end developer builds the visual, user-facing parts of websites and applications that people see and click on"
        } , {
            title : "Back End Developer",
            content : "A backend developer builds and maintains the server-side logic, databases, and APIs that power websites and applications behind the scenes"
        }
    ]

    const router = useNavigate()
    const [searchParams] = useSearchParams() 
    const course = searchParams.get('sadad')

    const tabContent = BUTTONS_DATA.filter((item) => course === item.title.toLowerCase().replaceAll(" " , "-"))

    
  return (
    <div className='flex gap-5 p-5'>
        {BUTTONS_DATA.map((item , index) => (
            <button onClick={() => router(`?sadad=${item.title.replaceAll(" " , "-").toLowerCase()}`)} key={index} className={`py-2 px-4  cursor-pointer border border-solid rounded-md ${course === item.title.toLowerCase().replaceAll(" " , "-") ? "bg-black text-white border-transparent" : "text-black border-black"}`}>{item.title}</button>
        ))}
        {tabContent.map((item, index) => (
            <p key={index}>{item.content}</p>
        ) )}
    </div>
  )
}

export default SearchParams
