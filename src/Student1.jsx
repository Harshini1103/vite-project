const Student1=(props)=>{
    let studentName="Peter Parker"
    let designation="Spiderman"
    let colors="Red & Blue"
    // props.university="ABCD"//It is Immutable
    return(
        <>
        <h1>{studentName}</h1>
        <p>This person works as {designation}</p>
        <p>The color of his dress is {colors}</p>
        <p>The candidayte belongs to <i>{props.university}</i></p>
        <p>He is ver to {props.bestFriend}</p>
        </>
    )
}
export default Student1