import React from 'react';
import './App.css';

function App() {
  // hardcoded array of guests
  const guestList = [
    {
      fname: 'Veronika',
      lname: 'Maier',
      attendance: 'Yes',
    },
    {
      fname: 'Thomas',
      lname: 'Porter',
      attendance: 'No',
    },
    {
      fname: 'Alexandra',
      lname: 'Huber',
      attendance: 'Pending',
    },
  ];

  // adds an incrementing id to each object
  guestList.forEach((o, i) => (o.id = i + 1));

  // console.log(guestList);

  // Test push to array - works
  // const newguest = guest.push({
  //   fname: 'Marion',
  //   lname: 'Dortschak',
  //   attendance: 'no',
  // });

  //set state for guestList array
  const [list, setList] = React.useState(guestList);

  // set state for input fields
  const [fname, setfName] = React.useState('');
  const [lname, setlName] = React.useState('');

  // set state for radio button
  const [attendance, setAttendance] = React.useState('');

  // set state for checkbox
  const [checkboxes, setCheckboxes] = React.useState({});

  // console.log(checkboxes);

  // Object.keys() liefert ein Array, dessen Elemente Strings sind, welche die aufzählbaren Eigenschaften des Objekts respräsentieren.

  const checkboxKeys = Object.keys(checkboxes);

  //When Submit button is clicked:
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //creating new array newList by adding incoming values to array "list" (=inital state)
    const newList = list.concat({ fname, lname, attendance });

    // adds an incrementing id to each object
    const createID = list.forEach((o, i) => (o.id = i + 1));

    setList(newList);

    // console.log(newList);
  };

  //when Delete button is clicked:
  function handleDelete(id) {
    const filteredList = list.filter((item) => {
      if (checkboxKeys.includes(String(item.id))) {
        return false;
      }

      return true;
    });

    setList(filteredList);

    // console.log(filteredList);
  }

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
          value="Yes"
          onChange={(e) => setAttendance(e.target.value)}
        />
        <label>Yes</label>

        <input
          type="radio"
          id="no"
          name="attendance"
          value="No"
          onChange={(e) => setAttendance(e.target.value)}
        />
        <label>No</label>

        <input
          type="radio"
          id="pending"
          name="attendance"
          value="Pending"
          onChange={(e) => setAttendance(e.target.value)}
        />
        <label> Pending</label>
        <br />
        <p>
          <button>Submit</button>
        </p>
      </form>

      {/* Tabelle */}
      <h1 className="guestlist"> Guest list:</h1>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Attendance</th>
          </tr>
          {list.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkboxes[item.id]}
                  onChange={() => {
                    setCheckboxes({ ...checkboxes, [item.id]: true });
                  }}
                />
              </td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Delete-Button */}
      <p>
        <label>
          <button
            type="button"
            onClick={(item) => handleDelete(item.id)}
            id="delete"
          >
            Delete
          </button>
        </label>
      </p>
    </div>
  );
}

export default App;
