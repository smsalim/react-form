import React, { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import User from './components/User'

const App=()=> {

  const [formData, setFormData] = useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [error, setError] = useState(' ')
  const [users, setUsers] = useState([])


  const handleChange = (e)=>{
    const {name, value} = e.target
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }  

  const submitHandler = (e)=>{
    e.preventDefault()

    if (formData.password.length<8){
    setError('Password should be 8 characters long')
    return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Password and Conform Password must be same')
      return
    }

    if (!/[!@#$%^&*,.()<>"]/.test(formData.password)){
      setError('Password must contain any special character')
      return
    }

    if (!/[A-Z]/.test(formData.password)){
      setError('Password must have capital letter')
      return
    }

    setUsers((prevUsers)=>[
      ...prevUsers,{
        fullName:formData.fullName,
        email:formData.email,
        password:formData.password
    }])

    setError('')
    setFormData({
      fullName:'',
      email:'',
      password:'',
      confirmPassword:''
    })    

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
    <>
      <div>
        <div className='bg-white rounded-xl p-12 w-99'>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
          <form onSubmit={ (e)=> {
            submitHandler(e) 
            }}
            required
            className='flex flex-col items-center gap-2'>

            <input
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="text"
              placeholder='Enter the Name'/>

            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="email"
              placeholder='Enter the email' />

            <input
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="password" 
              placeholder='Enter the Password'/>

            <input
              className='border-2 border-black px-3 py-1 text-xl rounded text-emerald-950 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="password"
              name='confirmPassword'
              required
              value={formData.confirmPassword}
              onChange={handleChange}                            
              placeholder='Confirm the Password'/>

            {error && (
              <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
            )}

            <button
              className='text-xl px-4 py-3 rounded bg-emerald-950 font-semibold mt-5 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'>
              Submit
            </button>

          </form>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
          </p>
        </div>
        <ToastContainer />
      </div>
          {users.map((elem, id)=>{
          return <User key={id} elem={elem}/>
        })}
    </>
  )
}

export default App
