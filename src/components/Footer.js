import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import animate from './animate'

export default function Footer(){

    const currentYear = new Date().getFullYear()
    animate()

    return (
        <footer className='w-full mb-10 text-xs sm:text-base js-show-on-scroll'>
            <p>Copyright © {currentYear} Kate Ives. All Rights Reserved.</p>
            <p>Made with <FontAwesomeIcon icon={brands('react')} className='text-cyan'/> React and Tailwind CSS.</p>    
        </footer>
 
  )
}