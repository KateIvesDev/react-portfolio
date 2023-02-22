import SolidButton from "./Buttons";
import GithubSVG from "./svg/github";
import TwitterSVG from "./svg/twitter";
import LinkedinSVG from "./svg/linkedin";

export default function Contact(){

    return (
    <section className='py-16 min-h-[75vh] flex flex-col md:flex-row gap-4' id='contact'>
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
            <form name="contact" method="POST" netlify-honeypot="bot-field"
            data-netlify="true" className="w-full flex flex-col leading-8">
              
                    <h3 className="text-xl font-semibold">Send a Message</h3>
                    <p className="hidden">
                        <input name="bot-field" autoComplete="off"/>
                    </p>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" placeholder="Pam Beasley" className="w-full p-2 rounded-md" required/>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder="pam@theoffice.com" className="w-full p-2 rounded-md" required/>
                    <label htmlFor='phone'>Phone</label>
                    <input type="phone" name="phone" placeholder="123-456-7890" className="w-full p-2 rounded-md" required/>
                    <label htmlFor='email'>Company</label>
                    <input type="text" name="company" placeholder="Dunder Mifflin" className="w-full p-2 rounded-md" required/>
                    <label htmlFor='email'>Message</label>
                    <textarea type="text" name="message" placeholder="My company needs a new website!" className="w-full p-2 rounded-md mb-6" required></textarea>
                    <SolidButton type="submit" name="Submit" style={{width:'200px'}}/>
            </form>
        </div>
        
    </section> 
    )
}