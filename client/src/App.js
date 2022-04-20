import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import StartPage from 'pages/StartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/signin" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
