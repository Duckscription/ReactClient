import React from 'react'

function UserProfile(props) {
  return (
    <div className="userProfileWrapper">
      <div className="userProfile">
        <p>{props.user}</p>
      </div>


    </div>
  )
}

export default UserProfile