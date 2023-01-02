import React, { useState } from 'react';

const Template = (): JSX.Element => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const onClick = () => {
    fetch('http://localhost:3010/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        pw: pw
      })
    })
    .then((res) => res.json())
    .then((res) => {
      // main으로 이동할 구문 작성
    })
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