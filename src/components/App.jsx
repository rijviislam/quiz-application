import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/" Component={PublicRoute}>
              <Route exact path="/signup" Component={Signup} />
              <Route exact path="/login" Component={Login} />
            </Route>
            <Route exact path="/" Component={PrivateRoute}>
              <Route exact path="/quiz/:id" Component={Quiz} />
              <Route exact path="/result/:id" Component={Result} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
