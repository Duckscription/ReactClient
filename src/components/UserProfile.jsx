import React from 'react'
import userImg from "../img/userImage_1.jpeg"

function UserProfile(props) {
  return (
    <div className="userProfileWrapper">
      <div className="userProfile">
        <img src={require('../img/userImage_1.jpeg')} className="userImg" />
        <h2>{props.userId}</h2>
        <div style={{ display: "flex" , justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <h3>You are spending </h3>
          <h3>$ 30</h3>
          <h3> per a month!</h3>
        </div>
      </div>
    </div>
  )
}

export default UserProfile