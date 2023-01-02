import Login from 'components/login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Main from 'components/common/main';

const queryClient = new QueryClient();

const App = (): JSX.Element => {

  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          { /* devtools */ }
          <ReactQueryDevtools initialIsOpen={true} />
          <BrowserRouter>
            <h3>TEST</h3>
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/main" element={<Main />}></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
