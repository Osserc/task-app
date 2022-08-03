import React, { Component } from 'react'

class Overview extends Component {
    constructor() {
        super()
        this.becomeVisible = this.becomeVisible.bind(this)
    }

    becomeVisible(event) {
        event.target.className.add('visible')
    }

    render() {
        let visStatus = ''
        if (this.props.tasks.length > 0) {
            visStatus = 'visible'
        }
        return(
            <ul className={`tasks ${visStatus}`} onChange={this.becomeVisible}>
                <h2>Tasks</h2>
                {this.props.tasks.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
        )
    }
}

export { Overview }