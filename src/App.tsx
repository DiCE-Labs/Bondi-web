import { useState } from "react";
import "./App.css";
import Layout from "./components/global/Layout";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Layout>
  );
}

export default App;
