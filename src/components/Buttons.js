

export default function SolidButton(props){

    return(
        <button className='rounded-md bg-dracula-400 text-darker-900 py-2 px-4 hover:bg-dracula-500' onClick={props.handleClick} type={props.type}>{props.name} </button>
    )
}

export function OutlineButton(props){

    return(
        <button className="border-dracula-400 border rounded-md text-dracula-400 py-2 px-4 hover:bg-darker-800">{props.name}</button>
    )
}

