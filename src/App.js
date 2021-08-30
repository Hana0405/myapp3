import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css'
import Home from "./components/Pages/Home"
// import Footer from "./components/Footer"
import Products from "./components/Pages/Products"
import Service from './components/Pages/Service'
import SignUp from './components/Pages/SignUp'



const App = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   ga.send(['sign-up', location.pathname]);
  // }, [])
  return (
    <div>
      <Router>     
        {/* {location.pathname !== '/' && (<Navbar />)} */}
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services'  component={Service}/>
            <Route path='/products'  component={Products}/>
            <Route path='/sign-up'  component={SignUp}/>
        </Switch>
        
      </Router>
    </div>
  )
}

export default App
