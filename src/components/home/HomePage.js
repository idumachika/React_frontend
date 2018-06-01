

import React, { Component } from 'react';
//import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';
//import UploadPage from '../src/UploadPage';

//import UploadScreen from '../src/UploadScreen';

import RaisedButton from 'material-ui/RaisedButton';



class Login extends Component {

   constructor(props) {
       super(props);
       this.state = {
           email: '',
           password: ''
       }
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
   }

   onChange = (e) => {
       const state = this.state
       state[e.target.name] = e.target.value;
       this.setState(state);
   }

   onSubmit = (e) => {
       var self = this;
       e.preventDefault();
       // get our form data out of state
       var apiBaseUrl = "https://intense-citadel-31561.herokuapp.com/farm/login";

       const { email,password } = this.state;
       const { history } = this.props;

       let data = {
            email,
           password
          
       }


       console.log(JSON.stringify(data));
       axios.post(apiBaseUrl, data, {
           data: JSON.stringify(data),
        //    headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json',
        //        'Access-Control-Allow-Origin': '*',
        //        'Access-Control-Allow-Credentials': true,
        //        'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
        //    }
       }).then((result) => {
           //access the results here....
           // alert(result);
           console.log(result);
           //this.props.history.push('/UploadPage');
           console.log(this.props.history);  
           // if(result.data.status === 200){
           //     console.log(result);
           //     alert("successfull login");
           //     document.getElementById("buttonLogin").innerHTML = "success";
               try {
                   this.props.onSubmit(this.refs.email.value, this.refs.password.value)
                   .then(() => {
                            
                   });
                 }
                 catch(ex){
                   this.state.errorMsg = "Unable to connect to server";
                   console.log("error", ex);
                 }
             
               
               
           // }else if(result.data.status === 401){
           //     alert("Login Error");
           //     document.getElementById("buttonLogin").innerHTML="success";
           //     //uploadScreen.push('/UploadPage');

           // }
           
       }).catch(function (error) {
           console.log('error got' + error);
       });

      

   }

       render(){
       return(
           <div>
               <MuiThemeProvider>
                   <div className="col-sm-offset-4">
                       
                        <form onSubmit={this.onSubmit} >
                                <Row>
                                   <Col md={12}>
                                       <div className="form-group">
                                           <TextField
                                               name="email"
                                               value={this.state.email}
                                               floatingLabelText="Enter your Email"
                                               onChange={this.onChange}
                                                required

                                            />
                                        </div>
                                   </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={12}>
                                        <div className="form-group">
                                            <TextField
                                                type="password"
                                                name="password"
                                                value={this.state.password}
                                                floatingLabelText="Enter your Password"
                                                onChange={this.onChange}
                                                required
                                            />
                                        </div>
                                    </Col>
                               </Row>
                                <br />
                                <div className="button-submit" >
                                   <RaisedButton  type="submit" style={style} className="btn btn-primary" id="buttonLogin">submit</RaisedButton >
                                </div>
                            </form>



                       
                       </div>

                   </MuiThemeProvider>
                   
               </div>

       );
   }



}



const style = {
 margin: 15,
};
export default Login;









































// import React, {Component} from 'react'

// export default class HomePage extends Component{
//   render(){
//     return (
//     <div className="container">
//       <h1>Home Page</h1>
//       <p>This is the home page. Right on!</p>
//     </div>
//     );
//   }
// }
