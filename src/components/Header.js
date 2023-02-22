import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header(){

    const [isExpandedMM, setExpandedMM] = useState(false)

    let expanded = 'absolute top-16 right-0 p-10 bg-[#1d1e26] md:block h-screen'
    let notExpanded = 'hidden md:block'

    return (
        <header className='bg-[#1d1e26] p-4 w-full md:max-w-[350px] flex flex-row md:flex-col justify-between md:h-screen fixed md:sticky md:top-0 text-dark-300 z-40' onMouseLeave={()=> setExpandedMM(false)}>
            <div className='flex flex-row'>
                <span className='text-2xl text-buffy hover:text-buffy-500 uppercase'>Kate Ives</span>
            </div>

            <div className='md:hidden w-1/2 text-right'>
            {
                isExpandedMM ?
                <button onClick={()=> setExpandedMM(false)} aria-label='Mobile Menu Open'>
                    <FontAwesomeIcon icon={solid('xmark')} className='text-dracula text-2xl' /> 
                </button>
                :
                <button onClick={()=> setExpandedMM(true)} aria-label='Mobile Menu Close'>
                    <FontAwesomeIcon icon={solid('bars')} className='text-dracula text-2xl' /> 
                </button>
            }
               
            </div>
            <nav className={isExpandedMM ? expanded : notExpanded}  > 
               
                <ul className='flex flex-col gap-4 cursor-pointer text-base lg:text-xl'>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2 w-full'>
                        <a href='#home' className='block'> 
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Home
                        </a>
                    </li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2 active:text-dracula-400'>
                        <a href='#about' className='block'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> About
                        </a>
                    </li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <a href='#projects' className='block'>
                            <FontAwesomeIcon icon={solid('angle-right')} className=''/> Projects
                        </a>
                    </li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <a href='#skills' className='block'>
                            <FontAwesomeIcon icon={solid('angle-right')} className=''/> Skills
                        </a>
                    </li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <a href='#services' className='block'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Services
                        </a>
                    </li>
                    <li className='hover:text-dracula-400 hover:scale-105 hover:bg-darker-900 hover:rounded-md p-2'>
                        <a href='#contact' className='block'>
                            <FontAwesomeIcon icon={solid('angle-right')} className=''/> Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <ul className="hidden md:block">
                <li className='text-blade hover:text-blade-800'>
                    <a href='https://www.github.com/kateivesdev' target='_blank' rel='noreferrer'>Github</a></li>
                <li className='text-blade hover:text-blade-800'>
                    <a href='https://www.linkedin.com/in/kateivesdev' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                <li className='text-blade hover:text-blade-800'>
                    <a href='https://www.twitter.com/kateivesdev' target='_blank' rel='noreferrer'>Twitter</a></li>
            </ul>
        </header> 
    )
}



