import axios from 'axios';
import { ref } from 'vue';

const MovieBaseUrl = 'https://api.themoviedb.org/3/tv/';
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'


const getTv = () => { 
    
    const onTheAirList = ref([]);
    
    const nowPlayingTv= async () => {
        axios
        .get(`${MovieBaseUrl}on_the_air?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,)
        .then(res => {        
            res.data.results.forEach(result => {
                onTheAirList.value.push(result);
            });    
            console.log('tv',res.data); 

        })
        .catch(err => {
            console.log(err.message);
        });
             
    }
    return { onTheAirList,nowPlayingTv};
}
export default getTv;
