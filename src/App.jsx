import React from 'react'
import './App.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const App=()=> {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState(' ')

  

  const submitHandler = (e)=>{
    e.preventDefault()

    if (password.length<8){
    setError('Password should be 8 characters long')
    return
    }

    if (password !== confirmPassword) {
      setError('Password and Conform Password must be same')
      return
    }

    if (!/[!@#$%^&*,.()<>"]/.test(password)){
      setError('Password must contain any special character')
      return
    }

    if (!/[A-Z]/.test(password)){
      setError('Password must have capital letter')
      return
    }

    setError('')
    console.log("Form Submitted")
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    toast.success('Login Successfull! ✅', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }

    

  return (
      <div>
        <div className='bg-white rounded-xl p-12 w-99'>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
          <form onSubmit={ (e)=> {
            submitHandler(e) 
            }}
            required
            className='flex flex-col items-center gap-2'>

            <input
              value={name}
              onChange={ (e)=>{
                setName(e.target.value)
                }}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="text"
              placeholder='Enter the Name'/>

            <input
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="email"
              placeholder='Enter the email' />

            <input
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="password" 
              placeholder='Enter the Password'/>

            <input
              value={confirmPassword}
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="password"
              placeholder='Re - Enter the Password'/>

            {error && (
              <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
            )}

            <button
              className='text-xl px-4 py-5 rounded bg-emerald-700 font-semibold mt-5 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'>
              Submit
            </button>

          </form>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
          </p>
          <ToastContainer />
        </div>
      </div>
  )
}

export default App
