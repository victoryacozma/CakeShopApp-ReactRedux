import React, { useState } from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

//primeste ca props: numberofCakes si buyCake() prin intermediul functiei connect
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes : {props.numberOfCakes}</h2>
            <input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)}></input>
            <button onClick = {() => props.buyCake(number)}> Buy {number} cakes </button>
        </div>
    )
}

//3 steps in order to dispatch an action in react redux
const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)