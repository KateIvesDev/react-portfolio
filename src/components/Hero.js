import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import SolidButton, {OutlineButton } from "./Buttons"
import Typed from 'typed.js'

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


    return (
    <section className='my-10 sm:min-h-[90vh] flex flex-col lg:flex-row flex-nowrap items-center'>
        <div className='lg:w-3/4 py-10 flex-col justify-center'>
            <h1 className='font-semibold text-2xl sm:text-4xl md:text-6xl py-2'>Hi, I'm <span className='text-buffy'>Kate Ives</span></h1>
            <h2 className='text-2xl sm:text-3xl md:text-5xl py-4 text-blue-500'>Full Stack Software Engineer</h2>
            <p className='text-xl sm:text-2xl py-4 text-blade'>
                    <span style = {{whiteSpace: 'pre'}} ref={el}></span></p>
            <p className='text-lg my-10 text-dark-400'>I'm open to new opportunities. Check out my projects and get in touch!</p>
                <div className='my-2 flex flex-row gap-4'>
                    <a href='#projects'><SolidButton name='Projects'/></a>
                    <a href='#contact'><OutlineButton name='Contact'></OutlineButton></a>
                </div>
        </div>
        <div className='text-3xl lg:text-5xl gap-2 lg:w-1/4 flex flex-row lg:flex-col flex-wrap text-darker-700 '>
                <FontAwesomeIcon icon={brands('html5')} className=''
                data-name='html5'/>
                <FontAwesomeIcon icon={brands('css3-alt')} className='' data-name='css3'/>
                <FontAwesomeIcon icon={brands('square-js')} className='' data-name='js' />
                <FontAwesomeIcon icon={brands('react')} className='' data-name='react'/>
                <FontAwesomeIcon icon={brands('node-js')} className='' data-name='node'/>
                <FontAwesomeIcon icon={brands('sass')} className=''
                data-name='sass'/>
                <FontAwesomeIcon icon={brands('git')} className='' data-name='git'/>
                <FontAwesomeIcon icon={brands('github')} className=''
                data-name='github'/>
                <FontAwesomeIcon icon={brands('figma')} className=''        data-name='figma'/>
                <FontAwesomeIcon icon={brands('bootstrap') } className=''
                data-name='bootstrap'/>
            </div>
    </section> 
    )
}