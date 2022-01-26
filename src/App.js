import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Service from './components/Service';
import AuthProvider from './Context/AuthProvider';
import AddNewOrder from './Page/AddNewOrder';
import Home from './Page/Home';
import Login from './Page/Login';
// import ManageOrder from './Page/ManageOrder';
import MyOrder from './Page/MyOrder';
import Profile from './Page/Profile';
import Register from './Page/Register';
import UpdateService from './Page/UpdateService';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/services">
              <Service />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrder />
            </PrivateRoute>
            {/* <PrivateRoute exact path="/manageorder">
              <ManageOrder />
            </PrivateRoute> */}
            <PrivateRoute exact path="/addservice">
              <AddNewOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/service/updateservice/:id">
              <UpdateService />
            </PrivateRoute>
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
