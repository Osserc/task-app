import React from 'react'
import { Overview } from './components/Overview'
import './stylesheet/styles.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(event) {
    event.preventDefault()
    // console.log(event.target.querySelector('#task').value)
    this.setState({
        tasks: this.state.tasks.concat(event.target.elements.task.value)
    })
    event.target.querySelector('#task').value = ''
  }

  render() {
    return (
      <div className='top-container flex flex-c justify-center align-center'>
        <div className='top-container flex just-center align-center'>
          <form onSubmit={this.addTask} className='flex flex-c just-center align-center'>
            <h1>New task</h1>
            <label htmlFor='task'>Task name</label>
            <input type='text' id='task' name='task' required></input>
            <button type='submit'>Add task</button>
          </form>
        </div>
        <Overview tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App;
