import React, { useEffect } from 'react';
import { useState } from 'react';
import InputField from './InputField';


const App:React.FC = ()=> {
  
  const [state,setState] = useState<string>('');
  const [count,setCount] = useState<number | null | undefined>(1);
  const [obj,setObj] = useState<{text:string}>({text:'hello'});

  useEffect(()=>{
    setCount(null);
    setCount(undefined);
    setObj({text:'hello world'});
  },[])


  return (
    <div className="App">
      <h1>React with Typescript</h1>
      <InputField 
        value={state} 
        setValue={(e: React.ChangeEvent<HTMLInputElement>)=>setState(e.currentTarget.value)}
        user={{username:'jean',email:'jean@email.com'}}
      />
    </div>
  );
}

export default App;
