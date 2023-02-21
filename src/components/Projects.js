
import ProjectData from '../assets/data/projects'


export default function Projects(){

    const projects = ProjectData.map(proj => {
        return(

            <div className='bg-dark rounded my-4 w-full md:max-w-[520px] p-4'>
                <div className='bg-darker rounded flex-col gap-4 text-center p-2 h-full'>
                    <img src={proj.img_url} alt={proj.project_title} className='rounded p-4'/>

                        <h3 className='text-xl md:text-2xl text-blue-500 px-2'>{proj.project_title}</h3>
                        <h4 className='text-xs uppercase py-2 tracking-widest'>Technologies</h4>
                        <p className='text-xs uppercase text-yellow px-4'>{proj.tech_stack}</p>
                        <p className='text-justify text-sm p-2'>{proj.description}</p>
                        <a href={proj.live_url} className='text-blade-800 hover:text-blade mx-2 border-blade-800 hover:border-blade border px-3 rounded-md' target='_blank' rel='noreferrer'>Preview</a>

                        {proj.github_url ? <a href={proj.github_url} className='text-blade-800 hover:text-blade mx-2 border-blade-800 hover:border-blade border px-3 rounded-md' target='_blank' rel='noreferrer'>Code</a> : ""
                        }
                </div>
            </div>
            
        
        )
    })

    return (
    <section className='my-10 min-h-[75vh]' id='projects'>
        <h2 className='text-2xl sm:text-4xl font-semibold my-10 text-blue'>Projects<span className='animate-pulse text-darker-700'>|</span></h2>
        <div className='flex flex-col md:flex-row flex-wrap flex-shrink-0 gap-2 justify-center'>
        {projects}
       </div>
        
        
    </section> 
    )
}
