import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import {BrowserRouter , Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";

const App = () => {
  return( 
  <Main>
      <BrowserRouter>
      <Navbar />
        <BigContainer>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/addBook" element={<AddBook/>} />
          </Routes>
        </BigContainer>
      </BrowserRouter>
  </Main>
  )
}
const Main = styled.div`
  width:100%;
`
const BigContainer = styled.div`
  width:100%;
`
export default App;

