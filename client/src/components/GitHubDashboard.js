import React, {useState, useEffect} from 'react';
import axios from 'axios';

import GitHubForm from './GitHubForm';
import GitHubList from './GitHubList';


const GitHubDashboard = () => {

   const [repos, setRepos] = useState([]);

   return (
      <div>
         <GitHubForm setRepos={setRepos} />
         <GitHubList setRepos={setRepos} repos={repos} />
      </div>
   );
};

export default GitHubDashboard;