import React,{useState} from 'react'
import ProjectList from './ProjectList'

function TemperatureApp() {
    const[tempValue,setTempValue]=useState(10)
    // const[tempColor,setTempColor]=useState("cold")

const tempIncrement=()=>{
    setTempValue(tempValue+1)
  
}

const tempDecrement=()=>{
    setTempValue(tempValue-1)
    
    // props passing into different component
    }
    

    const dummy_data =[
      {
      id: 1,
      title: 'first project',
      desc: 'Was cooo',
      user: 'Author'
    }, {
      id: 2,
      title: 'second project',
      desc: 'how is it going',
      user: 'Librily'

    }
  ]


  return (
    <div>
        <div className='bg-sky-800 max-w-sm items-center justify-center ml-12 p-8'>
        <div className={ tempValue >=15 ? 'h-40 w-40 bg-red-500 ml-20 rounded-full border-2 text-center text-white text-3xl p-16 hot col' : 'h-40 w-40 bg-indigo-300 ml-20 rounded-full border-2 text-center text-white text-3xl p-16 hot col' }>{tempValue}°C</div>
        <div className="mt-24 ml-16">
        <button onClick={()=>tempIncrement()} className="h-16 w-16 bg-gray-600 mr-10 rounded-full text-white text-lg border-2 cursor-pointer" >+</button>
        <button onClick={()=>tempDecrement()} className="h-16 w-16 bg-gray-600 rounded-full text-white text-lg border-2 cursor-pointer">-</button>
        </div>
        </div>
        <ProjectList  database = {dummy_data}/>
    </div>
  )
}

export default TemperatureApp