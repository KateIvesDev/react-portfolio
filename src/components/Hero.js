import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import SolidButton, {OutlineButton } from './Buttons'
import Typed from 'typed.js'
import animate from './animate'

export default function Hero(){

    const el = useRef(null)
    const typed = useRef(null)

    useEffect(() => {
        const options = {
            strings: ['Problem Solver Extraordinaire', 'Meetup Organizer', 'Web Designer', 'Problem Solver Extraordinaire'],
            typeSpeed: 50,
            backSpeed: 50,
        }
        typed.current = new Typed(el.current, options)

        return () => {
            typed.current.destroy()
        }
    }, [])

    animate()


    return (
    <section className='my-10 min-h-[90vh] flex flex-col justify-center lg:flex-row flex-nowrap js-show-on-scroll'>
        <div className='lg:w-3/4 py-10 flex-col self-center'>
            <h1 className='font-semibold text-xl md:text-4xl py-2'>Hi, I'm <span className='text-buffy'>Kate Ives</span></h1>
            <h2 className='text-2xl sm:text-3xl py-4 text-blue-500'>Full Stack Software Engineer</h2>
            <p className='text-base md:text-xl py-4 text-blade'>
                    <span style = {{whiteSpace: 'pre'}} ref={el}></span></p>
            <p className='text-lg my-10 text-dark-400'>I'm open to new opportunities. Check out my projects and get in touch!</p>
                <div className='my-2 flex flex-row gap-4'>
                    <a href='#projects'><SolidButton name='Projects'/></a>
                    <a href='#contact'><OutlineButton name='Contact'></OutlineButton></a>
                </div>
        </div>
        <div className='text-2xl md:text-4xl lg:text-5xl gap-4 w-full lg:w-1/4 flex flex-row justify-evenly lg:flex-col lg:gap-2 flex-wrap text-darker-700'>
            <FontAwesomeIcon icon={brands('html5')} />
            <FontAwesomeIcon icon={brands('css3-alt')}/>
            <FontAwesomeIcon icon={brands('square-js')}/>
            <FontAwesomeIcon icon={brands('react')}/>
            <FontAwesomeIcon icon={brands('node-js')}/>
            <FontAwesomeIcon icon={brands('sass')}/>
            <FontAwesomeIcon icon={brands('git')}/>
            <FontAwesomeIcon icon={brands('github')}/>
            <FontAwesomeIcon icon={brands('figma')} />
            <FontAwesomeIcon icon={brands('bootstrap')}/>
        </div>
    </section> 
    )
}