import React, { useState, useEffect } from 'react';

import GitHubForm from './GitHubForm';
import GitHubList from './GitHubList';


const GitHubDashboard = () => {

   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(false);

   return (
      <div>
         <GitHubForm setLoading={setLoading} setRepos={setRepos} />
         {loading ? (
            <div>buscando</div>
         ) :
            <GitHubList setRepos={setRepos} repos={repos} />
         }
      </div>
   );
};

export default GitHubDashboard;