import StartPage from 'pages/StartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
