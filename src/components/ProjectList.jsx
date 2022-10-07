import React from 'react'

const ProjectList = ({database}) => {
  return (
    // distructure objects es6
    <div className="ml-16">
        {database.length > 0 ? database.map((dt)=> <div key={dt.id}>
          <li>{dt.title}</li>
          <li>{dt.desc}</li>
          <li>{dt.user}</li>
        </div>): <div><p>No data</p></div>}
        {/* data.map(()=>{}) */}
        {/* {data.map((dt)=><li key={dt.id}>{dt.desc}</li>)}
        {data.map((dt)=> <li key={dt.id}>{dt.title}</li>)}
        {data.map((dt)=><li key={dt.id}>{dt.desc}</li>)} */}
    </div>
  )
}

export default ProjectList