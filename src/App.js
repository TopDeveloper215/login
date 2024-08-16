import logo from './assets/logo.svg';
import './assets/app.css';
import {BrowserRouter} from "react-router-dom"
import Routing from './routes/route';
import Navbar from "./layouts/navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}
export default App;
