import React from 'react'
import { Overview } from './components/Overview'
import './stylesheet/styles.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: ['Mow lawn',
              'Clip cat\'s claws',
              'Make chicharrones',
              'Defrost snake']
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(event) {
    event.preventDefault()
    this.setState({
        tasks: this.state.tasks.concat(event.target.elements.task.value)
    })
  }

  sendData(event) {
    event.preventDefault()
    Overview.addTask(event.target.elements.task.value)
  }

  render() {
    return (
      <div>
        <div className='form'>
          <form onSubmit={this.addTask}>
            <h1>New task</h1>
            <label htmlFor='task'>Task name</label>
            <input type='text' id='task' name='task'></input>
            <button type='submit'>Add task</button>
          </form>
        </div>
        <Overview tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App;
