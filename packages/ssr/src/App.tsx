import React from "react";

const App = (): JSX.Element => {
  const onClickButton = () => {
    window.alert("clicked !!");
  }

  return (
    <div>
      <button onClick={onClickButton}>클릭</button>
    </div>
  );
};

export default App;