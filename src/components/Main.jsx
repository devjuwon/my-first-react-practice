import React from 'react'


const Main = () => {
  return (
    <main className='relative w-full bg-cover bg-center min-h-[80vh] bg-[url("https://res.cloudinary.com/dnxovvjcz/image/upload/v1718030297/scandinavian-interior-mockup-wall-decal-background_1_y9u6be.png")]'>
        <div className='absolute border w-[500px] h-[320px] bg-[#FFF3E3] top-[120px] right-[100px] shadow-md rounded p-8'>
        <h6 className='text-[#333333] font-bold'>New Arrival</h6>
        <h1 className='text-[52px] text-[#B88E2F] font-bold leading-none'>Discover Our New Collection</h1>
        <p className='text-[#333333] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
        <button className='h-[74px] w-[222px] bg-[#B88E2F] mt-3 rounded shadow-sm text-white font-bold text-base '>BUY NOW</button>
        </div>
    </main>
  )
}

export default Main
