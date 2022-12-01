import React from "react";

const App = (): JSX.Element => {
  const onClickButton = () => {
    window.alert("clicked !!");
  }

  return (
    <>
      <button onClick={onClickButton}>클릭</button>
    </>
  );
};

export default App;