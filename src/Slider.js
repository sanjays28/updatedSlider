import React from 'react';
import ReactDOM from 'react-dom'
import {Carousel} from 'rsuite';
import { Button,  } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import image1 from './one.jpg';
import image2 from './two.jpg';
import config from './defaultBlueprint.json'

const Slider =() => {


  
    const mystyle = {
  
      car : {
          width: "70vw",
          overflow: "hidden",
          borderRadius: "5px",
          margin: "2rem auto",
          boxShadow: " 0 5px 10px ",
          transition: "width 2s",
          position:"relative",
          },
        
      img :{
        position:"absolute",
        zIndex:"1"
        },
      content: {
        position:"relative",
        zIndex:"1",
        color:"purple",
        paddingTop:"60%",
        paddingLeft:"50px",
        textShadow: "#ffff 2px 0px 10px" 
        },
      div3:{
        position: "relative",
        display:"inline-block",
        },
       btn :{
        zIndex: "1",
        paddingLeft:"10px",
        textAlign:"center" ,
        backgroundImage:"linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)", 
        color:"white"
        }
      }
      const output = [];

      const getSlider = () => {
        
      Array.isArray(config.Slider) && config.Slider.forEach((items) => {
          output.push( 
            <div>
            <Carousel className="custom-slider" style={mystyle.car} shape="bar" >
          <div>
              <div style={mystyle.div3} >
                <img alt ="1 " src={image1} style={mystyle.img}></img>
                <h1 class="heading" style={mystyle.content}>{items.heading} <br></br>
                <h6 class="sub-heading" style={{paddingLeft:"10px"}}>{items.subHeading}</h6> 
                <Button size="lg" color="white" style={mystyle.btn}>Sign up </Button> 
                <br></br>
                </h1>
                </div>  
          </div>
        </Carousel>
        </div>
          )
      })
      return output;
      }

  return(
        <div>
            {getSlider()}
        </div>
        )
}

export default Slider;