import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
             <Route path="/" exact element={<ProductListing />} />
             <Route path="/product/:productId" element={<ProductDetail />} />
             <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
