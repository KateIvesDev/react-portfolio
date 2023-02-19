import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import Github from '../assets/icons8-github.svg'

export default function Footer(){

    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full mt-10">
            
                {/* Heading */}
                <h5 className="">
                    Kate Ives
                </h5>
        
                {/* Text */}
                <p className="">
                    I'm a Full Stack Web Developer dedicated to building modern and responsive websites.
                </p>
                <div className="">
                    <div>
                    <a href="https://www.github.com/kateivesdev"><img src={Github} alt='Github logo'/>
                    </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/kateivesdev" className=""> 
                        LinkedIn
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.twitter.com/kateivesdev">
                        Twitter
                        </a>
                    </div>
                </div>
                
            
                <div className="">
        
                {/* Heading */}
                <h5 className="">
                    Subscribe to My Newsletter
                </h5>
                 {/* Input */} 
                 {/* Mailchimp Form */}
                
                {/* End mc_embed_signup */}
          
                </div>
      
            <div className="">
             
                 {/* Copyright */}
                
                Copyright © {currentYear} Kate Ives. All Rights Reserved.
                <p>Made with <FontAwesomeIcon icon={brands('react')} /> React and Tailwind CSS.</p>
            </div>
           
  </footer>
  )
}