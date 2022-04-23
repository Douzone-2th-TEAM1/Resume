import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import StartPage from 'pages/StartPage';
import ModifyPage from 'pages/ModifyPage';
import ResignPage from 'pages/ResignPage';
import Form1Page from 'pages/Form1Page';
import Form2Page from 'pages/Form2Page';
import Alert from 'components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  const alert = useSelector((state) => state.AlertReducer);

  return (
    <BrowserRouter>
      {alert.status && <Alert status={alert.types} contents={alert.contents} />}
      <Switch>
        <Route exact path="/" component={StartPage}></Route>
        <Route path="/signin" component={LoginPage}></Route>
        <Route path="/main" component={MainPage}></Route>
        <Route path="/modify" component={() => <ModifyPage />}></Route>
        <Route path="/resign" component={() => <ResignPage />}></Route>
        <Route path="/form1" component={() => <Form1Page />}></Route>
        <Route path="/form2" component={() => <Form2Page />}></Route>
        {/* <Route path="/signin" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/modify" element={<ModifyPage />}></Route>
        <Route path="/resign" element={<ResignPage />}></Route>
        <Route path="/form1" element={<Form1Page />}></Route>
        <Route path="/form2" element={<Form2Page />}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
