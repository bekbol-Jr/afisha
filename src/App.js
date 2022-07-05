import './App.css';
import Header from "./components/Header";
import AboutCompany from "./components/pages/AboutCompany";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App"
    style={{
        background: 'black'
    }}
    >
        <Header/>

        <Routes>
            <Route path={"/aboutCompany"} element={<AboutCompany/>}/>
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
