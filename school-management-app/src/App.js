import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AddSchool from './components/AddSchool';
import DisplaySchools from './components/DisplaySchools';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
<Routes>
  <Route element= {<DisplaySchools />} path="/" />
  <Route element= {<AddSchool />} path="/add" />
</Routes>
  </BrowserRouter>
  );
}

export default App;
