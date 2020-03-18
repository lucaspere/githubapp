import React, { useState } from 'react';
import { addToDB, deleteRepos } from '../utils/api';

const Repository = ({ item, hiddenRemoveButton, hiddenAddButton }) => {

   const [message, setMessage] = useState('')

   return (
      <div>
         {message && <p>{message}</p>}
         <img src={item.owner.avatar_url} width="50px" />
         <div>
            <div>
               <h3>{item.full_name}</h3>
               <p>{item.description}</p>
               {item.license && <p>{item.license.name}</p>}
               <p>{item.updated_at}</p>
            </div>
            <div>
               <p>Stars: {item.stargazers_count}</p>
               <p>Watchers: {item.watchers_count}</p>
            </div>
            <div>
               <input
                  type="button"
                  value="Salvar"
                  hidden={hiddenAddButton}
                  onClick={() => {
                     addToDB(item, setMessage)

                     setTimeout(() => setMessage(''), 3000)
                  }} />
               <input
                  type="button"
                  value="Deletar"
                  hidden={hiddenRemoveButton}
                  onClick={() => deleteRepos(item.id)}
               />
            </div>
         </div>
      </div>
   );
};

Repository.defaultProps = {

}

export default Repository;