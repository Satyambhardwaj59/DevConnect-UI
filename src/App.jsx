import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

const App = () => {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div><Body/></div>}>
            <Route path="/login" element={<div><Login/></div>}/>
            <Route path="/profile" element={<div><Profile/></div>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
