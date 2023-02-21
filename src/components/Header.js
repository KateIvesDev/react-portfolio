import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header(){

    const [isExpandedMM, setExpandedMM] = useState(false)

    let expanded = 'absolute top-0 right-0 p-10 bg-[#1d1e26]'
    let notExpanded = 'hidden sm:block'



    return (
        <header className='bg-[#1d1e26] p-4 w-full sm:w-72 flex flex-row sm:flex-col justify-between sm:h-screen fixed sm:sticky sm:top-0 text-dark-300 z-40'>
            <div className='flex flex-row'>
                <span className='text-2xl text-buffy hover:text-buffy-500 uppercase'>Kate Ives</span>
            </div>

            <div className='sm:hidden w-1/2 text-right'>
                <button onClick={()=> setExpandedMM(!isExpandedMM)}>
                    <FontAwesomeIcon icon={solid('bars')} className='text-dracula text-2xl' aria-label='Mobile Menu'/> 
                </button>
            </div>
            <nav className={isExpandedMM ? expanded : notExpanded}> 
                <button onClick={()=> setExpandedMM(!isExpandedMM)}>
                    <FontAwesomeIcon icon={solid('xmark')} className='text-dracula text-3xl absolute top-0 right-0 p-4' aria-label='Close Menu'/> 
                </button>
                <ul className='flex flex-col gap-4 cursor-pointer text-xl'>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Home</li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2 active:text-dracula-400'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> <a href='#about'> About</a></li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Projects</li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Skills</li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Services</li>
                    {/*<li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                    <FontAwesomeIcon icon={solid('angle-right')} className=''/> Blog</li>*/}
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Contact</li>
                </ul>
            </nav>
            <ul className="hidden sm:block">
                <li className='text-blade-800 hover:text-blade'>
                    <a href='https://www.github.com/kateivesdev' target='_blank' rel='noreferrer'>Github</a></li>
                <li className='text-blade-800 hover:text-blade'>
                    <a href='https://www.linkedin.com/in/kateivesdev' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                <li className='text-blade-800 hover:text-blade'>
                    <a href='https://www.twitter.com/kateivesdev' target='_blank' rel='noreferrer'>Twitter</a></li>
            </ul>
        </header> 
    )
}



