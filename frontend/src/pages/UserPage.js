import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserPage({ match }) {
  const [user, setUser] = useState(null);
  const userId = match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* Add more user details here */}
    </div>
  );
}

export default UserPage;
