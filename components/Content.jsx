import React from 'react'

const Content = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-24'>
        <div className='border-dashed border-t-gray-200 border-l-gray-200 border-b-orange-500 border-r-orange-500 border-[4px] h-max p-10 w-[630px] text-center'>
        <h1 className="text-orange-500 text-5xl tracking-wide font-bold">
            Landing Page Template
        </h1>
        <p className='mt-20 text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-orange-500 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates similique repellat quae esse placeat incidunt sit ex? Vero, consequuntur! 
            Voluptatem eos quos sapiente distinctio dolore, accusamus nulla? 
            Nostrum, expedita repellat!
        </p>

        <button className='cursor-pointer bg-orange-500 p-2 text-white w-[220px] h-[64px] text-center mt-20 text-[16px] font-bold hover:bg-orange-600 shadow-xl rounded-[18px]'>
            Click me for more info!
        </button>
        </div>
        </div>
  )
}

export default Content