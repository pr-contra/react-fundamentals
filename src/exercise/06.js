// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const inputRef = React.useRef();
  // const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // const username = event.target.username.value
    // const username = inputRef.current.value;

    onSubmitUsername(username);
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    // const isValidInput = inputValue === inputValue.toLowerCase();
    // setError(isValidInput ? null : 'Username must be lower case');
    setUsername(inputValue.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          value={username}
        />
      </div>
      {/* <button type="submit" disabled={!!error}> */}
      <button type="submit">Submit</button>
      {/* {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>} */}
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
