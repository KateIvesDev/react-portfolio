export default function Numbers( { getTotalLineHeight } ){

  
    let lines = 210

    let arr = [...Array(lines)].map((item, index) => index)

        return(
            <div className='w-[50px] mx-4 absolute top-16 sm:relative sm:top-0 text-dark-600'>
                {arr.map((item, index) => <p key={item}>{item}</p>)}
                    
            </div>
        )
}