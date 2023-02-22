import CreativeDraft from '../assets/creativeDraft.svg'
import ScrumBoard from '../assets/scrumBoard.svg'
import WebDevices from '../assets/webdevices.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import animate from './animate'

export default function Services(){
    animate()

    return (
      <section className='min-h-[75vh] my-10 pt-16 js-show-on-scroll' id='services'>
        <h2 className='text-2xl sm:text-4xl font-semibold my-10 text-blue-500'>Services<span className='animate-pulse text-darker-700'>|</span></h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 bg-darker-800 p-2 rounded-md'>

          <div className='flex flex-col p-10 border-darker-300 border-2 rounded-md m-1'>

            <img src={ScrumBoard} alt='illustration' className='h-48'/>
            <h3 className='my-10 text-2xl'>Website Strategy</h3>
            <p> Are you happy with your current website? Are you starting a new business? Whether you need a brand new website or simply a site refresh, I'll develop a clear strategy and timeline for updating your web presence.</p>
          </div>
          <div className='flex flex-col p-10 border-darker-300 border-2 rounded-md m-1'>
            <img src={ CreativeDraft } alt='illustration' className='h-52'/>
            <h3 className='my-10 text-2xl'>Responsive Website Design</h3>
            <p>My development process places a high priority on building websites that look great and function smoothly across a variety of devices and platforms.</p>
          </div>
          <div id='last-svc' className='flex flex-col p-10 border-darker-300 border-2 rounded-md m-1'>
            <img src={ WebDevices } alt='illustration'/>
            <h3 className='my-10 text-2xl'>Branding</h3>
            <p>Do you need to update your logo or branding? I can help ensure your branding is modern and consistent across your digital presence.</p>
          </div>
        </div>
      </section>
     

    )
}