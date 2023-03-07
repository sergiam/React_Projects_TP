import { useState } from 'react'

export const List = ({setTextArray, textArray}) => {
    const [numSelectedState, setNumSelectedState] = useState('')

    const handleClick = (index) => {
        setNumSelectedState(index)
    }   

    const handleClickDelete = () => {
        setTextArray(removeItemWithSlice(numSelectedState))
        setNumSelectedState('')
    }

    function removeItemWithSlice(index) {
        return [...textArray.slice(0, index), ...textArray.slice(index + 1)]
    }

    function disabledButton(index){
       var id='string-no-selected'
        if(numSelectedState === index) {
            id='string-selected'
        }  
       return (id)
    }

    var lists = textArray.map(function(list, index) {
        return(
            <div key={index}>
                <p key={index} onClick={() => {handleClick(index)}} id={disabledButton(index)}> {list} </p>
            </div>
        )   
    });

    return(
        <div id='list-container'>
            <div id='list-word-container'>{lists}</div>
            {numSelectedState === '' ?
            <div/> :
            <button id='delete-text' data-testid='delete-text' onClick={() => handleClickDelete()}> Delete Text </button>}
        </div>
    )
}

export default List