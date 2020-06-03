import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    select: {
        padding: '0.6rem 1rem',
        width: '260px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    optionsContainer: {
        padding: '0.6rem 1rem',
        width: '260px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
    },
})

const Select = () => {
    const classes = useStyles()

    const [value, setValue] = useState('Select option')
    const [showOptions, setShowOptions] = useState(false)

    const namesList = [
        'Kamil',
        'Dorota',
        'Karol',
        'Piotr'
    ]

    const options = namesList.map((option, index) => (
        <div>{ option } </div>
    ))

    return (
        <>
            <div className={ classes.select }>{ value }</div>
            <div className={ classes.optionsContainer }>
                { options }
            </div>
        </>
    )
}

export default Select
