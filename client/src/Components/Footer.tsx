'use client'
import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20 pb-6 border-t max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>

            <div className='main_component_design flex-1 flex flex-col mt-6'>
                <div className=' flex flex-row justify-between'>
                    <div className='xl:w-[45%] justify-center w-[30%] flex flex-col space-y-4'>
                        <Image src='/logo.svg' alt='logo' width={120} height={18} />
                        <div className='flex-col space-y-1  md:text-[16px] text-[14px]  text-neutral-500'>
                            <p>Carhub2023</p>
                            <p>All rights reserved&copy;</p>
                        </div>
                    </div>
                    <div className='ml-12  flex flex-row justify-between flex-wrap  w-full '>
                        {
                            footerLinks.map((item) => (
                                <div className='flex-col  space-y-4 ml-10 mb-8'>
                                    <h1 className='font-bold'>{item.title}</h1>
                                    <div className='flex  flex-col space-y-3'>
                                        {
                                            item.links.map((link) => (
                                                <Link href={link.url}>
                                                    <p className='text-neutral-500'>{link.title}</p>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex-row'>

                </div>
            </div>


        </div>
    )
}

export default Footer