

import React from "react";

export default class AppClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    incFunc = () => {
        this.setState({ count: this.state.count + 1 });
    }

render() {
    return(
        <div>
            <button className='incButton'
                onClick={this.incFunc}
            >
                { this.props.btnText }
            </button>
            {this.state.count}</div>
        
        );
    };
    

}
