import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light'); 

  const [alert, setAlert] = useState(null); 

  const showAlert = (message , type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
  }
  const removeBodyClasses =()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls)=> {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#383838';
      document.body.style.color = 'white';
      showAlert('Dark Mode Has Been Enabled', "Success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#383838'; 
      showAlert('Light Mode Has Been Enabled', "Success")
    }
  }

  // const toggleMode = ()=> {
  //   if(mode ==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#383838';
  //     document.body.style.color = 'white';
  //     showAlert('Dark Mode Has Been Enabled', "Success")
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = '#383838'; 
  //     showAlert('Light Mode Has Been Enabled', "Success")
  //   }
  // }

  return (
    <>
    <Router>
      <Navbar title="texttutils" aboutText="About Texttutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />}> </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} heading="Word Manupulator" />}> </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
