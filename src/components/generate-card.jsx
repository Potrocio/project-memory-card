export function GenerateCard({photo, className, handleClick, id}) {
    const photoUrl = `url('${photo}')`
    return (
        <div
            className={className} 
            key={id}
            id = {id}
            onClick={event => {handleClick(event)}}
            style={{backgroundImage: photoUrl}}
        ></div>
    )
}
