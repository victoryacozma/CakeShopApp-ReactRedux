import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

//primeste ca props: numberofCakes si buyCake() prin intermediul functiei connect
function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes : {props.numberOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)