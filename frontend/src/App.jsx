import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  return (
    <>
    <Header />
      <main className='py-3'>
        <Container>
          <h1>welcome to LankaTrove</h1>
        <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App