

export default function SolidButton(props){

    return(
        <button className='rounded-md bg-dracula-400 text-darker-900 py-2 px-4 hover:bg-dracula-500 hover:scale-110 ease-in-out max-w-1/2' onClick={props.handleClick} type={props.type}>{props.name} </button>
    )
}

export function OutlineButton(props){

    return(
        <button className="border-dracula-400 border rounded-md text-dracula-400 py-2 px-4 hover:border-dracula-500 hover:text-dracula-500 hover:scale-110 ease-in-out">{props.name}</button>
    )
}

