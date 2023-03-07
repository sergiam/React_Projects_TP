import { getData, getDataTypeName  } from '../../services/index';
import { useFetchData } from "../../hooks/useFetchData";
import { useState } from 'react';
import './styles.css';
 
export const ImgPoke = ({link}) => {
    const [movesState, setMovesState] = useState(true);

    const [data, isLoaded, isError] = useFetchData({
        key: 1,
        action: getData(link),
      });
       if (!isLoaded) {
        return <div>A moment please...</div>
      }
    
      if (isError) {
        return <div>{`There is a problem fetching the post data - ${isError }`}</div>
      } 

    const handleClickMove = (data) => {
       getDataTypeName(data)
       .then(data => console.log(data.type.name))
    }

    const handleClick = () => {
        if(movesState){
            setMovesState(false);
        }else{
            setMovesState(true);
        };
    }
    var movesList = data.moves?.map(function(list, index) {
        return(
            <div key={index} >
                <p>{list.move.name} </p>
                {/* <p>{getDataTypeName(list.move.url)}</p> */}
                <button onClick={() => handleClickMove(list.move.url)} >ds</button>
            </div>
        )
    });

      return (
            <div>
                <div id='imgPoke'>
                    <img src={data.sprites.front_default}></img>
                    <button onClick={() => handleClick()}>Moves</button>
                </div>
                {movesState ?
                    <div/> : <div>{movesList}</div>}        
            </div>
        )
    }
    
    export default ImgPoke