import React, { useState } from 'react'

const FormValidation = () => {
    const [data, setData] = useState({
        name: "",
        email: ""
    })

    
    const [value, setvalue] = useState(data)
    const [error, setError] = useState(false)
    function handleSubmit(e) {
        e.preventDefault() +
        setError(true)

        if (value.name !== "" && value.email !== "") {
            setError(false)
            alert("form Submited")
            setvalue(data)
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-[450px] mx-auto'>
                <input value={value.name} onChange={(e) => setvalue({...value, name : e.target.value})} type="text" placeholder='Enter Name' className='p-2 rounded-md border border-solid border-black/50' />
                {error && !value.name && (<><p>Name is requird</p></>)}
                <input value={value.email} onChange={(e) => setvalue({...value, email : e.target.value})} type="email" placeholder='Enter Email' className='p-2 rounded-md border border-solid border-black/50' />
                {error && !value.email && (<><p>Email is requird</p></>)}
                <button type='submit' className='px-4 py-2 cursor-pointer bg-black text-white rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation
