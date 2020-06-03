import React, { createContext, useReducer, useEffect } from 'react'

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
    // restaurants: [
    //     {
    //         id: 1,
    //         restaurantName: 'Grzybki',
    //         votes: 0
    //     },
    //     {
    //         id: 2,
    //         restaurantName: 'Joker',
    //         votes: 0
    //     },
    //     {
    //         id: 3,
    //         restaurantName: 'Lider Kebab',
    //         votes: 0
    //     }
    // ],
    restaurants: [

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
        case 'RESTAURANT':
            console.log(action.payload)
            return {
                ...state,
                restaurants: [
                    ...action.payload
                ]
            }
        default:
            return state
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { user, orders, totalVotes, restaurants } = state

    const url = 'http://localhost:8000/api/'

    const getRestaurants = async () => {
        const response = await fetch(url + 'restaurant')
        const data = await response.json()
        dispatch({ type: 'RESTAURANT', payload: data })
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    return (
        <CTX.Provider value={{ dispatch, user ,orders, totalVotes, restaurants }}>
            { children }
        </CTX.Provider>
    )
}

export default Store