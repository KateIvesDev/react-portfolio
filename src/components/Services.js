import CreativeDraft from '../assets/creativeDraft.svg'
import ScrumBoard from '../assets/scrumBoard.svg'

export default function Services(){
    
    return (
      <section className='py-24 min-h-[75vh]'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>Services</h2>

        <div className='flex flex-row flex-no-wrap gap-6 overflow-x-auto my-4'>
          <div className='flex-shrink-0 flex flex-col bg-darker-400 p-10 w-[400px]'>

            <img src={ScrumBoard} alt='illustration'/>
            <h3>Strategy</h3>
            <p> Are you happy with your current website? Are you starting a new business? Whether you need a brand new website or simply a site refresh, I'll develop a clear strategy and timeline for updating your web presence.</p>
          </div>
          <div className='flex-shrink-0 flex flex-col w-[400px]'>
            <h3>Responsive Design</h3>
            <p>My development process places a high priority on building websites that look great and function smoothly across a variety of devices and platforms.</p>
          </div>
          <div className='flex-shrink-0 flex flex-col  w-[400px]'>
            <img src={CreativeDraft} alt='illustration'/>
            <h3>Branding</h3>
            <p>Do you need to update your logo or branding? I can help ensure your branding is modern and consistent across your digital presence.</p>
          </div>
        </div>
      </section>
     

    )
}