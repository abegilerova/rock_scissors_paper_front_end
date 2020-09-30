import React from 'react'
import { Button } from 'reactstrap'

function UserProfile(props) {
  return (
    <div className="user-profile">
      <h1>The username is {props.username}</h1>
      <h1>The number of games they've won so far is {props.won_games}</h1>
      <h1>The number of games they've lost so far is {props.lost_games}</h1>
      <Button>Play New Game</Button>


    </div>
  );
}

export default UserProfile;