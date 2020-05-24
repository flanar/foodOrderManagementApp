import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    card: {
        margin: '30px',
        padding: '20px',
        minWidth: '350px',
        minHeight: '300px',
        backgroundColor: '#444444',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)'
    }
})

const Card = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={ classes.card }>
           { children }
        </div>
    )
}

export default Card