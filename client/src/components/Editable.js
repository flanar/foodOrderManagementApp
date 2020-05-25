import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    editable: {
        padding: '0.6rem 1rem',
        width: '260px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
    },
    order: {
        marginBottom: '10px',
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addButton: {
        width: '600px',
    },
    deleteButton: {
        width: '50px',
    },
    disabledDeleteButton: {
            width: '50px',
            backgroundColor: '#333333',
            cursor: 'default',
            '&:hover': {
                backgroundColor: '#333333',
            }
    }
})

const Editable = () => {
    const classes = useStyles()

    const [orders, setOrders] = useState([])
    const user = 'Piotr'

    useEffect(() => {
        setOrders([
            {
                user: "Karol",
                name: 'Karol',
                food: 'kebab'
            },
            {
                user: "Dorota",
                name: 'Dorota',
                food: 'kawa'
            }
        ])
    }, [])

    const inputClickHandler = (e, attribute, index) => {
        const ordersCopy = [...orders]
        ordersCopy[index][attribute] = e.target.value
        setOrders(ordersCopy)
    }

    const addNewOrder = () => {
        const newOrders = [...orders, { user: user, name: '', food: '' }]
        setOrders(newOrders)
    }

    const deleteOrderHandler = index => {
        const orderCopy = [...orders]
        orderCopy.splice(index, 1)
        setOrders(orderCopy)
    }

    const orderList = orders.map((order, index) => (
        <div key={ index } className={ classes.order }>
            { order.user === user ? <input type='text' value={ order.name } onChange={ e => { inputClickHandler(e, 'name', index) } } /> : <div className={ classes.editable }>{ order.name }</div> }
            { order.user === user ? <input type='text' value={ order.food } onChange={ e => { inputClickHandler(e, 'food', index) } } /> : <div className={ classes.editable }>{ order.food }</div> }
            { order.user === user ? <button className={ classes.deleteButton } onClick={ () => { deleteOrderHandler(index) } }>-</button> : <button className={ classes.disabledDeleteButton }>-</button> }
        </div>
    ))

    return (
        <div>
           { orderList }
           <button className={ classes.addButton } onClick={ addNewOrder }>+</button>
        </div>
    )
}

export default Editable