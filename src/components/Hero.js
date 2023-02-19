import SolidButton, {OutlineButton } from "./Buttons"


export default function Hero(){

    return (
    <section className='my-10 min-h-[100vh]'>
        <div className='w-full py-10'>
            <h1 className='font-semibold text-2xl sm:text-4xl my-2'>Hi, I'm <span className='text-buffy'>Kate Ives</span></h1>
            <p className='text-2xl sm:text-4xl my-2'>Full Stack Software Engineer</p>
            <p className='text-xl sm:text-2xl my-2'>Problem-Solver Extraordinaire</p>
            <p className='text-lg my-10'>I'm open to new opportunities. Check out my projects or get in touch!</p>
        </div>
        <div className='my-2 flex flex-row gap-4'>
            
            <SolidButton name='Projects'/>
            <OutlineButton name='Contact'></OutlineButton>
        </div>
       
    </section> 
    )
}