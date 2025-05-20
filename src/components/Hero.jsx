import React from 'react'
import Petani from './images/petanikode-hero.svg'

export default function Hero() {
  return (
    <div className='text-gray-100 bg-slate-800 h-[460px]'>
      <div className='flex mx-auto gap-4 max-w-7xl pt-40'>
            <div className='w-[700px]'>
              <h1 className='font-bold mb-5 text-6xl'>Petani Kode</h1>
              <p className='text-2xl '>Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux.</p>
              <div className='pt-6 flex gap-3'>
                    <a href="" className='bg-teal-600 px-3 py-2 rounded-lg hover:bg-teal-700'>Mulai Belajar</a>
                    <a href="" className='bg-teal-400/10 border border-teal-400/50 px-3 py-2 rounded-lg hover:bg-teal-700 text-teal-100'>Join Newsletter</a>
              </div>
            </div>
            <div>
              <img src={Petani} alt="" className='w-[500px] ml-10 -mt-6'/>
            </div>
        </div>
    </div>
  )
}
