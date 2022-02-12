import React from "react";
import styled from "styled-components";
import DisplaySubscription from "../components/DisplaySubscription";
import AddSubscription from "../components/AddSubscription";
import UserProfile from "../components/UserProfile";

function Subscription() {
  return (
    <div>
      <DisplaySubscription user="1acs" />
      <UserProfile user="1acx" />
    </div>
  );
}

export default Subscription;
