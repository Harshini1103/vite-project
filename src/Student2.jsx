const Student2=(props)=>{
     let studentName="Thor Odisan"
    let designation="Godofd Thunder"
    let colors="Red & Gold"
    return(
        <>
         <h1>{studentName}</h1>
        <p>This person works as {designation}</p>
        <p>The color of his dress is {colors}</p>
        <p>The candidayte belongs to <i>{props.university}</i></p>
        </>
       
    )
}
export default Student2