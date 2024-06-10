import React from 'react'

const Bars = ({array, barColors }) => {
    

    const barwidth = 100/array.length;
  return (
      <div className='flex justify-center bg-red-400 h-3/4'>
          <div className='flex items-end justify-center '>
              {array.map((value, idx) => (
        <div 
          className="bg-teal-500 mx-0.5 " 
          key={idx} 
         style={{ height: `${value + 50}px`, width:"10px" , backgroundColor: barColors[idx] === 'default' ? 'teal' : barColors[idx] }}
              > { value}</div>
      ))}
          </div>
          
    </div>
  )
}

export default Bars
