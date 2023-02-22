export default function SolidButton(props){

    return(
        <button className='rounded-md bg-dracula border border-dracula text-darker-900 py-2 px-4 hover:bg-dracula-500 hover:border-dracula-500 hover:scale-105 ease-in-out max-w-1/2 font-medium m-1' onClick={props.handleClick} type={props.type}>{props.name} </button>
    )
}

export function OutlineButton(props){

    return(
        <button className="border-dracula border rounded-md text-dracula py-2 px-4 hover:border-dracula-500 hover:text-dracula-500 font-medium hover:scale-105 ease-in-out m-1">{props.name}</button>
    )
}

