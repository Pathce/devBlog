import Login from 'components/login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Main from 'components/common/main';

const App = (): JSX.Element => {

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <h3>TEST</h3>
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
