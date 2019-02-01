import * as React from 'react'; //必须 * as
import {connect} from "react-redux";
import actions from "../store/actions/counter";
import {Store} from '../types'
interface IProps{   //属性的type
    number:number,
    increment:any,
    decrement:any,
    incrementDelay:any
}
//顺序是写死的，先属性，后状态 (Iprops,IState)
class Counter extends React.Component<IProps>{
    render(){
        let {number,increment,decrement,incrementDelay} = this.props;
        return (
            <div>
                <p>{number}</p>
                <button onClick={increment}>+</button>
                <button onClick={incrementDelay}>1s后加1</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}
let mapStateToProps = function (state:Store):Store {
    return state;
}
export default connect(mapStateToProps,actions)(Counter)
