import './App.css'
import { Outlet,useLocation } from 'react-router-dom';
import Header from './components/Header'
import Hello from './components/Hello'

function App() {
  const location = useLocation(); 
  return (
   <>
      <Header/>
      <main>
        <Outlet />
      </main>
      {location.pathname === '/' && <Hello />}
   </>
  )
}

export default App
