import React from 'react'
import { createUseStyles } from 'react-jss'

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

    return (
        <div className={ classes.container }>
            <div className={ classes.wrapper }>
                <Card>
                    <div className={ classes.title }>SIGN IN</div>
                    <form className={ classes.form } onSubmit={ login }>
                        <input type='text' placeholder='Login' className={ classes.input }></input>
                        <input type='password' placeholder='Password' className={ classes.input }></input>
                        <button type='submit'>Log in</button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login