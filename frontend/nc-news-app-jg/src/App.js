import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
      {/* {console.log("inisde app page")} */}
        <Header />
        <Main />
        <Footer />
      
    </BrowserRouter>

  );
}

export default App;
