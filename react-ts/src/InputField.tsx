import React from 'react'

interface Props
{
  value:string
  setValue:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

const InputField:React.FC<Props> = ({value,setValue}) => {
  return (
    <div>
        <input type="text" onInput={setValue} value={value}/>
    </div>
  )
}

export default InputField;