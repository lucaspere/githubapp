import axios from 'axios';

export const fetchRepos = async (lookingFor, setLoading, setRepos) => {

   const abortController = new AbortController();
   const signal = abortController.signal;

   try {
      setLoading(true);

      const { data: { items } } = await axios.get(`https://api.github.com/search/repositories?q=${lookingFor}`, { signal });

      setRepos(items);
      setLoading(false);

      abortController.abort();

   } catch (e) {
      console.log(e);
   }
};

export const GetReposFromDB = async (setRepos, setLoading) => {

   const abortController = new AbortController();
   const signal = abortController.signal;

   try {

      
      const data = await axios.get('http://localhost:3000', { signal });

      setRepos(data.data);


      abortController.abort();
   } catch (e) {
      console.log(e)
   }
}

export const addToDB = async (reposToAdd, setMessage) => {

   try {

      const data = await axios.post('http://localhost:3000', reposToAdd);

      if (data.status === 200) {
         return setMessage(data.data.toString());
      }

      setMessage('Repositório adicionado com sucesso!');

   } catch (e) {

      setMessage('Falha ao adicionar repositório');
   }
}

export const deleteRepos = async (id) => {

   try {

      await axios.delete('http://localhost:3000', {params: id})
   
   } catch(e) {
      console.log(e)
   }
   
}