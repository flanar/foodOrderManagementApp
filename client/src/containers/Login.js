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

    const { apiUrl } = useContext(CTX)

    const [credentials, setCredentials] = useState({login: '', password: ''})

    const generateToken = async (username, password) => {
        const response = await fetch(`${apiUrl}token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await response.json()
        return data
    }

    const submitHandler = e => {
        e.preventDefault()
        generateToken(credentials.login, credentials.password)
        .then(data => {
            console.log(data)
            if(credentials.login.trim() !== '' && credentials.password.trim() !== '' && data && data.access) {
                login()
            }
        })
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