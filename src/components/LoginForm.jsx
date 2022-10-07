import React, { useState } from 'react'

const LoginForm = () => {
const initialData = Object.freeze({
   username: '',
   password: '' 
})

    const [formData, setFormData] = useState(initialData);

    // const {username, password} = formData;

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault() //prevent the page refresh
        
        console.log(setFormData({...formData}))
    }
  return (
<div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
  <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
    <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
      
    </div>
    <form className="p-12 md:p-24" onSubmit={handleSubmit}>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" name='username' onChange={handleChange} value ={formData.username || ''}/>
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
    
        <input type="password" name='password' id="password" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" onChange={handleChange} value={formData.password || ''}/>
      </div>
      <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full" type='submit' >Login</button>
    </form>
  </div>
 </div>
  )
}

export default LoginForm