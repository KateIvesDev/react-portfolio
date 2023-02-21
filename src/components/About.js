import { useState, useEffect } from 'react'
import HeadShot from '../assets/kwi-1.jpg'
import SolidButton from './Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function About(){

    const[gif, setGif] = useState({
        randomImage: '',
    })

    const [allGifs, setAllGifs] = useState([])

    function getData() {

        const apiKey = process.env.REACT_APP_GIPHY_API
        return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=puppy&limit=100&offset=0&rating=g&lang=en`)
        .then(data => data.json())
    }
     useEffect(() => {
        getData()
        .then(data => {
            setAllGifs(data.data)
        })
            
    }, [])

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allGifs.length)
        const url = allGifs[randomNumber].images.original.url
        setGif(prevGif => ({
            ...prevGif,
            randomImage: url 
        }))

    }

    let newGifUrl = gif.randomImage

    return (
    <section id='about' className='my-10 pt-16 min-h-[75vh]'>
        <h2 className='text-2xl sm:text-4xl font-semibold text-blue-500'>About<span className='animate-pulse text-darker-700'>|</span></h2>
        <div className='flex flex-col-reverse lg:flex-row my-10 justify-center'>
            <div className='w-full lg:w-1/2'>
                <p className='my-5'> I'm a software engineer with a background in law, business and non-profit management. My experience has given me a unique understanding of the challenges facing businesses small and large.</p>

                <p className='my-5'>
                Things to know about working with me: I'm a problem-solver who loves new challenges. I work hard to be empathetic, open-minded and pragmatic. </p>
                
                <p className='my-5'>
                On the personal side: Gifs are my love language. I take my coffee with a shot of espresso. My favorite band is Radiohead.
                </p>
                
                <p className='my-5'>In my free time, you will find me working on home improvement projects, running around with my dog, collecting vinyl with my husband or organizing a Google Developer Group tech meetup!</p>

                <div className='relative'>
                    <img src={gif.randomImage} alt="gif" className={gif.randomImage ? 'block my-10' : 'hidden'}></img>
                    <FontAwesomeIcon icon={solid('xmark')} className={gif.randomImage ? 'text-white text-2xl absolute top-0 p-2 cursor-pointer' : 'hidden'} aria-label='close gif' onClick={()=> setGif({randomImage: ''})}/> 
                   
                </div>
                

                <SolidButton  id='gifBtn' name='Click for a Cute Gif' handleClick={handleClick}/>
            <p className={newGifUrl ? 'block text-xs my-4' : 'hidden'}>Powered By <a href='https://developers.giphy.com/' className='text-blade-800 hover:text-blade' aria-label='Visit the GIPHY website'>GIPHY. </a> A random puppy gif is pulled from the GIPHY API.</p>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='mx-auto p-2 w-2/3 text-center'>
                    <img src={HeadShot} alt="Kate Ives" className='mb-4'/>
                </div>
            </div>
        
     </div>
    </section> 
    )
}