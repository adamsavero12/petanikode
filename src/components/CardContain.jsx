import React from 'react'

export default function CardContain() {
  return (
    <div>
      <div className='mx-auto max-w-7xl pt-20'>
        <div>
            <p className='font-bold text-teal-600 mb-2 text-sm'>KATEGORI</p>
            <p className='text-3xl font-bold mb-2'>Mau Belajar apa hari ini?</p>
            <p className='text-slate-500 text-lg'>Temukan tutorial berdasarkan minatmu.</p>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-8 '>
            <div className='rounded-2xl px-6 py-8 bg-white shadow-lg'>
                <div className='inline-flex p-2 bg-indigo-500 rounded-md'>
                  <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <p className='pt-5 text-slate-900 font-bold'>Basic Programming</p>
                <p className='pt-2 text-slate-500 text-[16px]'>Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.</p>
            </div>
            <div className='rounded-2xl px-6 py-8 bg-white shadow-lg'>
                <div className='inline-flex p-2 bg-orange-500 rounded-md'>
                  <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657.0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657.0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <p className='pt-5 text-slate-900 font-bold'>Web Programming</p>
                <p className='pt-2 text-slate-500 text-[16px]'>Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MyQSL, Codeigniter, React, dan masih banyak lagi.</p>
            </div>
            <div className='rounded-2xl px-6 py-8 bg-white shadow-lg'>
                <div className='inline-flex p-2 bg-cyan-500 rounded-md'>
                  <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <p className='pt-5 text-slate-900 font-bold'>Tutorial Lainnya</p>
                <p className='pt-2 text-slate-500 text-[16px]'>Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, loT, Blockchain, dan masih banyak lagi.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
