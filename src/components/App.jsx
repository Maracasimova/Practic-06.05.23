import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './UsersList';
import { AddUserForm } from './AddUserForm.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = { users: data };

  deleteUser = id => {
    this.setState(prevstate => {
      return { users: prevstate.users.filter(user => user.id !== id) };
    });
  };

  addContact = userData => {
    const newUser = { ...userData, id: nanoid() };
    this.setState(prevstate => {
      return { users: [...prevstate.users, newUser] };
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UsersList users={users} deleteUser={this.deleteUser} />
        <AddUserForm addContact={this.addContact} />
      </>
    );
  }
}
