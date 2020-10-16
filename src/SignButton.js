import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, Modal,Button } from 'rsuite';
import { Paragraph } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import SignUp from './SignUp';


const btn = {
  zIndex: "1",
        top:"120px",
        paddingTop:"10px",
       // backgroundImage:"linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)", 
       backgroundImage:"linear-gradient(to right, #4e54c8, #8f94fb",
        color:"white",
        left:"165px",
        position:"absolute",
        width:"100px"
}

class SignButton extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        show: false
      };
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    close() {
      this.setState({ show: false });
    }
    open() {
      this.setState({ show: true });
    }
    render() {
      return (
        <div className="modal-container">
            
          <ButtonToolbar>
            <Button size="lg" style={btn} onClick={this.open}> Sign Up</Button>
          </ButtonToolbar>
  
          <Modal show={this.state.show} onHide={this.close}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
              <SignUp/>
            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  

  export default SignButton;