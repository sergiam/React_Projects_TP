import ImgPoke from "./ImgPoke.jsx";
import { getData  } from '../../services/index';
import { useFetchData } from "../../hooks/useFetchData.js";
import './styles.css';

export const FetchApiPol = () => {

   const [data, isLoaded, isError] = useFetchData({
    key: 1,
    action: getData('https://pokeapi.co/api/v2/pokemon?limit=151'),
  });
   if (!isLoaded) {
    return <div>A moment please...</div>
  }

  if (isError) {
    return <div>{`There is a problem fetching the post data - ${isError }`}</div>
  }
  else{
    var lists = data.results?.map(function(data, index){
        return(
            <div key={index}>
                <p><strong>Name: </strong>{data.name}</p>
                <ImgPoke link={data.url}></ImgPoke> 
            </div>
        )   
    });

  }
    return (
        <div>
            <div id='main-container'>
                {lists}
            </div>
        </div>
    )
}

export default FetchApiPol