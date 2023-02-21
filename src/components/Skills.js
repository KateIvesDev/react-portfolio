

export default function Skills(){


    const techSkills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Github', 'Google Cloud', 'Firebase', 'VS Code', 'ChromeDev Tools', 'Cypress', 'HTML5', 'CSS3', 'Sass/Scss', 'Bootstrap', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite', 'Wordpress']

    const softSkills =['Adaptive', 'Business Acumen', 'Conflict Resolution', 'Copywriting', 'Emotional Intelligence', 'Empathetic', 'Focused', 'Risk Assessment', 'Self Directed Learning']

    return (
    <section className='my-10 min-h-[75vh] relative'>
        <h2 className='text-2xl sm:text-4xl font-semibold my-10 text-blue-500'>Skills<span className='animate-pulse text-darker-700'>|</span></h2>
    

        <div className=''>
            <h3 className='text-xl'>Tech Skills</h3>

            <ul className='flex flex-row flex-wrap gap-6 my-10 text-lincoln text-xl'>
                {techSkills.map((skill,index) => {
                    const id = "techskill-"+index
                    return <li key={id} className='bg-darker-700 px-4 py-1 rounded-md'>{skill}</li>
                })}
            </ul>
        </div>
        <div>
                <h3 className='text-xl'>Soft Skills</h3>
                <ul className='flex flex-row flex-wrap gap-6 my-10 text-cyan text-xl'>
                {softSkills.map((skill, index) => {
                    const id = "softskill-"+index
                    return <li key={id} className='bg-darker-700 px-4 py-1 rounded-md'>{skill}</li>
                })}
            </ul>
        </div>
        
        
    </section> 
    )
}