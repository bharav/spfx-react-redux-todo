import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Todo } from '../model/Todo';
import {IToDoProps} from './IHelloWorldProps';



export class HelloWorld extends React.Component<IToDoProps, {}> {

  /*public static propTypes = {
    
    getTodos: React.PropTypes.func.isRequired,
    Todos: React.PropTypes.arrayOf(
      React.PropTypes.instanceOf(Todo)
    ).isRequired
  }*/

  public static defaultProps = {
    Todos: []
  };

  public render() {
    return <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {this.props.Todos.map(item => <tr key={item.Title}>
          <td>{item.Title}</td>
          <td>{item.Description}</td>
        </tr>)}
      </tbody>
    </table>;
  }
  private componentDidMount() {
    this.props.getTodos();
  }
}
