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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter your data here:</h1>
      </header>
      {/* Personalia */}
      <form>
        <p>Personalia:</p>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />

        {/* Attendance */}

        <p>Attendance:</p>

        <input type="radio" id="yes" name="yes" value="yes" />
        <label for="yes"> Yes</label>
        <input type="radio" id="no" name="no" value="no" />
        <label for="no"> No</label>
        <input type="radio" id="pending" name="pending" value="pending" />
        <label for="pending"> Pending</label>
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
              <input type="checkbox" id="checkbox" name="checkbox" />
            </td>
            <td>{guest.fname}</td>
            <td>{guest.fname}</td>
            <td>{guest.attendance}</td>
          </tr>
        ))}
      </table>

      {/* Delete-Button */}
      <p>
        <button type="button" id="delete">
          Delete
        </button>
      </p>
    </div>
  );
}

export default App;
