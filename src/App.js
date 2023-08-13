
import './App.css';
import SignUp from './components/SignUp';
import Alert from './components/Alerts';

import React,{useState} from 'react';
import CheckBtn from './components/CheckBtn';


function App() {
  //show alert when we perform any operation
const [alerts, setAlert]=useState(null);


const useAlert=(messege,type)=>{
setAlert({
  msg:messege,
  type:type
})
setTimeout(()=>{
setAlert(null)
},1500)

}
const [mode, setMode]=useState("light");

const lightMode=()=>{
  if(mode==="light"){
    setMode("Dark")
    document.body.style.backgroundColor='black'
  }
  else{
    setMode("light")
    document.body.style.backgroundColor='white'
  }
}

  return (
    <div className="App">
        <CheckBtn mode={mode} lightMode={lightMode}/>
      <Alert alerts={alerts}/>
      <SignUp mode={mode} useAlert={useAlert}/>
    </div>
  );
}

export default App;
