import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Footer(){

    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full text-xs sm:text-base">
            <p>Copyright © {currentYear} Kate Ives. All Rights Reserved.</p>
            <p>Made with <FontAwesomeIcon icon={brands('react')} className='text-cyan' /> React and Tailwind CSS.</p>    
  </footer>
 
  )
}