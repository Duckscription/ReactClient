import React from 'react';
import styled from 'styled-components';
import DisplaySubscription from '../components/DisplaySubscription';
import AddSubscription from '../components/AddSubscription';
import UserProfile from '../components/UserProfile';

function Subscription() {
  return (
    <div className="subsWrapper">
      <div>
        <DisplaySubscription userId="Hailey" />
      </div>
      <div>
        <UserProfile userId="Hailey" />
      </div>
    </div>
  );
}

export default Subscription;
