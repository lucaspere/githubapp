import React, { useState } from 'react';
import { addToDB, deleteRepos } from '../utils/api';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import './repository.css';

dayjs.extend(localizedFormat);


const Repository = ({ item, hiddenRemoveButton, hiddenAddButton }) => {

   const [message, setMessage] = useState('')

   const updated = dayjs(item.updated_at).format('LL');

   return (
      <div className='repository-container'>
         {message && <p>{message}</p>}
         <img src={item.owner.avatar_url} className='repos-image' />
         <div className='repos-information-container'>
            <div className='repos-descriptions'>
               <div className='descriptions-container'>
                  <h3 className='full-name'>{item.full_name}</h3>
                  <p className='descriptions'>{item.description}</p>
               </div>
            </div>
            <div className='repos-informations'>
               <p>Stars: {item.stargazers_count}</p>
               <p>{item.language}</p>
               {item.license && <p>{item.license.name}</p>}
               <p>Updated on {updated}</p>
            </div>
         </div>
         <div>
            <input
               id='addButton'
               type="button"
               value="Salvar"
               hidden={hiddenAddButton}
               onClick={() => {
                  addToDB(item, setMessage)

                  setTimeout(() => setMessage(''), 3000)
               }} />
            <input
               id='deleteButton'
               type="button"
               value="Deletar"
               hidden={hiddenRemoveButton}
               onClick={() => deleteRepos(item.id)}
            />
         </div>
      </div>
   );
};

Repository.defaultProps = {

}

export default Repository;