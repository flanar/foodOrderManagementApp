import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import OutsideClick from '../HOC/OutsideClick'

const useStyles = createUseStyles({
    selectWrapper: {
        width: '260px',
    },
    select: {
        padding: '0.6rem 1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    optionsContainer: {
        position: 'absolute',
        marginTop: '6px',
        width: '260px',
        maxHeight: '160px',
        backgroundColor: '#222222',
        borderRadius: '8px',
        overflowX: 'hidden',
    },
    option: {
        padding: '0.6rem 1rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        '&:first-child:hover': {
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
        },
        '&:last-child:hover': {
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
        },
    }
})

const Select = ({ defaultOption, options }) => {
    const classes = useStyles()

    const [value, setValue] = useState('Select option')
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        defaultOption && setValue(defaultOption)
    }, [defaultOption])

    const toogleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    const clickOptionHandler = optionId => {
        setValue(options[optionId])
        setShowOptions(false)
    }

    const displayedOptions = options.map((option, index) => (
        <div key={ index } className={ classes.option } onClick={ () => { clickOptionHandler(index) } }>{ option }</div>
    ))

    return (
        <div className={ classes.selectWrapper }>
            <OutsideClick clickHandler={ () => { setShowOptions(false) } }>
                <div className={ classes.select } onClick={ toogleShowOptions }>{ value }</div>
                <div className={ [classes.optionsContainer, 'scrollbar'].join(' ') }>
                    { showOptions && displayedOptions }
                </div>
            </OutsideClick>
        </div>
    )
}

export default Select
