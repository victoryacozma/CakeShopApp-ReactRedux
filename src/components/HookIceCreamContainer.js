import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function HookIceCreamContainer() {
    const numberOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of icecreams : {numberOfIceCreams}</h2>
            <button onClick = {() => dispatch(buyIceCream())}>Buy icecream </button>
        </div>
    )
}

export default HookIceCreamContainer
