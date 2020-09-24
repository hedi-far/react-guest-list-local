import React from 'react';
import './App.css';

function App() {
  const guest = [
    {
      id: 1,
      fname: 'Veronika',
      lname: 'Maier',
      attendance: 'yes',
    },

    {
      id: 2,
      fname: 'Thomas',
      lname: 'Porter',
      attendance: 'no',
    },

    {
      id: 3,
      fname: 'Alexandra',
      lname: 'Huber',
      attendance: 'pending',
    },
  ];

  const [state, setState] = React.useState({
    fName: '',
    lName: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });

    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter your data here:</h1>
      </header>

      {/* Personalia */}
      <form>
        <p>Personalia:</p>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={state.fName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={state.lName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        {/* Attendance */}

        <p>Attendance:</p>

        <input type="radio" value="yes" />
        <label for="yes"> Yes</label>
        <input type="radio" id="no" name="no" value="no" />
        <label for="no"> No</label>
        <input type="radio" id="pending" name="pending" value="pending" />
        <label for="pending"> Pending</label>
        <br />
        <p>
          <button>Submit</button>
        </p>
      </form>

      {/* Tabelle */}
      <h1> Guest list:</h1>

      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Attendance</th>
        </tr>
        {guest.map((guest) => (
          <tr key={guest.id}>
            <td>
              <input type="checkbox" checked={null} />
            </td>
            <td>{guest.fname}</td>
            <td>{guest.lname}</td>
            <td>{guest.attendance}</td>
          </tr>
        ))}
      </table>

      {/* Delete-Button */}
      <p>
        <label>
          <button type="button" id="delete">
            Delete
          </button>
        </label>
      </p>
    </div>
  );
}

export default App;
