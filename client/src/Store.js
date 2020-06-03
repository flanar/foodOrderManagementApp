import React, { createContext, useReducer } from 'react'

export const CTX = createContext()

const initialState = {
    user: {
        name: 'Piotr',
        choosenRestaurantId: null
    },
    orders: [
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
    ],
    totalVotes: 0,
    restaurantOptions: [
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
    ]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'USER':
            return {
                ...state,
                user: {
                    name: action.payload
                }
            }
        case 'ORDERS':
            return {
                ...state,
                orders: [
                    ...action.payload
                ]
            }
        case 'TOTAL_VOTES':
            return {
                ...state,
                totalVotes: action.payload
            }
        case 'RESTAURANT_OPTIONS':
            return {
                ...state,
                restaurantOptions: [
                    ...action.payload
                ]
            }
        default:
            return state
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { user, orders, totalVotes, restaurantOptions } = state

    return (
        <CTX.Provider value={{ dispatch, user ,orders, totalVotes, restaurantOptions }}>
            { children }
        </CTX.Provider>
    )
}

export default Store