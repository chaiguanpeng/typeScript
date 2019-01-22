import * as React from 'react'; //必须 * as
interface Iprops{   //属性的type
    name:string
}

interface IState{
    number:number
} 
export default class Counter extends React.Component<Iprops,IState>{
    state = {
        number:0
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
            </div>
        )
    }
}