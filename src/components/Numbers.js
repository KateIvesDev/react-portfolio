export default function Numbers({height}){

    let lines = Math.floor(height * 0.12599204761905 )

    let smScreen = Math.floor(height * 0.12599204761905 )-150
    let mdScreen = Math.floor(height * 0.12599204761905 )-300
    let lgScreen = Math.floor(height * 0.12599204761905 )-400

    let arr = [...Array(600)].map((item, index) => index)
    arr.shift()

        return(
            <div className='w-[25px] sm:w-[50px] mx-4 absolute top-16 sm:relative sm:top-0 text-xs sm:text-base text-dark-400'>
                {arr.map((item, index) => <p key={item}>{item}</p>)}
            </div>
        )

 
}