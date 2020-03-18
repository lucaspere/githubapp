import React, { useState, useEffect } from 'react';

import Repository from './Repository';


const GitHubList = ({ hiddenRemoveButton, hiddenAddButton, repos, setRepos }) => {

   if (!repos.length) {

      return <p>Comece a buscar repositórios</p>
   }
   return (
      <div>
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