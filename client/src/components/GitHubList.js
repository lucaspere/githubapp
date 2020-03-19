import React from 'react';

import Repository from './Repository';

import './githublist.css';

// ESSE COMPONENTE VAI RENDERIZAR CADA REPOSITÓRIO
const GitHubList = ({ hiddenRemoveButton, hiddenAddButton, repos, setRepos }) => {

   if (!repos.length) {

      return <p className='githublist-message'>Você não tem nenhum repositório salvo</p>
   }
   return (
      <div className='githublist-container'>
         {repos.map(item => (
            <Repository
               key={item._id || item.id}
               hiddenRemoveButton={hiddenRemoveButton}
               hiddenAddButton={hiddenAddButton}
               repos={repos} setRepos={setRepos}
               item={item}
            />
         ))}
      </div>
   )
}


export default GitHubList;