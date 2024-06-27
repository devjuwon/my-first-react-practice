import React from 'react'

const Browse = () => {
  return (
    <main className='min-h-[700px] bg-white px-[120px] mt-[70px]'>
        <div>
            <h1 className='text-center font-bold text-[32px]'>Browse The Range</h1>
            <p className='text-center text-[20px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
           <div className='flex justify-between gap-3'>
           <div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116885/image_106_wgis3f.png" alt="" />
                <p className='text-center text-[20px]'>Dining</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116886/Image-living_room_zs8dl4.png" alt="" />
                <p className='text-center text-[20px]'>Living</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116886/Mask_Group_dpsgmm.png" alt="" />
                <p className='text-center text-[20px]'>Bedroom</p>
            </div>
           </div>
        </div>
    </main>
  )
}

export default Browse
