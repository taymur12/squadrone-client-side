import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Details from './Components/Pages/Details/Details';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Products from './Components/Pages/Products/Products'
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Components/Pages/Dashboard/Pay/Pay';
import MyOrder from './Components/Pages/Dashboard/MyOrders/MyOrder';
import Review from './Components/Pages/Dashboard/Review/Review';
import Footer from './Components/Shared/Footer/Footer';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
          </Route>
        <Route path='/home'>
        <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <PrivateRoute path="/myorder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
        <Route path='/login'>
        <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:productId">
            <Details></Details>
          </PrivateRoute>
      </Switch>
      <Footer></Footer>
      </Router>
    
      </AuthProvider>
    </div>
  );
}

export default App;
