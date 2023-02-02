import axios from 'axios';
import { ref } from 'vue';

const MovieBaseUrl = 'https://api.themoviedb.org/3/movie/';
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'


const getLatest = () => { 
    
    const latestMovieList = ref([]);
    
    const latestMovie= async () => {
        axios
        .get(`${MovieBaseUrl}popular?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,)
        .then(res => {        
            res.data.results.forEach(result => {
                latestMovieList.value.push(result);
            });    
            console.log('최신',res.data); 

        })
        .catch(err => {
            console.log(err.message);  
        });
             
    }
    return { latestMovie,latestMovieList};
}
export default getLatest;
