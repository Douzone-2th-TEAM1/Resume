import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import StartPage from 'pages/StartPage';
import ModifyPage from 'pages/ModifyPage';
import ResignPage from 'pages/ResignPage';
import Form1Page from 'pages/Form1Page';
import Alert from 'components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Alert status={'success'} />
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/signin" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/modify" element={<ModifyPage />}></Route>
        <Route path="/resign" element={<ResignPage />}></Route>
        <Route path="/form1" element={<Form1Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
