import React, { useState, useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { CTX } from '../Store'

import Card from '../components/Card'

const useStyles = createUseStyles({
    container: {
        height: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: '400px',
    },
    title: {
        fontSize: '2.5rem',
        textAlign: 'center',
        margin: '10px',
    },
    form: {
        margin: '10px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: '10px',
        width: '100%',
    }
})

const Login = ({ login }) => {
    const classes = useStyles()

    const { dispatch } = useContext(CTX)

    const [credentials, setCredentials] = useState({login: '', password: ''})

    const submitHandler = e => {
        e.preventDefault()
        if(credentials.login.trim() !== '' && credentials.password.trim() !== '') {
            dispatch({ type: 'USER', payload: credentials.login })
            login()
        }
    }
    
    const setLogin = e => {
        setCredentials({
            ...credentials,
            login: e.target.value
        })
    }
    
    const setPassword = e => {
        setCredentials({
            ...credentials,
            password: e.target.value
        })
    }

    return (
        <div className={ classes.container }>
            <div className={ classes.wrapper }>
                <Card>
                    <div className={ classes.title }>SIGN IN</div>
                    <form className={ classes.form } onSubmit={ submitHandler }>
                        <input type='text' placeholder='Login' className={ classes.input } value={ credentials.login } onChange={ setLogin }></input>
                        <input type='password' placeholder='Password' className={ classes.input } value={ credentials.password } onChange={ setPassword }></input>
                        <button type='submit'>Log in</button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login