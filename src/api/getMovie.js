import axios from 'axios';
import { ref } from 'vue';

const MovieBaseUrl = 'https://api.themoviedb.org/3/movie/';
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'


const getMovie = () => { 
    
    const nowPlayingList = ref('');


    
    const nowPlaying= async () => {
        axios
        .get(`${MovieBaseUrl}now_playing?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,)
        .then(res => {            
            console.log(res.data); 

        })
        .catch(err => {
            console.log(err.message);
        });
             
    }
    return { nowPlayingList,nowPlaying};
}
export default getMovie;

// const request = axios.create({
//     baseURL: "https://api.themoviedb.org/3/",
//     params: {
//       api_key: "d2bb40d5b45665c9a72ed5938162a943",
//       language: "ko-KR",
//     },
    
//   });
//   // https://image.tmdb.org/t/p/w300/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg
//   export const movieApi = {
//     nowPlaying: () => request.get("movie/now_playing"),
//     popular: () => request.get("movie/popular"),
//     upComing: () => request.get("movie/upcoming"),
//     // append to response에 대한 설명 https://developers.themoviedb.org/3/get1ting-started/append-to-response
//     movieDetail: (id) =>
//       request.get(`movie/${id}`, {
//         params: { append_to_response: "videos" },
//       }),
  
//     search: (keyword) =>
//       request.get("search/movie", {
//         params: {
//           query: keyword,
//         },
//       }),
//   };