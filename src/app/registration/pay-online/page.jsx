import React from 'react'
import ScrollFadeIn from '@/app/(components)/scroll-animation'

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-4 mt-10 px-4">
      <ScrollFadeIn>
        <div className="flex h-16 items-center font-sans text-7xl text-[#222121] mt-20">
          To Be Updated Soon .... 
        </div>
      </ScrollFadeIn>
    </div>
  )
}

export default page