
import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['primeira', 'segunda', 'terceira', 'quarta'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
