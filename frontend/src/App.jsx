import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  const location = useLocation(); // Get current location

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {location.pathname === '/' && <h1>welcome to LankaTrove</h1>}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;
