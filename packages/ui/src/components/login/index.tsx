import React, { useState } from 'react';

import { login } from 'utils/api';

const Template = (): JSX.Element => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const onClick = async () => {
    const result = login(id, pw);
    console.log(result);
  };

  const inputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setId(value);
  };
  
  const inputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setPw(value);
  };

  return (
    <>
      <input type="text" value={id} onChange={inputId} />
      <input type="password" value={pw} onChange={inputPw} />
      <button onClick={onClick}>LOGIN</button>
    </>
  )
}

export default Template;