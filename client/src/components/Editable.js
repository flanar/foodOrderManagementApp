import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import Select from './Select'

import { CTX } from '../Store'

const useStyles = createUseStyles({
    editable: {
        padding: '0.6rem 1rem',
        width: '260px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
    },
    header: {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },
    order: {
        marginBottom: '10px',
        width: '900px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerWrapper: {
        width: '826px',
    },
    addButton: {
        width: '900px',
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

    const { dispatch, user, orders } = useContext(CTX)

    const inputClickHandler = (e, attribute, index) => {
        const ordersCopy = [...orders]
        ordersCopy[index][attribute] = e.target.value
        dispatch({ type: 'ORDERS', payload: ordersCopy })
    }

    const addNewOrder = () => {
        const newOrders = [...orders, { user: user.username, name: '', food: '' }]
        dispatch({ type: 'ORDERS', payload: newOrders })
    }

    const deleteOrderHandler = index => {
        const ordersCopy = [...orders]
        ordersCopy.splice(index, 1)
        dispatch({ type: 'ORDERS', payload: ordersCopy })
    }

    const orderList = orders.map((order, index) => (
        <div key={ index } className={ classes.order }>
            <div className={ classes.editable }>{ order.user }</div>
            { order.user === user.username ? <Select defaultOption='Karol' options={['Karol', 'Dorota', 'Kamil', 'Piotr', 'Bartek']}/> : <div className={ classes.editable }>{ order.name }</div> }
            { order.user === user.username ? <input type='text' value={ order.food } onChange={ e => { inputClickHandler(e, 'food', index) } } /> : <div className={ classes.editable }>{ order.food }</div> }
            { order.user === user.username ? <button className={ classes.deleteButton } onClick={ () => { deleteOrderHandler(index) } }>X</button> : <button className={ classes.disabledDeleteButton }>-</button> }
        </div>
    ))

    return (
        <div>
            <div className={ [classes.order, classes.headerWrapper].join(' ') }>
                <div className={ [classes.editable, classes.header].join(' ') }>Who</div>
                <div className={ [classes.editable, classes.header].join(' ') }>For whom</div>
                <div className={ [classes.editable, classes.header].join(' ') }>What</div>
            </div>
           { orderList }
           <button className={ classes.addButton } onClick={ addNewOrder }>+</button>
        </div>
    )
}

export default Editable