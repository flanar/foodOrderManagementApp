import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

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

    const [totalVotes, setTotalVotes] = useState(0)
    const [optionsArray, setOptionsArray] = useState([])

    useEffect(() => {
        setOptionsArray([
            {
                id: 1,
                restaurantName: 'Grzybki',
                votes: 0
            },
            {
                id: 2,
                restaurantName: 'Joker',
                votes: 0
            },
            {
                id: 3,
                restaurantName: 'Lider Kebab',
                votes: 0
            }
        ])
    }, [])

    const handleClick = id => {
        const options = [...optionsArray]
        const index = options.findIndex(item => item.id === id)
        options[index].votes += 1
        setOptionsArray(options)
        setTotalVotes(totalVotes + 1)
    }

    const options = optionsArray.map(option => (
        <div onClick={ () => { handleClick(option.id) } }>
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