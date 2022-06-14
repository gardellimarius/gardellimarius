import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './Routes/AnimatedRoutes'
import Navbar from './Layouts/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <AnimatedRoutes />
    </Router>
    </>
  );
}

export default App;
