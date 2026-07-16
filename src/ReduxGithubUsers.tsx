import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { fetchUser } from './usersState';

function ReduxGithubUsers() {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);
  const loading = useAppSelector((state) => state.users.loading);
  const error = useAppSelector((state) => state.users.error);

  const handleFetch = () => {
    if (username.trim() === '') return;
    dispatch(fetchUser(username));
    setUsername('');
  };

  return (
    <div>
      <h2>GitHub Users</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Inserisci username GitHub"
      />
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Caricamento...' : 'Cerca'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.login} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReduxGithubUsers;