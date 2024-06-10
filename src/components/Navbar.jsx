
import React from 'react'

const Navbar = ({ setspeed ,
        setarraysize ,
        startSort,
        generateRandomArray ,
        setsort  }) => {
  return (
    <div className=' w-full inline-flex h-[15vh] bg-[#26001B] p-6'>
          <div className='flex flex-col w-1/2 h-full gap-y-3' >
              {/* array sie and animation speed */}
              <div className='flex items-center h-1/2 justify-evenly'>
                  {/* speed dropdown */}
                  <div className='flex items-center justify-center w-1/3 h-full gap-2 '>
                      <span className='text-xl mr-2 text-[#FFF600] font-bold'>Speed : </span>
                      <select className='w-1/2 p-1 text-xl font-bold text-center rounded-lg' name="speed" defaultValue="Fast" 
                      onChange={(e)=>setspeed(Number(e.target.value))}
                  >
                          <option value={60}>Very Slow</option>
                          <option value={40}>Slow</option>
                          <option value={30}>Medium</option>
                          <option value={20}>Fast</option>
                          <option value={5}>Very Fast</option>
                      </select>
                  </div>
                  <div className='flex items-center justify-center w-1/3 h-full gap-2'>
                      <span className='text-xl text-[#FFF600] font-bold'>Array Size : </span>
                      <input type="range" min={10} max={100} defaultValue={50}
                          className='w-1/2 '
                          onChange={(e)=>setarraysize(Number(e.target.value))}
                      />
                  </div>
                  
              </div>
              <div className='flex items-center justify-center h-1/2'>
                  <button className='bg-[#FF005C] text-white font-bold hover:bg-white hover:text-[#FF005C] p-2 w-1/3  rounded-xl lg:text-md'
                  onClick={generateRandomArray}
                  > Generate New Array</button>
              </div>
          </div>
          <div className='flex items-center justify-center w-1/6 h-full' >
            <button className='bg-[#FF005C] text-white p-2 w-1/3 rounded-xl font-bold hover:bg-white hover:text-[#FF005C]'
              onClick={startSort}
            >  Start</button>
          </div>
          <div className='flex flex-col items-center justify-center w-1/3 h-full gap-2' >
              <span className='text-xl text-[#FFF600] font-bold'>
            Sorting Algorithm 
          </span>
              
              <select className='w-1/2 p-1 text-xl font-bold text-center rounded-lg' name="algo" 
              onClick={(e)=>setsort(e.target.value)}
              >
                          <option value="bubble">Bubble Sort</option>
                          <option value="selection">Selection Sort</option>
                          <option value="merge">Merge Sort</option>
                          <option value="quick">Quick Sort</option>
                           <option value="insertion">Insertion Sort</option>
                      </select>
          </div>
          
    </div>
  )
}

export default Navbar
