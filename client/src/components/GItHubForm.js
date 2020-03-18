import React, { useState } from 'react';
import { fetchRepos } from '../utils/api';


const GitHubForm = ({ setLoading, setRepos }) => {

   const [textInput, setTextInput] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();

      fetchRepos(textInput, setLoading, setRepos)

   };

   const onTextInputChange = (e) => {

      setTextInput(e.target.value);

   };


   return (
      <div>
         <form onSubmit={onSubmit}>
            <div>
               <label htmlFor="searchInput">Procure repositório</label>
               <input
               placeholder="procurar repositório"
                  id="searchInput"
                  type="text"
                  value={textInput}
                  onChange={onTextInputChange}
                  required
               />
            </div>
            <button>procurar</button>

         </form>
      </div>
   )
}

export default GitHubForm;