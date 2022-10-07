import React from 'react'

const ItemList = ({data}) => {
  return (
    <div>
        {data.map((x)=><div key={x.id}>
                <li>{x.title}</li>
                <li>{x.desc}</li>
                <li>{x.user}</li>
            </div>
        )}
    </div>
  )
}

export default ItemList