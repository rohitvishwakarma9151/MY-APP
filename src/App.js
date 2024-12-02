import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
// import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';



function App() {
  
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState('null')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500); 
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#022f4b';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
   <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
      </Routes>
      <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">*/}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* </Route> */}
        {/* </Switch>  */}
      </div>
      {/* </Router> */}
   </>
  );
}

export default App;
