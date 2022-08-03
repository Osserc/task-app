import React, { Component } from 'react'

class Overview extends Component {
    render() {
        return(
            <div>
                {this.props.tasks.map((task, index) => {
                    return <div key={index}>{task}</div>
                })}
            </div>
        )
    }
}

export { Overview }