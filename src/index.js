import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import SimpleContainer from './Container';
import MenuAppBar from './MenuAppBar';
import SignButton from './SignButton';



const App= () =>{

  return(
    <div>
      <MenuAppBar/>
    <Slider/>
     
    <br></br>
    <SimpleContainer/>
    </div>
  );
};

ReactDOM.render(<App/>,document.querySelector('#root'));
