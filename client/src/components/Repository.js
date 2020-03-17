import React, { useState } from 'react';



const Repository = ({ item, setRepos, repos}) => {

   const [favoriteRepos, setFavoriteRepos] = useState([]);
   const [erro, setErro] = useState({ menssage: '', isError: false })

   const addToFavorites = (id) => {

      const alreadyAdded = favoriteRepos.some(item => item.id === id);

      if (alreadyAdded) {
         setErro({
            menssage: 'Item já adicionado',
            isError: true
         });
         return setTimeout(() => setErro({ menssage: '', isError: false }), 5000)
      }

      const favorite = repos.find(item => item.id === id)

      setFavoriteRepos(
         [...favoriteRepos,
            favorite
         ]
      );
   };

   const onRemove = (id) => {

      setRepos(
         repos.filter((item) => item.id !== id)
      );
   };



   return (
      <div>
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
   );
};

export default Repository;