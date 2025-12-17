function App()
{
  var arr=[11,22,33,44,105,100]
  var sum=0
  var max=arr[0]
  return(
    <>
    <h1>React Loop map method</h1>
    <h2>Old model map</h2>
    {arr[0]}
    {arr[1]}
    {arr[2]}
    {arr[3]}
    {arr[4]}
    {arr[5]}

    <h1>New Model map (loop) using br tag</h1>
    {arr.map((v)=><>
    {v}<br></br>
    </>)}

    <h1>New Model map (loop) using list tag</h1>
    <ol type="I">
    {arr.map((v)=><li>{v}</li>)}
    </ol>

    <h1>Task: Sum of Array</h1>
    <div style={{display:"none"}}>
    {arr.map((item)=><>
    {sum=sum+item}
    </>)}
    </div>
    <h3>sum of Array:{sum}</h3>

    <h1>Task:Max of an Array</h1>
    <div style={{display:"none"}}>
      {arr.map((i)=><>
        {max<i && <>{max=i}</>}
        
      </>)}
    </div>
    <h3>Max of an Array:{max}</h3>


    </>
  )
}
export default App



// function App()
// {
//   var arr=[11,22,33,44,55,66]
//   var[v1,,v2,...v3]=arr //(,) get one value 
//   return(
//     <>
//     <h2>Spread operator</h2>
//     <h3>index 0: {v1}</h3>
//     <h3>index 1: {v2}</h3>
//     <h3>index 2: {v3}</h3>
//     </>
//   )
// }
// export default App



// function App(){
//   var res="pass"
//   var avg= 80
//   return(
//     <>
//     <h1>Give Grade only Pass </h1>
//     <h1>{
//       (res==="pass"&&
//      ((avg>=85 && "O Grade")||
//      (avg>=75 && "A grade")||
//      (avg>=65 && "B Grade")||
//      (avg>=55 && "C Grade")||
//      (avg>=45 && "D Grade")||
//      "FAIR"))||"Arrear"}</h1>
//     </>
//   )
// }
// export default App




// function App(){
//   var unit=125
//   return(
//     <>
//     <h1>Electricity Bill Calculation </h1>
//     <h3>
//       {
//         (unit<=100 && "Rs.0") ||
//         (unit>=101 && unit<=124 && "Rs.50")||
//         (unit>=125 &&  unit<=200 && "Rs."+(unit-100)*2)||
//         (unit>=201 &&  unit<=300 && "Rs."+(200+(unit-200)*3))||
//         (unit>=301 &&  unit<=400 && "Rs."+(500+(unit-300)*4))||
//         "₹"+(900+(unit-400)*5)
//       }
//     </h3>
//     </>
//   )
// }
// export default App




// function App(){
//   let avg=66
//   return(
//     <>
//     <h1>React simple if-elseif statement </h1>
//     <h1>{(avg>=85 && "OutStanding")||(avg>=75 && "Excellent")||(avg>=65 && "good")||"Fair"}</h1>
//     </>
//   )
// }
// export default App



//TASKS
//Even or Odd
// function App(){
//   let num=19
//   return(
//     <>
//     <h1>React simple if statement </h1>
//     <h2>{(num%2==0 && "even") || "odd"}</h2>
//     </>
//   )
// }
// export default App

//+ve or -ve
// function App(){
//   let num=0
//   return(
//     <>
//     <h1>React simple if-else statement </h1>
//     <h1>{num>0?"Positive":num<0?"Negative":"Zero"}</h1> //ternary operator
//     <h2>{(num>0 && "Positive")||(num<0 && "negative")||"Zero"}</h2>//normal if else
//     </>
//   )
// }
// export default App

//leap year or not
// function App(){
//   let year=2021
//   return(
//     <>
//     <h1>React simple if-else statement </h1>
//     <h2>{(year%4==0 && "Leap Year") || "Not a leapyear"}</h2>
//     </>
//   )
// }
// export default App

//eligible vote or not
// function App(){
//   let age=20
//   return(
//     <>
//     <h1>React simple if-else statement </h1>
//     <h2>{(age>=18 && "Eligible for Vote") || "Not Eligible"}</h2>
//     </>
//   )
// }
// export default App




