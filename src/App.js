// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
// import SubmitState from "./components/SubmitState";

function App() {
  return (
    <div className="body">
      <div className="container">
        {/* <Router>
          <Routes>
            <Route path="/" element={<Form />}/>
            <Route path="/submitted" element={<SubmitState />}/>
          </Routes>
        </Router> */}
        <Form />
      </div>
    </div>
  );
}

export default App;
