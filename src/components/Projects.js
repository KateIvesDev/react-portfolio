import ProjectData from '../assets/data/projects'
import animate from './animate'

export default function Projects(){

    const projects = ProjectData.map(proj => {
        return(

            <div key={proj.id} className='rounded-md md:w-full border-2 border-dark-500 p-2 m-1'>
                <div className='flex flex-col content-between gap-2 text-center h-full'>
                    <img src={proj.img_url} alt={proj.project_title} className='rounded p-4'/>
                    <h3 className='text-xl md:text-2xl text-blue-500 px-2'>{proj.project_title}</h3>
                    <h4 className='text-sm uppercase py-2 tracking-widest'>Technologies</h4>
                    <p className='text-sm uppercase text-yellow px-4'>{proj.tech_stack}</p>
                    <p className='p-2'>{proj.description}</p>
                    <div className='flex flex-row justify-center'>
                        <a href={proj.live_url} className='text-blade hover:text-blade-800 mx-2 border-blade hover:border-blade-800 border px-2 py-1 rounded-md w-1/4' target='_blank' rel='noreferrer' aria-label='View the live website for this project'>Live</a>

                        {proj.github_url ? <a href={proj.github_url} className='text-blade hover:text-blade-800 mx-2 border-blade hover:border-blade-800 border px-2 py-1 rounded-md w-1/4' target='_blank' rel='noreferrer' aria-label='View the code repo for this project'>Code</a> : ''
                        }
                    </div>
                </div>
            </div>
        )
    })
    animate()

    return (
    <section className='my-10 min-h-[75vh] pt-16 js-show-on-scroll' id='projects'>
        <h2 className='text-2xl sm:text-4xl font-semibold my-10 text-blue'>Projects<span className='animate-pulse text-darker-700'>|</span></h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {projects}
       </div>
    </section> 
    )
}
