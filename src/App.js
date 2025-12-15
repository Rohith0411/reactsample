function App(){
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++
    l++
    console.log("let:"+l)
    //c++ const value only 
    console.log("const"+c)
  }
  return(
    <>
      <h1>variable: global :{v}</h1>
      <h1>does not work let and const : because local</h1>
    </>
  )
}
export default App



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
