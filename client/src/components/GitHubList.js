import React, { useState, useEffect } from 'react';

import Repository from './Repository';


const ReposList = ({ repos, setRepos }) => {

   if (!repos.length) {

      return <p>Comece a buscar repositórios</p>
   }
   return (
      <div>
         {repos.map(item => <Repository repos={repos} setRepos={setRepos} item={item} key={item.id} />)}
      </div>
   )
}


export default ReposList;