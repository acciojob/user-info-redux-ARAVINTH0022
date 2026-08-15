import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';
import { updateName, updateEmail } from '../redux/actions';
import '../styles/App.css';

const UserForm = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name-input">Name: </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => dispatch(updateName(e.target.value))}
            placeholder="Enter name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email-input">Email: </label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            placeholder="Enter email"
          />
        </div>
      </form>
      <br />
      <div className="output">
        <p>Current Information</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Provider store={store}>
        <UserForm />
      </Provider>
    </div>
  );
};

export default App;
