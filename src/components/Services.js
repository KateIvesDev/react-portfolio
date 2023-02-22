import CreativeDraft from '../assets/creativeDraft.svg'
import ScrumBoard from '../assets/scrumBoard.svg'
import WebDevices from '../assets/webdevices.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Services(){
    
    return (
      <section className='min-h-[75vh] my-10 pt-16' id='services'>
        <h2 className='text-2xl sm:text-4xl font-semibold my-10 text-blue-500'>Services<span className='animate-pulse text-darker-700'>|</span></h2>
        
        <div className='flex flex-row flex-no-wrap gap-6 overflow-x-auto my-4 '>
          <div className='flex-shrink-0 flex flex-col p-10 w-[400px] border-darker-300 border-2 rounded-md'>

            <img src={ScrumBoard} alt='illustration' className='h-48'/>
            <h3 className='my-10 text-2xl'>Strategy</h3>
            <p> Are you happy with your current website? Are you starting a new business? Whether you need a brand new website or simply a site refresh, I'll develop a clear strategy and timeline for updating your web presence.</p>
          </div>
          <div className='flex-shrink-0 flex flex-col p-10 w-[400px] border-darker-300 border-2 rounded-md'>
            <img src={ CreativeDraft } alt='illustration' className='h-52'/>
            <h3 className='my-10 text-2xl'>Responsive Design</h3>
            <p>My development process places a high priority on building websites that look great and function smoothly across a variety of devices and platforms.</p>
          </div>
          <div className='flex-shrink-0 flex flex-col p-10 w-[400px] border-darker-300 border-2 rounded-md'>
            <img src={ WebDevices } alt='illustration'/>
            <h3 className='my-10 text-2xl'>Branding</h3>
            <p>Do you need to update your logo or branding? I can help ensure your branding is modern and consistent across your digital presence.</p>
          </div>
        </div>
        <div className='flex flex-row justify-end'>
          <span className='text-2xl '>Scroll</span><FontAwesomeIcon icon={solid('arrow-right')} className=' text-dracula text-xl p-1 animate-pulse' />
        </div>
       
      </section>
     

    )
}