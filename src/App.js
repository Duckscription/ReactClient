import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router';
import Navbar from './components/navbar';
import Subscription from './pages/Subscription';
import SignIn from './pages/SignIn';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/signIn" element={<SignIn />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" exact element={<Main />} />
            <Route path="/subscriptions" exact element={<Subscription />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

const WithNav = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const WithoutNav = () => <Outlet />;

export default App;
