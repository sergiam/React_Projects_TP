import { useState  } from 'react';
import ScoreboardButtons from './ScoreboardButtons';
import './styles.css';

export const ScoreBoard = ({localPoints, visitorPoints}) => {
    const [localPointsState, setLocalPointsState] = useState(localPoints)
    const [visitorPointsState, setVisitorPointsState] = useState(visitorPoints)
    const [teamSelectorState, setTeamSelectorState] = useState('local')

    const handleClick= (step) => {
        if(teamSelectorState === 'local'){
            if (localPointsState + step >= 0) {
                setLocalPointsState(localPointsState + step)           
            }
        }else if(teamSelectorState==='visitor'){
            if (visitorPointsState + step > 0) {
                setVisitorPointsState(visitorPointsState + step)
            }
        }
    }

    const getPointsElement = (team) => {
        if(team === 'local'){
            return <label id='local-points' data-testid='local-points'>{localPointsState}</label>
        }else if(team === 'visitor'){
            return <label id='visitor-points' data-testid='visitor-points'>{visitorPointsState}</label>
        }
    }

    return(
        <div id='main-container' data-testid='main-container'>
            <div id='team-selector-buttons-container' data-testid='team-selector-buttons-container'>
                <button id='button-local' data-testid='button-local' onClick={() => setTeamSelectorState('local')}>Local</button>
                <button id='button-visitor' data-testid='button-visitor' onClick={() => setTeamSelectorState('visitor')}>Visitante</button>
            </div>
            <div>
                {teamSelectorState === 'local' ? <h1>{getPointsElement('local')}</h1> : getPointsElement('local')}
                <label>-</label>                
                {teamSelectorState === 'visitor' ? <h1>{getPointsElement('visitor')}</h1> : getPointsElement('visitor')}
            </div>
            <div id='scoreboard-buttons-container' data-testid='scoreboard-buttons-container'>
                <ScoreboardButtons handleClickAdd={() => handleClick(+1)} handleClickSub={() => handleClick(-1)}/>  
            </div>
        </div>
    )
}

export default ScoreBoard