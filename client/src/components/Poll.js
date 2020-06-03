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

    const { dispatch, user, totalVotes, restaurants } = useContext(CTX)

    const clickHandler = restaurant_id => {
        if(!user.choosenRestaurantId) {
            dispatch({ type: 'RESTAURANT_VOTES', payload: {
                restaurant_id: restaurant_id,
                amount: 1
            } })
            user.choosenRestaurantId = restaurant_id
        } else if(user.choosenRestaurantId && user.choosenRestaurantId !== restaurant_id ) {
            dispatch({ type: 'RESTAURANT_VOTES', payload: {
                restaurant_id: restaurant_id,
                amount: 1
            } })
            dispatch({ type: 'RESTAURANT_VOTES', payload: {
                restaurant_id: user.choosenRestaurantId,
                amount: -1
            } })
            user.choosenRestaurantId = restaurant_id
        }
    }

    const options = restaurants.map(option => (
        <div key={ option.restaurant_id } onClick={ () => { clickHandler(option.restaurant_id) } }>
            <div className={ [classes.votesBar, option.restaurant_id === user.choosenRestaurantId ? classes.userChoice : null].join(' ') } style={ totalVotes ? { width: `${option.restaurant_votes / totalVotes * 100}%` } : { width: 0 }}></div>
            <div className={ classes.option }>
                { option.restaurant_name } ({ option.restaurant_votes })
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