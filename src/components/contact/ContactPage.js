import React from 'react';
import ReactDOM from 'react-dom';
import DefaultUpload from '../contact/DefaultUpload'



export default class ContactPage extends React.Component{
  render(){
    return (
    <div className="container">
      <h2>
         upload  files to google cloud storage
            </h2>
            <p>posting to the google cloud storage.</p>
            <DefaultUpload />
    </div>
    )
  }
}


