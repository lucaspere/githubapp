import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTES
import GitHubForm from './components/GitHubForm.js'
const app = (
   <div>
      <GitHubForm />
   </div>
)

ReactDOM.render(app, document.getElementById('root'))