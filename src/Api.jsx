import React from 'react'
import { useEffect, useState } from 'react'
 

export default function Api() {
   const [card, setCard] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?')
      .then(res => res.json())
      .then(data => setCard(data))
    }, [])
  
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-auto max-w-7xl pt-18'>
        <p className='font-bold text-teal-600 mb-2 text-sm'>API</p>
        <p className='text-3xl font-bold mb-2'>Semua API akan keluar di pages ini</p>
        <p className='text-slate-500 text-lg'>Di page Home hanya berisikan 9 API, sementara Di page ini berisikan 100 API.</p>
      </div>
      <div className='grid grid-cols-3 gap-5 my-8'>
        {card.map(post => (
          <div key={post.id} className='rounded-2xl px-6 py-8 bg-white shadow-lg'>
                <div className='border-slate-500 bg-teal-600 border-2 flex justify-center items-center rounded-lg h-44'>
                  <p className='text-2xl text-white font-bold'>{post.id}</p>
                </div>
                <p className='pt-2 text-lg text-slate-900 font-bold mt-2'>{post.title}</p>
                <p className='pt-2 text-slate-500 text-[16px]'>{post.body}</p>
            </div>
        ))}
      </div>
      <div className='mb-20'></div>
    </div>
  )
}
