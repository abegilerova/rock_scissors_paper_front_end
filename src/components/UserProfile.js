import React from 'react'

function UserProfile(props) {
  return (
    <div className="user-profile">
      <h1>The username is {props.username}</h1>

    </div>
  );
}

export default UserProfile;