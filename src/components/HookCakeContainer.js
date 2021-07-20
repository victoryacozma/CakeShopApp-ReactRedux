import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HookCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes : {numberOfCakes}</h2>
            <button onClick = {() => dispatch(buyCake())}>Buy cake </button>
        </div>
    )
}

export default HookCakeContainer
