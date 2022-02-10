import React, {useState} from 'react'
import './App.css';

import About from './components/About';
import Alert from './components/Alert';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


 

function App() {
   
   
  const [myStyle,setMyStyle] = useState( {
    color:'black',
    backgroundColor:'white'
  });
  const showStyle = (bgColor) =>{
        /*if(myStyle.color === 'white'){
         setMyStyle({
          color:'black',
          backgroundColor:'white',   
          
         });
         document.body.style.backgroundColor='white';
         showAlert('success','Light Mode Enable');
         document.title = 'React Tools - Light Mode';
        }
        */
        
        //else{
          setMyStyle({
            color:'white',
            backgroundColor:bgColor,
            
           });
           if(bgColor==='white'){
             setMyStyle({
              color:'black',
              backgroundColor:bgColor,
              
             });
            }
           document.body.style.backgroundColor=bgColor;
           showAlert('success','Dark Mode Enable');
           document.title = 'React Tools - Dark Mode';
        //}
        
  }
  const [alertText,setAlertText] = useState(null);
  const showAlert = (type,message) =>{
         setAlertText({
          type:type,
           message:message
           });
           setTimeout(() => {
             setAlertText(null)
           }, 2000);
  }
  return (
   
    <>
    <Router>
    <Navbar title='Word Editor' aboutTxt="About" showStyle={showStyle} mode={myStyle} />
    <Alert alertText={alertText} />
    <Switch>
          <Route path="/about">
            <About mode={myStyle}/>
          </Route>
          <Route path="/">
          <TextForm heading="Word Editor - Word Counter, Character Counter, Edit text" mode={myStyle} showAlert={showAlert}></TextForm>
          </Route>
        </Switch>
        </Router>

    </>

      
    
  );
}

export default App;
