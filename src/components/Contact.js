import GithubSVG from './svg/github'
import TwitterSVG from './svg/twitter'
import LinkedinSVG from './svg/linkedin'
import animate from './animate'

export default function Contact(){

    animate()

    return (
    <section className='py-16 min-h-[75vh] flex flex-col md:flex-row gap-4 js-show-on-scroll' id='contact'>
        <div className='w-full md:w-1/2 my-2'>
            <h2 className='text-2xl sm:text-4xl font-semibold text-blue-500'>Let's Connect<span className='animate-pulse text-darker-700'>|</span></h2>
            <p className='my-10'>Need a developer for your next project or startup? Have a problem you are trying to solve? Just want to talk more about tech? Let's connect! Send me a message here or connect on social media.</p>
            <section className='flex flex-row'>
                <a href='https://www.linkedin.com/in/kateivesdev' target='_blank' rel='noreferrer' aria-label='Visit Kate Ives LinkedIn profile'><LinkedinSVG/></a>
                <a href='https://www.github.com/kateivesdev' target='_blank' rel='noreferrer' aria-label='Visit Kate Ives Github profile'><GithubSVG/></a> 
                <a href='https://www.twitter.com/kateivesdev' target='_blank' rel='noreferrer' aria-label='Visit Kate Ives Twitter profile'><TwitterSVG/></a> 
            </section>
            
        </div>
        <div className='w-full md:w-1/2 my-2'>
            <form name='contact' method='POST' className='w-full flex flex-col leading-8'>
            <input type="hidden" name="form-name" value="contact" />
                    <h3 className='text-xl font-semibold'>Send a Message</h3>
                    <p className='hidden'>
                        <input name='bot-field' autoComplete='off'/>
                    </p>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' placeholder='Pam Beasley' className='w-full p-2 rounded-md text-darker-800' required/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='pam@theoffice.com' className='w-full p-2 rounded-md text-darker-800' required/>
                    <label htmlFor='phone'>Phone</label>
                    <input type='phone' name='phone' placeholder='123-456-7890' className='w-full p-2 rounded-md text-darker-800' required/>
                    <label htmlFor='email'>Company</label>
                    <input type='text' name='company' placeholder='Dunder Mifflin' className='w-full p-2 rounded-md text-darker-800' required/>
                    <label htmlFor='email'>Message</label>
                    <textarea type='text' name='message' placeholder='My company needs a new website!' className='w-full p-2 rounded-md mb-6 text-darker-800' required></textarea>
                    <button className='rounded-md bg-dracula border border-dracula text-darker-900 py-2 px-4 hover:bg-dracula-500 hover:border-dracula-500 hover:scale-105 ease-in-out max-w-1/2 font-medium m-1' type='submit' name='Submit'>Submit</button>
            </form>
        </div>
    </section> 
    )
}