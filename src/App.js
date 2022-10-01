import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'; 
import Home from './pages/Home'; 
import Coin from './pages/Coin'; 

import * as S from './style';


function App() {

  return (
    <BrowserRouter>
    <S.AppContainer>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins/:id" element={<Coin />} />
    </Routes>
    </S.AppContainer>
  </BrowserRouter>
  );
}

export default App;
