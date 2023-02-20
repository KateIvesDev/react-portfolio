import HeadShot from '../assets/kwi-1.jpg'
import SolidButton from './Buttons'

export default function About(){

    return (
    <section id='about' className='my-10 min-h-[75vh]'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>About<span className='animate-pulse text-darker-700'>|</span></h2>
        <div className='flex flex-col-reverse md:flex-row my-10 justify-center'>
            <div className='w-full md:w-1/2'>
                <p className='my-5'> I'm a software engineer with a background in law, business and non-profit management. My experience has given me a unique understanding of the challenges facing businesses small and large.</p>

                <p className='my-5'>
                Things to know about working with me: I'm a problem-solver who loves new challenges. I work hard to be empathetic, open-minded and pragmatic. </p>
                
                <p className='my-5'>
                On the personal side: Gifs are my love language. I take my coffee with a shot of espresso. My favorite band is Radiohead.
                </p>
                
                <p className='my-5'>In my free time, you will find me working on home improvement projects, running around with my dog, collecting vinyl with my husband or organizing a Google Developer Group tech meetup!</p>

                <SolidButton name='Gif Generator'/>

                <p className='text-xs my-4'>*from my highly curated gif collection</p>

            </div>
            <div className='w-full md:w-1/2'>
                <div className='mx-auto p-2 w-2/3 '>
                    <img src={HeadShot} alt="Kate Ives"  />
                    
                </div>
                
            </div>
        
     </div>
    </section> 
    )
}