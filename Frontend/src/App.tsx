import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ConnectWallet from "./components/ConnectWallet";
import DAOCreationForm from "./components/DAOCreationForm";
import OrderbookInteraction from "./components/OrderbookInteraction";

function App() {
  return (
    <Router>
      <div className="main-content flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/wallet" element={<ConnectWallet />} />
          <Route path="/crearDAO" element={<DAOCreationForm />} />
          <Route path="/orderbook" element={<OrderbookInteraction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
