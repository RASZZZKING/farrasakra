"use client"
import { ArrowUpRight } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const Button = ({name, url}) => {
  return (
    <Link href={url} className="btn max-lg:btn-md hover:text-white hover:border-4 border-4 border-slate-900 hover:border-white hover:bg-dark  bg-black text-white  font-semibold ">
        {name} <ArrowUpRight size={20} />
      </Link>
  )
}

export default Button