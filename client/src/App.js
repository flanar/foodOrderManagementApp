import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Store from './Store'
import Navbar from './containers/Navbar'
import Login from './containers/Login'
import Order from './containers/Order'
import Payment from './containers/Payment'

const App = () => {
    const [isAuthorized, setIsAuthorized] = useState(true)

    const login = () => {
        setIsAuthorized(true)
    }

    const logout = () => {
        setIsAuthorized(false)
    }

    const authorized = (
        <Switch>
            <Route path='/order' component={Order} />
            <Route path='/payment' component={Payment} />
            <Route path='/' component={Order} />
        </Switch>
    )

    const noAuthorized = (
        <Login login={ login } />
    )

    return (
        <Router>
            <Store>
                <Navbar isAuthorized={ isAuthorized } logout={ logout }/>
                { isAuthorized ? authorized : noAuthorized }
            </Store>
        </Router>
    )
}

export default App