import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Skills(){

    const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Github', 'VS Code', 'ChromeDev Tools', 'Cypress', 'HTML5', 'CSS3', 'Sass/Scss', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite']

    return (
    <section className='my-10 min-h-[75vh]'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>Skills</h2>

        <ul className='flex flex-row flex-wrap gap-4 my-10 text-lincoln text-xl'>
            {skills.map(skill => {
                return <li className='bg-darker-700 px-4 rounded-sm'>{skill}</li>
            })}
        </ul>
        <div className='text-4xl flex flex-row gap-4 text-dracula'>
        <FontAwesomeIcon icon={brands('html5')} />
        <FontAwesomeIcon icon={brands('css3-alt')} />
        <FontAwesomeIcon icon={brands('square-js')} />
        <FontAwesomeIcon icon={brands('react')} />
        <FontAwesomeIcon icon={brands('node-js')} />
        <FontAwesomeIcon icon={brands('sass')} />
        </div>
       
       
    </section> 
    )
}