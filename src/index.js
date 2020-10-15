import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';


const App= () =>{

  return(
    <div>
    <Slider/>
    </div>
  );
};

ReactDOM.render(<App/>,document.querySelector('#root'));
