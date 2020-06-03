import React from 'react'
import { createUseStyles } from 'react-jss'

import Card from './Card'
import Editable from './Editable'
import Select from './Select'

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

const OrderCard = () => {
    const classes = useStyles()

    return (
        <div className={ classes.container }>
            <Card>
                <Select />
            </Card>
            <Card>
                <Editable />
            </Card>
        </div>
    )
}

export default OrderCard