import React from 'react'

export default function button(props) {
    const {text,func} = props
  return (
    <button onClick={func} className='px-8 py-4 mx-auto rounded-md border-[2px] bg-slate-950 border-blue-100 border-solid blueshadow duration-200'>
        <p>{text}</p>
        </button>

  )
}
