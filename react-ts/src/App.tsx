import React from 'react';
import { useState } from 'react';
import InputField from './InputField';


const App:React.FC = ()=> {
  
  const [state,setState] = useState('');

  return (
    <div className="App">
      <h1>React with Typescript</h1>
      <InputField value={state} setValue={(e: React.ChangeEvent<HTMLInputElement>)=>{
        setState(e.currentTarget.value)
      }}/>
    </div>
  );
}

export default App;
