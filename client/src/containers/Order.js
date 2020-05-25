import React from 'react'
import { createUseStyles } from 'react-jss'


import Poll from '../components/Poll'
import OrderCard from '../components/OrderCard'

const useStyles = createUseStyles({
    container: {
       padding: '10px',
    }
})

const Order = () => {
    const classes = useStyles()

    return (
        <div className={ classes.container }>
            <Poll />
            <OrderCard />
        </div>
    )
}

export default Order