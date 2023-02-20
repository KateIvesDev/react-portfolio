//import { useState, useEffect } from 'react'
import SolidButton, {OutlineButton } from "./Buttons"


export default function Hero(){

    return (
    <section className='my-10 sm:min-h-[75vh] flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full py-10'>
            <h1 className='font-semibold text-2xl sm:text-4xl md:text-6xl py-2'>Hi, I'm <span className='text-buffy'>Kate Ives</span></h1>
            <h2 className='text-2xl sm:text-3xl md:text-5xl py-4'>Full Stack Software Engineer</h2>
            <p className='text-xl sm:text-2xl py-4 text-yellow'>Problem-Solver Extraordinaire</p>
            <p className='text-lg my-10 text-dark-400'>I'm open to new opportunities. Check out my projects or get in touch!</p>
            <div className='my-2 flex flex-row gap-4'>
            
            <SolidButton name='Projects'/>
            <OutlineButton name='Contact'></OutlineButton>
        </div>
        </div>
       
       
    </section> 
    )
}