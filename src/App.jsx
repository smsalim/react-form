import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form Submitted")
  }

  return (
      <div className='h-screen flex items-center justify-center'>
        <div className='bg-white rounded-xl p-6 w-90'>
          <form onSubmit={ (e)=> {submitHandler(e) } } className='flex flex-col items-center gap-2'>
            <input value={name} onChange={ (e)=>{setName(e.target.value)} } className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full' type="text" placeholder='Enter the Name'/>
            <input className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full' type="email" placeholder='Enter the email' />
            <input className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full' type="password" placeholder='Enter the Password'/>
            <input className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full' type="password" placeholder='Re - Enter the Password'/>
            <button className='text-xl px-4 py-5 rounded bg-emerald-700 font-semibold mt-5 w-full'>Submit</button>
          </form>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
          </p>
        </div>
      </div>
  )
}

export default App
