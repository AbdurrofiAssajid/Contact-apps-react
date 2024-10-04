import './App.css'
import Footer from './components/Footer'
import ContactInput from './containers/ContactInput'
import ContactList from './containers/ContactList'

function App() {
  return (
    <main className='main__container'> 
      <h1 className='main__container-heading'>Contact Apps</h1>
      <ContactInput/>
      <ContactList/>
      <Footer/>
    </main>
  )
}

export default App