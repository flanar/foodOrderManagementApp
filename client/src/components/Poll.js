import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'

import { CTX } from '../Store'

import Card from './Card'

const useStyles = createUseStyles({
    title: {
        fontSize: '1.4rem',
        textAlign: 'center',
    },
    optionsContainer: {
        position: 'relative',
        marginTop: '30px',
        width: '100%',
    },
    option: {
        margin: '10px 0',
        paddingLeft: '20px',
        height: '50px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
    },
    votesBar: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        height: '50px',
        cursor: 'pointer',
    }
})

const Poll = () => {
    const classes = useStyles()

    const { dispatch, totalVotes, restaurantOptions } = useContext(CTX)

    const handleClick = id => {
        const options = [...restaurantOptions]
        const index = options.findIndex(item => item.id === id)
        options[index].votes += 1
        dispatch({ type: 'RESTAURANT_OPTIONS', payload: options })
        dispatch({ type: 'TOTAL_VOTES', payload: totalVotes + 1 })
    }

    const options = restaurantOptions.map(option => (
        <div key={ option.id } onClick={ () => { handleClick(option.id) } }>
            <div className={ classes.votesBar } style={ totalVotes ? { width: `${option.votes / totalVotes * 100}%` } : { width: 0 }}></div>
            <div className={ classes.option }>
                { option.restaurantName } ({ option.votes })
            </div>
        </div>
    ))

    return (
        <Card>
            <div className={ classes.title }>Choose restaurant</div>
            <div className={ classes.optionsContainer }>
                { options }
            </div>
        </Card>
    )
}

export default Poll