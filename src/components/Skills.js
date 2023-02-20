import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Skills(){

    const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Github', 'VS Code', 'ChromeDev Tools', 'Cypress', 'HTML5', 'CSS3', 'Sass/Scss', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite']

    return (
    <section className='my-10 min-h-[75vh]'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>Skills<span className='animate-pulse text-darker-700'>|</span></h2>

        <div className='my-10 text-4xl flex flex-row flex-wrap gap-4 text-dracula'>
        <FontAwesomeIcon icon={brands('html5')} />
        <FontAwesomeIcon icon={brands('css3-alt')} />
        <FontAwesomeIcon icon={brands('square-js')} />
        <FontAwesomeIcon icon={brands('react')} />
        <FontAwesomeIcon icon={brands('node-js')} />
        <FontAwesomeIcon icon={brands('sass')} />
        <FontAwesomeIcon icon={brands('git')} />
        <FontAwesomeIcon icon={brands('github')} />
        <FontAwesomeIcon icon={brands('figma')} />
        </div>
        <ul className='flex flex-row flex-wrap gap-6 my-10 text-lincoln text-xl'>
            {skills.map(skill => {
                return <li className='bg-darker-700 px-4 rounded-sm'>{skill}</li>
            })}
        </ul>
        
       
       <div>
            <h3 className='py-2 text-xl'>Fun Fact: I've completed over 400 challenges on Codewars! ⚔️ </h3>
            <img src='https://www.codewars.com/users/k8ives/badges/micro' alt='Codewars'></img>
       </div>
    </section> 
    )
}