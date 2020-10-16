import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'rsuite';
import { Button,  } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import image1 from './one.jpg';
import image2 from './two.jpg';
import config from './defaultBlueprint.json'
import { Modal } from 'rsuite';
import SignButton from './SignButton';


const Slider =() => {

    
  
    const mystyle = {
  
      slider : {
          width: "100vw",
          Color:"White",
          overflow: "hidden",
          borderRadius: "5px",
          margin: "2rem auto",
          boxShadow: " 0 5px 10px ",
          transition: "width 2s",
          position:"relative",
          
          
          },
        
      img :{
        position:"absolute",
        left:"650px",
        top:"25px",
        zIndex:"1",
        float:"right",
        height:"350px",
        padding :"5px",
     
        },
      heading: {
        position:"relative",
        zIndex:"1",
        color:"#F0FFFF",
        top:"150px",
        paddingLeft:"50px",
        textShadow: "#0002d 2px 0px 10px",
        left:"50px",
        font:"Copperplate, Copperplate Gothic Light, fantasy",
        fontSize:"100px",
        },
      div3:{
        position: "relative",
        display:"inline-block",
        },
       btn :{
        zIndex: "1",
        paddingLeft:"10px",
        textAlign:"center" ,
       // backgroundImage:"linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)", 
       backgroundImage:"linear-gradient(to right, #4e54c8, #8f94fb",
        color:"white",
        left:"120px"
        }
      }
      const output = [];

      const getSlider = () => {

      Array.isArray(config.Slider) && config.Slider.forEach((items) => {
          output.push(
            <div>

              <div style={mystyle.div3} >
                <img alt ="1 " src={items.img} style={mystyle.img}></img>
                <h1 class="heading" style={mystyle.heading}>{items.heading} <br></br>
                <h6 class="sub-heading" style={{paddingLeft:"25px", paddingTop:"15px"}}>{items.subHeading}</h6> 
                <br></br>
               <SignButton/> 
                <br></br>
                </h1>
                </div>  
          
            </div>
       
        
          )
      })
      return output;
      }

  return(
        <div>

              
              <Carousel className="custom-slider" style={mystyle.slider} shape="dot" >
              
              
            {getSlider()}
            </Carousel>
            
        </div>
        )
}

export default Slider;