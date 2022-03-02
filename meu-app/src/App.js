import React, {Component} from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
body{
  color: red;
}
.container{
  max
  background: blue;
}
`


class Todo extends Component{


state = {
  tarefa: '',
  lista: []
}

handleChange = (event) => {
  this.setState({
    tarefa: event.target.value
  })
}

add = (event) => {
  if(this.state.tarefa != ''){
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
      }),
      tarefa: ''
    })
  }
  event.preventDefault();
}

remove = (id) =>{
  this.setState({
    lista: this.state.lista.filter((item) =>{
      return item.id != id
    })
  })
}

render(){
  return(
    <div className='container'>
      <GlobalStyle/>
    <form onSubmit={this.add}>
      <h1>Lista de tarefa</h1>
      <input onChange={this.handleChange} value={this.state.tarefa} />
      <button>Add</button>

      <ul>
      {this.state.lista.map((item) => (
        <ul>
          <li>
            {item.tarefa}
            <img onClick={() =>{
              this.remove(item.id)
            }} src="https://cdn-icons-png.flaticon.com/128/6928/6928640.png" alt="Lixo" />
          </li>
        </ul>
      ))}
      </ul>
    </form>
    </div>

  )
}

}

export default Todo;