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
        backgroundColor: 'rgba(50, 0, 0, 0.2)',
        height: '50px',
        cursor: 'pointer',
    },
    userChoice: {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
    }
})

const Poll = () => {
    const classes = useStyles()

    const { dispatch, user, totalVotes, restaurantOptions } = useContext(CTX)

    const handleClick = id => {
        if(!user.choosenRestaurantId) {
            const options = [...restaurantOptions]
            const addIndex = options.findIndex(item => item.id === id)
            options[addIndex].votes += 1
            user.choosenRestaurantId = id
            dispatch({ type: 'RESTAURANT_OPTIONS', payload: options })
            dispatch({ type: 'TOTAL_VOTES', payload: totalVotes + 1 })
        } else if(user.choosenRestaurantId && user.choosenRestaurantId !== id ) {
            const options = [...restaurantOptions]
            const addIndex = options.findIndex(item => item.id === id)
            options[addIndex].votes += 1
            const removeIndex = options.findIndex(item => item.id === user.choosenRestaurantId)
            options[removeIndex].votes -= 1
            user.choosenRestaurantId = id
            dispatch({ type: 'RESTAURANT_OPTIONS', payload: options })
        }
    }

    const options = restaurantOptions.map(option => (
        <div key={ option.id } onClick={ () => { handleClick(option.id) } }>
            <div className={ [classes.votesBar, option.id === user.choosenRestaurantId ? classes.userChoice : null].join(' ') } style={ totalVotes ? { width: `${option.votes / totalVotes * 100}%` } : { width: 0 }}></div>
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