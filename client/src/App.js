import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import StartPage from 'pages/StartPage';
import ModifyPage from 'pages/ModifyPage';
import ResignPage from 'pages/ResignPage';
import Form1Page from 'pages/Form1Page';
import Form2Page from 'pages/Form2Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/signin" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/modify" element={<ModifyPage />}></Route>
        <Route path="/resign" element={<ResignPage />}></Route>
        <Route path="/form1" element={<Form1Page />}></Route>
        <Route path="/form2" element={<Form2Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
