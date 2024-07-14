"use client"
import { ArrowUpRight } from '@phosphor-icons/react'
import React from 'react'

const Button = ({name}) => {
  return (
    <div className="btn hover:text-white hover:border-4 border-4 border-slate-900 hover:border-white hover:bg-dark  bg-black text-white  font-semibold ">
        {name} <ArrowUpRight size={20} />
      </div>
  )
}

export default Button