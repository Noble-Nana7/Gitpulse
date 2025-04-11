// src/pages/ActivityPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ActivityPage() {
  const { username } = useParams(); // Get username from the URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{userData.login}'s GitHub Activity</h1>
      <img src={userData.avatar_url} alt="User Avatar" />
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      {/* Display additional user info */}
    </div>
  );
}

export default ActivityPage;
