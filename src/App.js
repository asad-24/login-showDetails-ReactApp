
import './App.css';
import SignUp from './components/SignUp';
import Alert from './components/Alerts';

import React,{useState} from 'react';


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
  return (
    <div className="App">
      
      <Alert alerts={alerts}/>
      <SignUp useAlert={useAlert}/>
    </div>
  );
}

export default App;
