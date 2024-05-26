import React from 'react';
import Profile from './components/profile';
import './App.css';

function App() {

  const UserDetails =[{
    name: 'Ekene obodo',
    bio: 'Event Planner',
    dateofBirth: '22-09-1998',
  },
  {
    name: 'James Chisom',
    bio: 'web develper',
    dateofBirth: '01-10-2002',
  },
  {
    name: 'Joy Solomon',
    bio: 'Teacher',
    dateofBirth: '19-03-1993'
  },
  
];

return(
  <Profile users= {UserDetails} />
);
};

export default App;