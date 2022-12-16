import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useReducer, useContext, useEffect } from "react";
import { initialState, reducer } from "./reducres/userreducer";
import Home from "./components/screeens/home";
import Login from "./components/screeens/login";
import Signup from "./components/screeens/signup";
import SchemWork from "./components/screeens/lessonSchema";
import Profile from "./components/screeens/profile";
import Post from "./components/screeens/createpost";
import CreateWork from "./components/screeens/createWork";
import CreateLesson from "./components/screeens/createLesson";
import RegisterStudents from "./components/screeens/registerStudents";
import ReportScreen from "./components/screeens/reportScreeen";
import RegisterSchool from "./components/screeens/registerSchool";
import Permission from "./components/screeens/createPermission";
import Amasomo from "./components/screeens/Amasomo";
import Nav from "./components/nav";

export const UserContext = createContext("");

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      navigate("/");
    } else {
      navigate("/login");
    }
    //ytiy
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/schema" element={<SchemWork />} />
      <Route exact path="/plan" element={<Amasomo />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/createPost" element={<Post />} />
      <Route exact path="/createSchema" element={<CreateWork />} />
      <Route exact path="/createPlan" element={<CreateLesson />} />
      <Route exact path="/register" element={<RegisterStudents />} />
      <Route exact path="/report" element={<ReportScreen />} />
      <Route exact path="/school" element={<RegisterSchool />} />
      <Route exact path="/permissin" element={<Permission />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Nav />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
