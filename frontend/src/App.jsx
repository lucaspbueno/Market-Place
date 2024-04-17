import Header from "./template/Header.jsx";
import Footer from "./template/Footer.jsx";
import Main from "./template/Main.jsx";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App;