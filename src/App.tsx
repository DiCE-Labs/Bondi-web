import "./App.css";
import Layout from "./components/global/Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Layout>
  );
}

export default App;
