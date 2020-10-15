// import React from 'react';
// import ReactDOM from 'react-dom'
// import {Carousel} from 'rsuite';
// import { Button,  } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
// import image1 from './one.jpg';
// import config from './defaultBlueprint.json'



// function App() {

//   const sliderJSON = { 
    
//           "heading":"Welcome",
//           "subHeading":"Vlinder",
//           "img":"./1.jpg",
//           "btn":"Sign up"
      
    
//   };
//   const mystyle = {

//     car : {
//         width: "70vw",
//         overflow: "hidden",
//         borderRadius: "5px",
//         margin: "2rem auto",
//         boxShadow: " 0 5px 10px ",
//         transition: "width 2s",
//         position:"relative",
//         },
      
//     img :{
//       position:"absolute",
//       zIndex:"1"
//       },
//     content: {
//       position:"relative",
//       zIndex:"1",
//       color:"purple",
//       paddingTop:"60%",
//       paddingLeft:"50px",
//       textShadow: "#ffff 2px 0px 10px" 
//       },
//     div3:{
//       position: "relative",
//       display:"inline-block",
//       },
//      btn :{
//       zIndex: "1",
//       paddingLeft:"10px",
//       textAlign:"center" ,
//       backgroundImage:"linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)", 
//       color:"white"
//       }
//     }
  

// return(

  
//   <div>
//       <Carousel className="custom-slider" style={mystyle.car} shape="bar" >
//     <div>
//         <div style={mystyle.div3} >
//           <img alt ="1 " src={image1} style={mystyle.img}></img>
          
//           <h1 class="heading" style={mystyle.content}>{sliderJSON.heading} <br></br>
//           <h6 class="sub-heading" style={{paddingLeft:"10px"}}>Welcomes you</h6> 
//           <Button size="lg" color="white" style={mystyle.btn}>Sign up  </Button> 
//           <br></br>
          
//           </h1>
//           </div>
          
//     </div>
//     <div>
//         <div style={mystyle.div3} >
//           <img alt ="2 " src="https://inside.unbounce.com/wp-content/uploads/vancouver-skyline-unbounce.jpg " style={mystyle.img}></img>
          
//           <h1 class="heading" style={mystyle.content}>Vlinder <br></br>Labs</h1>
//           </div> 
//     </div>
//     <div>
//         <div style={mystyle.div3} >
//           <img alt ="3 " src="https://i.pinimg.com/originals/69/5e/c5/695ec5d1f7c5c8e29992ab0e99a6774d.jpg " style={mystyle.img}></img>
          
//           <h1 class="heading" style={mystyle.content}><br></br>Slider <br></br></h1>
//           </div> 
//     </div>
//     <div>
//         <div style={mystyle.div3} >
//           <img alt ="4 " src="https://i.pinimg.com/originals/ac/71/c1/ac71c1800d8e1e852bfd4e9fd68ed430.jpg " style={mystyle.img}></img>
          
//           <h1 class="heading" style={mystyle.content}> Good <br></br>Evening<br></br></h1>
//           </div> 
//     </div>
     
//   </Carousel>
//   </div>

// )



// };

// ReactDOM.render(<App/>,document.getElementById("root"))


// export default App;
