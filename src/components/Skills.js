import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import animate from './animate'
import SolidButton from './Buttons' 

export default function Skills(){

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    let currDay = mm + '/' + dd + '/' + yyyy;

    const [totalKata, setTotalKata] = useState(0)
    const [allKata, setAllKata] = useState([])
    const [pages, setPages] = useState(0)
    const [currPage, setCurrPage] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    async function getKata() {

        const data = await fetch(`https://www.codewars.com/api/v1/users/k8ives/code-challenges/completed?page={1}`)
        return await data.json()
    }
     useEffect(() => {
        getKata()
        .then(data => {
            setTotalKata(data.totalItems)
            setAllKata(data.data)
            setPages(data.totalPages)
        })
            
    },[])

    let kataUrl = 'http://www.codewars.com/kata/'

    function handleClick(){
        setIsOpen(true)
    }
  

    let arrPages = Array.from({...pages}, (value,index) => index+1)
    console.log(arrPages)

    const kata = allKata.map(k => <li key={k.id}><a href={kataUrl+k.slug} target='_blank' rel='noreferrer' className='hover:text-white'>{k.name}</a></li>)

    const techSkills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Github', 'Google Cloud', 'Firebase', 'VS Code', 'ChromeDev Tools', 'Cypress', 'HTML5', 'CSS3', 'Sass/Scss', 'Bootstrap', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite', 'Wordpress']

    const softSkills =['Quick to Adapt', 'Fast Learner', 'Business Acumen', 'Conflict Resolution', 'Copywriting', 'Empathy', 'Focused', 'Risk Analysis', 'Persistence']

    animate()

    return (
    <section id='skills' className='my-10 min-h-[75vh] pt-16 js-show-on-scroll'>
        <h2 className='text-2xl sm:text-4xl font-semibold my-10 text-blue-500'>Skills<span className='animate-pulse text-darker-700'>|</span></h2>
    
        <div className=''>
            <h3 className='text-lg lg:text-xl'>Tech Skills</h3>
            <ul className='flex flex-row flex-wrap gap-6 my-10 text-lincoln text-base lg:text-xl'>
                {techSkills.map((skill,index) => {
                    const id = 'techskill-'+index
                    return <li key={id} className='bg-darker-700 px-4 py-1 rounded-md m-1'>{skill}</li>
                })}
            </ul>
        </div>
        <div>
                <h3 className='text-xl'>Soft Skills</h3>
                <ul className='flex flex-row flex-wrap gap-6 my-10 text-cyan text-base lg:text-xl'>
                {softSkills.map((skill, index) => {
                    const id = 'softskill-'+index
                    return <li key={id} className='bg-darker-700 px-4 py-1 rounded-md m-1'>{skill}</li>
                })}
            </ul>
        </div>
        <div className='relative'>
            <h3 className='text-xl'>Code Challenges</h3>
            <p className='my-5 text-base md:text-xl'>As of <span className='text-buffy font-semibold'>{currDay}</span>, I've completed <span className='text-buffy font-semibold '>{totalKata}</span> code challenges in JavaScript on CodeWars! Click below for a up-to-date list of my completed challenges.</p>
            <div id='kata-list' className={isOpen ? 'relative bg-dracula h-[75vh] w-full md:w-2/3 text-darker overflow-scroll p-10 z-50 box-shadow-md my-10' : 'hidden'}>
                <h5 className='font-bold text-xl'>Kate's CodeWars Challenges</h5>
                <FontAwesomeIcon icon={solid('xmark')} onClick={()=> setIsOpen(false)} className='absolute top-0 right-0 p-6 font-semibold text-3xl cursor-pointer'/>
                <p>Data pulled from the CodeWars API.</p>
                <ul className='list-decimal p-10'>
                    {kata}
                </ul>
                {}
                
            </div>
            <SolidButton name='Click for List' handleClick={handleClick}/>
        </div>
    </section> 
    )
}