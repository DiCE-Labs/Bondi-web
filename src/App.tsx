import "./App.css";
import Layout from "./components/global/Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Layout>
  );
}

export default App;
