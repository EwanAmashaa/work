import React from 'react';
import EventList from './EventList';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Personal Scheduler</h1>
      <p>Here you can manage your events and keep track of your schedule.</p>
      <EventList />
    </div>
  );
}

export default Dashboard;
