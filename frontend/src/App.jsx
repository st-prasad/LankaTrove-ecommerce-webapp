import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Homescreen from './screens/Homescreen'

const App = () => {
  return (
    <>
    <Header />
      <main className='py-3'>
        <Container>
          <h1>welcome to LankaTrove</h1>
        </Container>
        <Homescreen />
      </main>
      <Footer />
    </>
  )
}
export default App