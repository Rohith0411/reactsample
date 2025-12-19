function Rohith(){
    return(
        <>
        <h1>This is Rohith Component</h1>
        </>
    )
} 

function Import(){
    return(
        <>
        <Rohith/>
        <h1>This is user defined functional component</h1>
        <input type="text" placeholder="Enter your Name" value="Rohith"></input>
        <input type="button" value="Click Me"></input>
        </>
    )
}
export default Import