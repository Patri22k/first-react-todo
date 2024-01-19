import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(undefined);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && value.length > 0) {
      setList([value, ...list]);
      setValue(undefined);
    }
  }

  return (
    <>
      <form style={{
        display: 'flex',
        flexDirection: 'row',
      }}
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type ToDo..."
          onChange={(e) => setValue(e.target.value)}
          value={value ?? ''}
        />
        <button type="submit">Add</button>
      </form>
      <p>Your ToDo List:</p>
      {list.map((val, pos) => (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <p>{val}</p>
          <button
            style={{ marginLeft: 'auto' }}
            onClick={() => {
              setList(list.filter((val, pos1) => pos1 != pos));
            }}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
