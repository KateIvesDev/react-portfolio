import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header(){


    return (
        <header className='bg-[#1d1e26] p-4 w-full sm:w-1/4 flex flex-row sm:flex-col justify-between sm:h-screen sm:sticky sm:top-0 text-dark-300'>
            <div className='flex flex-row'>
             
                <FontAwesomeIcon icon={solid('k')} className=' text-buffy px-2 py-1 rounded-full text-2xl' />
            
                <span className='px-4 pt-1 text-xl hover:text-buffy-500'>Kate Ives</span>
            
            </div>

       
            <div className='sm:hidden w-1/2 text-right'>Mobile Menu</div>
            <nav className="hidden sm:block "> 
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Home</li>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> About</li>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Projects</li>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Skills</li>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Services</li>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Blog</li>
                    <li className='hover:text-dracula-400  hover:bg-darker-900 hover:rounded-md p-2'>
                        <FontAwesomeIcon icon={solid('angle-right')} className=''/> Contact</li>
                </ul>
            </nav>
            <ul className="hidden sm:block">
                <li className='hover:text-blade'>
                    <a href='https://www.github.com/kateivesdev' target='_blank' rel='noreferrer'>Github</a></li>
                <li className='hover:text-blade'>
                    <a href='https://www.linkedin.com/in/kateivesdev' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                <li className='hover:text-blade'>
                    <a href='https://www.twitter.com/kateivesdev' target='_blank' rel='noreferrer'>Twitter</a></li>
            </ul>
        </header> 
    )
}



