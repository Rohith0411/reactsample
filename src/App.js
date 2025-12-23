import React from 'react'

const App = () => {
  return (
    <div>
      <form>
       <input type='text' placeholder='Enter UserName:'></input><br></br>
       <input type='password' placeholder='Enter Password:'></input><br></br>
       <input type='number' placeholder='Enter Accno:'></input><br></br>
       <input type='email' placeholder='Enter EmailId:'></input><br></br>
       <label>Select Gender</label><br></br>
       <input type='radio' name='gender'></input>Male
       <input type='radio' name='gender'></input>Female
       <input type='radio' name='gender'></input>others<br></br>
       <label>Select Course</label><br></br>
       <input type='checkbox' name='cs'></input>C
       <input type='checkbox' name='cs'></input>Java
       <input type='checkbox' name='cs'></input>Web development
       <input type='checkbox' name='cs'></input>Python
       <input type='checkbox' name='cs'></input>None of these<br></br>
       <select>
        <option selected>Select Month</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
       </select><br></br>
       Select Colour:<input type='color' name='col'></input><br></br>
       Select DOB:<input type='date' name='dob'></input><br></br>
       select Time:<input type='time' name='time'></input><br></br>
       Select Week:<input type='week' name='week'></input><br></br>
       <button><b>Click Me</b></button>
       <input type='submit'></input>
      </form>
    </div>
  )
}

export default App



// function App(props)
// {
//   var a=props.data.rno
//   var b=props.data.sname
//   var c=props.data.issingle
//   var d=props.data.mark
//   var e=props.data.hobbies
//   var f=props.data
//   return(
//     <>
//     <h3>Type of rno:{typeof(a)}</h3>
//     <h3>Type of sname:{typeof(b)}</h3>
//     <h3>Type of married satus:{typeof(c)}</h3>
//     <h3>Type of mark:{typeof(d)}</h3>
//     <h3>{Array.isArray(d)?"It is Array":"It is Object"}</h3>
//     <h3>{Array.isArray(e)?"it is Array":"It is Object"}</h3>
    
//     </>
//   )
// }
// export default App



//Props in Functional Component

// import parse from 'html-react-parser';
// function App(props)
// {
//   var ans=""
//   for(var s in props.data)
//      {
//        ans=ans+`<li>${s} = ${props.data[s]}</li>`
//        console.log(s)
//      }
//   return(
//     <>
//       {parse("<ol>"+ans+"</ol>")}
//     </>
//   )
// }
// export default App


//Props in Class Component

// import React from "react";
// import parse from "html-react-parser";
// class App extends React.Component
// {
//   constructor(props)
//   {
//     var ans=""
//     super(props)
//     for(var s in props.data)
//     {
//       ans=ans+`<li>${s} = ${props.data[s]}</li>`
//       console.log(s)
//     }
//     var h="<ol type=I>"
//     this.state={
//       res:h+ans
//       // studentrollno:this.props.data.rno,
//       // studentname:this.props.data.sname,
//       // studentmark:this.props.data.mark,
//       // studentrank:this.props.data.rank,
//       // studentgrade:this.props.data.grade,
//       // studentlocation:this.props.data.location,
//       // studentsingle:this.props.data.issingle
//     }
//   }
//   render()
//   {
//     return(
//       <>
//       <h1>Combine React state + props</h1>
//       {parse(this.state.res)}
//       <div id="res"></div>
      
//       {/* <h1>Combine React state + props</h1>
//       <h2>Student Roll no: {this.state.studentrollno}</h2>
//       <h2>Student Name: {this.state.studentname}</h2>
//       <h2>student Mark: {this.state.studentmark}</h2>
//       <h2>student Rank: {this.state.studentrank}</h2>
//       <h2>student Grade: {this.state.studentgrade}</h2>
//       <h2>student Location: {this.state.studentlocation}</h2>
//       <h2>student single: {this.state.studentsingle?"yes":"no"}</h2> */}
//       </>
//     )
//   }
// }
// export default App



// import React from "react";
// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state={
//       sno:101,
//       sname:"Rohith",
//       marks:[99,45,55,66,88]
//     }

//   }
//   show=()=>{
//     this.setState({sname:"Rohith A"})
//   }
//   disp=()=>{
//     this.setState({marks:[95,99,78,97,100]})
//   }
//   disp1=()=>{
//     const newmark=[...this.state.marks]
//     newmark[2]=88
//     this.setState({marks:newmark})
//   }
//   render()
//   {
//     return(
//       <>
//       <h1>This is a class Component</h1>
//       <h2>Serial Number:{this.state.sno}</h2>
//       <h2>Student Name:{this.state.sname}</h2>
//       <h2>Mark:{this.state.marks}</h2>
//       <h2>{this.state.marks.map((v,index)=><>Mark {index+1}= {v}<br></br></>)}</h2>
//       <button onClick={this.show}>Update name</button>
//       <button onClick={this.disp}>Update All Marks</button>
//       <button onClick={this.disp1}>Update single Mark</button>
//       </>
//     )
//   }
// }
// export default App



// import { aadhar, accno, name, place } from "./Components/commonvar"
// import Import from "./Components/Import"

// function App(){
//   return(
//     <>
//     <Import/>
//     <h1>This is default component</h1>
//     <h1>Name:{name}</h1>
//     <h1>Place:{place}</h1>
//     <h1>AAdhar No:{aadhar}</h1>
//     <h1>Account No:{accno}</h1>
//     </>
//   )
// }
// export default App





// function App()
// {
//   var arr=[11,22,33,44,100,105,55,66]
//   var sum=0
//   var max=arr[0]
//   var order=arr
//   var fans=""
//   return(
//     <>
//     <h1>React Loop map method</h1>
//     <h2>Old model map</h2>
//     {arr[0]}
//     {arr[1]}
//     {arr[2]}
//     {arr[3]}
//     {arr[4]}
//     {arr[5]}

//     <h1>New Model map (loop) using br tag</h1>
//     {arr.map((v)=><>
//     {v}<br></br>
//     </>)}

//     <h1>New Model map (loop) using list tag</h1>
//     <ol type="I">
//     {arr.map((v)=><li>{v}</li>)}
//     </ol>

//     <h1>Task: Sum of Array</h1>
//     <div style={{display:"none"}}>
//     {arr.map((item)=><>
//     {sum=sum+item}
//     </>)}
//     </div>
//     <h3>sum of Array: {sum}</h3>

//     <h1>Task:Max of an Array</h1>
//     <div style={{display:"none"}}>
//       {arr.map((i)=><>
//         {max<i && <>{max=i}</>}
        
//       </>)}
//     </div>
//     <h3>Max of an Array: {max}</h3>

//     <h1>Ascending Order</h1>
//     <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
//     {order.map((item)=><>{item} </>)}

//     <h1>Descending Order</h1>
//     <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
//     {order.map((item)=><>{item} </>)}
    
//     <h1>Adding Element in an Array</h1>
//     <div style={{display:"none"}}>{order.push(989)}</div>
//     {order.map((item)=><>{item} </>)}

//     <h1>Remove Last Element in an Array</h1>
//     <div style={{display:"none"}}>{order.pop()}</div>
//     <div style={{display:"none"}}>{order.pop()}</div>
//     <div style={{display:"none"}}>{order.pop()}</div>
//     {order.map((item)=><>{item} </>)}

//     <h1>Remove last comma or plus or any char</h1>
//     <div style={{display:"none"}}>
//     {order.map((item)=><>{fans=fans+item+","} </>)}</div>
//     {fans.slice(0,-1)}
//     </>
//   )
// }
// export default App



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
