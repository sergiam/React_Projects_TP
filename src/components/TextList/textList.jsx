import { useState } from 'react'
import List from './list'
import './stylesList.css'

export const TextList = () => {

    const [textArrayState, setTextArrayState] = useState([])
    const [inputValuseState, setinputValuseState] = useState('')

    const handleClickAdd = () => {
        if(inputValuseState.length > 0){ 
            setTextArrayState(textArrayState => [...textArrayState, inputValuseState])  
            setinputValuseState('')
        }
    }
  
    return (
        <div id='document' data-testid='document'>
            <input id='user-text' data-testid='user-text' value={inputValuseState}
                    onChange={(event) => setinputValuseState(event.target.value)}></input>
            <button id='add-text' data-testid='add-text' onClick={() => handleClickAdd()} disabled={!inputValuseState}> Add Text </button>
            {textArrayState.length === 0 ?
             <div/>:
             <List textArray={textArrayState} setTextArray={setTextArrayState}></List>}
        </div>
    )
}

export default TextList