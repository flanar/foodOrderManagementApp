import React, { createContext, useReducer, useEffect } from 'react'

export const CTX = createContext()

const initialState = {
    user: {
        username: 'Piotr',
        restaurant_id: null
    },
    restaurants: [],
    totalVotes: 0,
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
}

const apiUrl = 'http://localhost:8000/api/'

const updateRestaurantVotes = (restaurant_id, restaurant_votes) => {
    fetch(`${apiUrl}restaurant/${restaurant_id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            restaurant_votes: restaurant_votes
        })
    })
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'USER':
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        case 'ORDERS':
            return {
                ...state,
                orders: [...action.payload]
            }
        case 'RESTAURANT':
            return {
                ...state,
                totalVotes: action.payload.reduce((previousValue, currentValue) => previousValue + currentValue.restaurant_votes, 0),
                restaurants: [...action.payload]
            }
        case 'RESTAURANT_VOTES':
            const restaurantsCopy = [...state.restaurants]
            const index = restaurantsCopy.findIndex(restaurant => restaurant.restaurant_id === action.payload.restaurant_id)
            restaurantsCopy[index].restaurant_votes += action.payload.amount
            updateRestaurantVotes(action.payload.restaurant_id, restaurantsCopy[index].restaurant_votes)
            return {
                ...state,
                totalVotes: state.totalVotes += action.payload.amount,
                restaurants: restaurantsCopy
            }
        default:
            return state
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { user, orders, totalVotes, restaurants } = state

    const getRestaurants = async () => {
        const response = await fetch(apiUrl + 'restaurant')
        const data = await response.json()
        dispatch({ type: 'RESTAURANT', payload: data })
    }

    const getUser = async user_id => {
        const response = await fetch(`${apiUrl}user/${user_id}/`)
        const data = await response.json()
        const user = {
            username: data.username,
            restaurant_id: data.user_info.restaurant_id
        }
        dispatch({ type: 'USER', payload: user })
    }

    useEffect(() => {
        getRestaurants()
        getUser(2)
    }, [])

    return (
        <CTX.Provider value={{ dispatch, user ,orders, totalVotes, restaurants, apiUrl }}>
            { children }
        </CTX.Provider>
    )
}

export default Store