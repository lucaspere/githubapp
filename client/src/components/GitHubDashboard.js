import React, { useState, useEffect } from 'react';

import GitHubForm from './GitHubForm';
import GitHubList from './GitHubList';

import { GetReposFromDB } from '../utils/api';

import './githubdashboard.css';

// ESSE COMPONENTE VAI RENDERIZAR O FORM E A LISTA DE REPOSITÓRIOS
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
            <div className='lds-container'>
               <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
         ) : !repos.length ?
               <GitHubList setRepos={setSavedRepos} repos={savedRepos} hiddenAddButton={true} />
               :
               <GitHubList setRepos={setRepos} repos={repos} hiddenRemoveButton={true} />
         }
      </div>
   );
};

export default GitHubDashboard;