import React from "react";
import styled from "styled-components";
import DisplaySubscription from "../components/DisplaySubscription";
import AddSubscription from "../components/AddSubscription";
import UserProfile from "../components/UserProfile";

function Subscription() {
  return (
    <div className="subsWrapper">
      <div>
        <DisplaySubscription user="1acs" />
      </div>
      <div>
        <UserProfile user="1acx" />
      </div>
    </div>
  );
}

export default Subscription;
