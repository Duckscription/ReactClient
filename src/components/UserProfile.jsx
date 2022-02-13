import React from 'react'
import userImg from "../img/userImage_1.jpeg"

function UserProfile(props) {
  return (
    <div className="userProfileWrapper">
      <div className="userProfile">
        <img src={require('../img/userImage_1.jpeg')} className="userImg" />
        <h2>{props.userId}</h2>
      </div>
    </div>
  )
}

export default UserProfile