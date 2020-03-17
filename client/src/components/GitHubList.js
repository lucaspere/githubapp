import React, { useState, useEffect } from 'react';

import Repository from './Repository';


const ReposList = ({ repos, setRepos }) => {


   return (
      <div>
         {repos.map(item => <Repository repos={repos} setRepos={setRepos} item={item} key={item.id} />)}

      </div>
   )
}


export default ReposList;