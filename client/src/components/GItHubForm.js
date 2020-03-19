import React, { useState } from 'react';
import { fetchRepos } from '../utils/api';

import './githubform.css';


const GitHubForm = ({ setLoading, setRepos }) => {

   const [textInput, setTextInput] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();

      fetchRepos(textInput, setLoading, setRepos);
      setTextInput('');
   };

   const onTextInputChange = (e) => {

      setTextInput(e.target.value);

   };


   return (
      <div className='githubform-container'>
         <form id='form' onSubmit={onSubmit}>
            <div className='searchContainer'>
               <input
                  className='enjoy-css'
                  placeholder="Procurar repositório"
                  id="searchInput"
                  type="text"
                  value={textInput}
                  onChange={onTextInputChange}
                  required
               />

               <button className='button'>procurar</button>
            </div>
         </form>
      </div>
   )
}

export default GitHubForm;