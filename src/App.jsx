import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./component/Feed";
import EditProfile from "./component/EditProfile";
import Connections from "./component/connections";
import ConnectionRecived from "./component/connectionRecived";

const App = () => {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div><Body/></div>}>
            <Route path="/" element={<div><Feed/></div>}/>
            <Route path="/login" element={<div><Login/></div>}/>
            <Route path="/profile" element={<div><Profile/></div>}/>
            <Route path="/profile/edit" element={<div><EditProfile/></div>}/>
            <Route path="/connections" element={<div><Connections/></div>}/>
            <Route path="/connection/recived" element={<div><ConnectionRecived/></div>}/>
          </Route>
        </Routes>

        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
