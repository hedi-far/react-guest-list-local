import React from 'react';
import './App.css';

function App() {
  // hardcoded array of guests
  const guestList = [
    {
      fname: 'Veronika',
      lname: 'Maier',
      attendance: 'yes',
    },
    {
      fname: 'Thomas',
      lname: 'Porter',
      attendance: 'no',
    },
    {
      fname: 'Alexandra',
      lname: 'Huber',
      attendance: 'pending',
    },
  ];

  // Test push to array - works
  // const newguest = guest.push({
  //   fname: 'Marion',
  //   lname: 'Dortschak',
  //   attendance: 'no',
  // });

  //set state for guest array
  const [list, setList] = React.useState(guestList);

  // set state for input fields
  const [fname, setfName] = React.useState('');
  const [lname, setlName] = React.useState('');

  // set stae for radio button
  const [attendance, setAttendance] = React.useState('');

  //When button is clicked:
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //creating new array newList by adding incoming values to array "list" (=inital state)
    const newList = list.concat({ fname, lname, attendance });

    // adds an incrementing id to each object
    const createID = list.forEach((o, i) => (o.id = i + 1));

    setList(newList);

    console.log(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter your data here:</h1>
      </header>

      {/* Personalia */}
      <form onSubmit={handleSubmit}>
        <p>Personalia:</p>
        <label>First name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => setfName(e.target.value)}
        />

        <br />
        <br />
        <label>Last name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => setlName(e.target.value)}
        />

        <br />
        <br />

        {/* Attendance */}
        <p>Attendance:</p>

        <input
          type="radio"
          name="attendance"
          value="yes"
          onChange={(e) => setAttendance(e.target.value)}
        />
        <label>Yes</label>

        <input
          type="radio"
          id="no"
          name="attendance"
          value="no"
          onChange={(e) => setAttendance(e.target.value)}
        />
        <label>No</label>

        <input
          type="radio"
          id="pending"
          name="attendance"
          value="pending"
          onChange={(e) => setAttendance(e.target.value)}
        />
        <label> Pending</label>
        <br />
        <p>
          <button>Submit</button>
        </p>
      </form>

      {/* Tabelle */}
      <h1> Guest list:</h1>
      <table>
        <tr>
          <th></th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Attendance</th>
        </tr>
        {list.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" checked={null} />
            </td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.attendance}</td>
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
