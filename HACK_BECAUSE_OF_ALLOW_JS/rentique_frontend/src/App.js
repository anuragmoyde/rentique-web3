import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/dashboard/Display";
import Signup from "./components/fork/Signup";
import Login from "./components/fork/Login";
import Management from "./components/Management/Management";
function App() {
    return (<div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/display/:id" element={<Display />}/>
        <Route path="/fork" element={<Signup />}/>
        <Route path="/fork2" element={<Login />}/>
        <Route path="/manager" element={<Management />}/>
      </Routes>
    </div>);
}
export default App;
