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