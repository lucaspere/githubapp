import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { items } from '../../../repositories.json';


const GitHubForm = (props) => {

   const [textInput, setTextInput] = useState('');

   useEffect(() => {
   }, [])

   const onSubmit = (e) => {
      e.preventDefault();

      axios.get(`https://api.github.com/search/repositories?q=${textInput}`)
         .then(({ data: { items } }) => props.setRepos(items)).catch(e => console.log(e))

   };

   const onTextInputChange = (e) => {

      setTextInput(e.target.value);

   };


   return (
      <div>
         <form onSubmit={onSubmit}>
            <input
               type="text"
               value={textInput}
               onChange={onTextInputChange}
            />
            <button>procurar</button>

         </form>
      </div>
   )
}

export default GitHubForm;