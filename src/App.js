import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthProvider from './Context/AuthProvider';
import AddNewOrder from './Page/AddNewOrder';
import Login from './Page/Login';
import ManageOrder from './Page/ManageOrder';
import MyOrder from './Page/MyOrder';
import Profile from './Page/Profile';
import Register from './Page/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/manageorder">
              <ManageOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
              <AddNewOrder />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
