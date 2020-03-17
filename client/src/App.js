import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTES
import GitHubDashboard from './components/GitHubDashboard.js'

const app = (
   <div>
      <GitHubDashboard />
   </div>
)

ReactDOM.render(app, document.getElementById('root'))