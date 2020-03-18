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
      setLoading(false);

      abortController.abort();
   } catch (e) {
      console.log(e)
   }
}

export const addToDB = async (reposToAdd, setMessage) => {

   try {

      await axios.post('http://localhost:3000', reposToAdd);

      setMessage('Repositório adicionado com sucesso!');

   } catch(e) {
      console.log(e);

      setMessage('Falha ao adicionar repositório');
   }
}