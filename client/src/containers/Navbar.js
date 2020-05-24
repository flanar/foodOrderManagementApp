import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    navbar: {
        padding: '0 30px',
        width: '100%',
        height: '70px',
        backgroundColor: '#333333',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)'
    },
    logo: {
        fontSize: '2rem',
    },
    menu: {
        fontSize: '1.2rem',
        display: 'flex',
        flexDirection: 'row',
        '& > li': {
            margin: '0 10px',
        }
    }
})

const Navbar = ({ isAuthorized, logout }) => {
    const classes = useStyles()

    return (
        <div className={ classes.navbar }>
            <div className={ classes.logo }>GISSTRONOMIA</div>
            <ul className={ classes.menu }>
                { isAuthorized ? <li><Link to='/order'>Order</Link></li> : null }
                { isAuthorized ? <li><Link to='/payment'>Payment</Link></li> : null }
                <li onClick={ logout }><Link to='/'>{ isAuthorized ? 'Logout' : 'Login' }</Link></li>
            </ul>
        </div>
    )
}

export default Navbar