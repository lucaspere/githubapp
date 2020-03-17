import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { items } from '../../../repositories.json'
const GitHubForm = () => {

   const [textInput, setTextInput] = useState('');
   const [teste, setTeste] = useState([]);
   const [favoriteRepos, setFavoriteRepos] = useState([]);
   const [erro, setErro] = useState({ menssage: '', isError: false })

   useEffect(() => {
   }, [])

   const onSubmit = (e) => {
      e.preventDefault();

      axios.get(`https://api.github.com/search/repositories?q=${textInput}`)
         .then(({ data: { items } }) => setTeste(items)).catch(e => console.log(e))

   };

   const onTextInputChange = (e) => {

      setTextInput(e.target.value);

   };

   const addToFavorites = (id) => {

      const alreadyAdded = favoriteRepos.some(item => item.id === id);

      if (alreadyAdded) {
         setErro({
            menssage: 'Item já adicionado',
            isError: true
         });
         return setTimeout(() => setErro({menssage: '', isError: false}), 3000)
      }

      const favorite = teste.find(item => item.id === id)

      setFavoriteRepos(
         [...favoriteRepos,
            favorite
         ]
      );
   };

   const onRemove = (id) => {

      setTeste(
         teste.filter((item) => item.id !== id)
      );
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
            {teste.map(item => {
               return (
                  <div key={item.id}>
                     <div>
                        <h3>{item.full_name}</h3>
                        {erro.isError && <p>{erro.menssage}</p>}
                        <p>{item.description}</p>
                     </div>
                     <div>
                        <p>Stars: {item.stargazers_count}</p>
                        <p>Watchers: {item.watchers_count}</p>
                     </div>
                     <div>
                        <button onClick={() => addToFavorites(item.id)}>Favoritar</button>
                        <button onClick={() => onRemove(item.id)}>Deletar</button>
                     </div>
                  </div>
               )
            }
            )}
         </form>
      </div>
   )
}

export default GitHubForm;