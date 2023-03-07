import './styles.css';

function ScoreboardButtons({handleClickAdd, handleClickSub}) { 
  return (
    <div>
        <button id='AddButton' data-testid='AddButton'
        onClick={() => handleClickAdd()}>+</button>
        <button id='SubButton' data-testid='SubButton'
        onClick={() => handleClickSub()}>-</button>
    </div>
  )
}

export default ScoreboardButtons