// function App(){
//   let mark=20
//   return(
//     <>
//     <h1>React simple if statement </h1>
//     <h2>{mark>34 && "PASS" || "FAIL"}</h2>
//     </>
//   )
// }
// export default App




// function App(){
//   if(true)
//   {
//     var v=100
//     let l=200
//     const c=300
//     v++
//     l++
//     console.log("let:"+l)
//     //c++ const value only 
//     console.log("const"+c)
//   }
//   return(
//     <>
//       <h1>variable: global :{v}</h1>
//       <h1>does not work let and const : because local</h1>
//     </>
//   )
// }
// export default App



// function App()
// {
//   let myfun=(a,b,c)=>{
//     var tot=a+b+c
//      document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`
//   }
//   return(
//     <>
//     <h2>Arrow Function with parameter</h2>
//     <h3>note: onclick C must be caps</h3>
//     <h3>note: In calling function  use paranthesis when passing args</h3>
//     <button onClick={()=>myfun(10,20,30)}>Click me</button>
//     <div id="res"></div>
//     </>
//   )
// }
// export default App


// function App()
// {
//   let myfun=()=>{
//      document.getElementById("res").innerHTML="vazhthukal amithita button ahhh.."
//   }
//   return(
//     <>
//     <h2>Arrow Function without parameter</h2>
//     <h3>note: onclick C must be caps</h3>
//     <h3>note: In calling function don't use paranthesis when without passing args</h3>
//     <button onClick={myfun}>Click me</button>
//     <div id="res"></div>
//     </>
//   )
// }
// export default App



// import myimg from'./images/img2.jpg'
// function App()
// {
//   return(
//     <>
//     <h2>image demo Using path as expression</h2>
//     <center><img src={myimg} width="75%" height={800}></img></center>
//     </>
//   )
// }
// export default App




// function App()
// {
//   var a=100
//   var b=200
//   var c=300
//   return(
//     <>

//     {/* <h1>Biggest Among Two number Using conditional or Ternary operator</h1>
//     <h1>Biggest Number is: {a>b?a:b}</h1> */}

//     <h1>Biggest Among Three number Using conditional or Ternary operator</h1>
//     <h1>Biggest Number is: {(a>b && a>c)?a:(b>c)?b:c}</h1>
//     </>
//   )
// }
// export default App


// function App()
// {
// //javascript code 
// var a=10
// var b=20
// var c="Rohith"

//   return(
//     <>
//       <h1>Total:{a+b}</h1>
//       <marquee bgcolor='violet'><font size='7'>{c}</font></marquee>
//     </>
//   )
// }
// export default App


// import React from "react";

// class Parent extends React.Component
// {
//   render()
//   {
//     return(
//       <>
//       <center><h1>Welcome to the Parent Class</h1>
//       <h1>Parent class</h1>
//       <h1>Parent class</h1>
//       <h1>Parent class</h1>
//         </center>
//       </>
//     )
//   }
// }
// class App extends React.Component
// {
//   render()
//   {
//     return(
//       <>
//       <Parent/>
//       <center><h1>Welcome to the Code World</h1>
//        <p>Web development is the process of creating websites and web applications that run on the internet. It involves two main parts: front-end development, which focuses on what users see and interact with on the screen using technologies like HTML, CSS, and JavaScript, and back-end development, which handles the server, database, and application logic using languages like Python, Java, PHP, or Node.js. Web development also includes ensuring that websites are responsive, meaning they work well on all devices, and interactive, providing smooth user experiences. Developers often use frameworks and libraries such as React, Angular, or Django to make development faster and more efficient. Overall, web development combines design, programming, and problem-solving to build functional and visually appealing digital experiences.</p>
//         </center>
//       </>
//     )
//   }
// }
// export default App




// function App()
// {
//   return(
//     <div>
//     <h1>Welcome to the first day</h1>
//     <h1>To Learn React</h1>
//     <h1>Thank You</h1>
//     </div>
//   )
// }
// export default App






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
