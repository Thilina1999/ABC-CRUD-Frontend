import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import Toast from "./components/atoms/Toast";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Toast />
    </BrowserRouter>
  );
}

export default App;
