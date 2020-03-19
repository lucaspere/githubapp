import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTES
import GitHubDashboard from './components/GitHubDashboard.js'

// STYLE
import './app.css'

const app = (
   <div className='container'>
      <GitHubDashboard />
   </div>
)

ReactDOM.render(app, document.getElementById('root'))