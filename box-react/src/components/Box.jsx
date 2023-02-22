import React from 'react'

const Box = (props) => {
    const { clrArray } = props;
  return ( 
    <div className='container d-flex justify-content-space-evenly align-items-center flex-wrap '>
        {
            clrArray.map( (item, index) => 
                <div className='m-3' style={{ height: item.height, width: item.width, backgroundColor: item.color }} key={index}></div>
            )
        }
    </div>
  )
}

export default Box