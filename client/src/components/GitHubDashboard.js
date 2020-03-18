import React, { useState, useEffect } from 'react';

import GitHubForm from './GitHubForm';
import GitHubList from './GitHubList';

import { GetReposFromDB } from '../utils/api';


const GitHubDashboard = () => {

   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(false);
   const [savedRepos, setSavedRepos] = useState([]);

   useEffect(() => {

      GetReposFromDB(setSavedRepos, setLoading);

   }, [savedRepos])

   return (
      <div>
         <GitHubForm setLoading={setLoading} setRepos={setRepos} />
         {loading ? (
            <div>buscando</div>
         ) : !repos.length ?
               <GitHubList setRepos={setSavedRepos} repos={savedRepos} hiddenAddButton={true} />
               :
               <GitHubList setRepos={setRepos} repos={repos} hiddenRemoveButton={true} />
         }
      </div>
   );
};

export default GitHubDashboard;