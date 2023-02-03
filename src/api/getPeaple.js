import axios from 'axios';
import { ref } from 'vue';

const MovieBaseUrl = 'https://api.themoviedb.org/3/person/';
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'


const getPerson = () => { 
    
    const personList = ref([]);
    
    const PersonNow = async () => {
        axios
        .get(`${MovieBaseUrl}popular?api_key=${MovieKey}&language=ko-KO&page=1`,)
        .then(res => {        
            res.data.results.forEach(result => {
                personList.value.push(result);
            });    
            console.log('사람',res.data); 

        })
        .catch(err => {
            console.log(err.message);
        });
             
    }
    return { PersonNow,personList};
}
export default getPerson;
