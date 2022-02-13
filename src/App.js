import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Subscription from './pages/Subscription';
import SignIn from './pages/SignIn';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/subscriptions" exact element={<Subscription />} />
        <Route path="/signIn" exact element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
