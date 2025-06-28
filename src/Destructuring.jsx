const Destructuring=({university,bestFriend})=>{
   let studentName="Peter Parker"
    let designation="Spiderman"
    let colors="Red & Blue"
    // university="ABCD"//Mutable
    return(
        <>
        <h1>{studentName}</h1>
        <p>This person works as {designation}</p>
        <p>The color of his dress is {colors}</p>
        <p>The candidayte belongs to <i>{university}</i></p>
        <p>She is very close to me and her name is  {bestFriend}</p>
    
    </>)
}
export default Destructuring