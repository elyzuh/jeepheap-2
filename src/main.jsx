import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'
import CMain from './components/CMain.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App}/>
      <Route path='/LoginPage' component={LoginPage}/>
      <Route path='/Cashier/Home' component={CMain}/>
    </Router>
  </div>,
)
