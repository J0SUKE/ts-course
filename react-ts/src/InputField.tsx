import React from 'react'

interface User
{
  username:string,
  email:string,
  age?:number,
}

interface Props
{
  value:string
  setValue:(e: React.ChangeEvent<HTMLInputElement>)=>void
  user:User,
}

const InputField:React.FC<Props> = ({value,setValue}) => {
  return (
    <div>
        <input type="text" onInput={setValue} value={value}/>
    </div>
  )
}

export default InputField;