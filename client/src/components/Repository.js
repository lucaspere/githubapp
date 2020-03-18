import React, { useState } from 'react';
import { addToDB, deleteRepos } from '../utils/api';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const Repository = ({ item, hiddenRemoveButton, hiddenAddButton }) => {

   const [message, setMessage] = useState('')

   const updated = dayjs(item.updated_at).format('LL');

   return (
      <div>
         {message && <p>{message}</p>}
         <img src={item.owner.avatar_url} width="50px" />
         <div>
            <div>
               <h3>{item.full_name}</h3>
               <p>{item.description}</p>

            </div>
            <div>
               <p>Stars: {item.stargazers_count}</p>
               <p>{item.language}</p>
               {item.license && <p>{item.license.name}</p>}
               <p>Updated on {updated}</p>
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