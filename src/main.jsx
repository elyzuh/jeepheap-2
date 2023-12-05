import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import CMain from './components/CMain.jsx'
import CEncode from './components/CEncode.jsx'
import CRecords from './components/CRecords.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Cashier/Home' component={CMain}/>
      <Route path='/Cashier/Encode' component={CEncode}/>
      <Route path='/Cashier/Records' component={CRecords}/>
    </Router>
  </div>,
)
