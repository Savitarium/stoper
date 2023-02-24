import Button from './components/Button/Button.js';
import TimeView from './components/TimeView/TimeView.js';
import { useState, useEffect } from 'react';

function App() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        if (!intervalId) {
            const newIntervalId = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
            setIntervalId(newIntervalId);
        }
    }

    const stopTimer = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    const resetTimer = () => {
        setTime(0);
        clearInterval(intervalId);
        setIntervalId(null);
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        }
    }, [intervalId]);

    return (
        <div className="content">
            <div>
                <center><TimeView time={time}/></center>
                <Button text="Start" onClick={startTimer} />
                <Button text="Stop" onClick={stopTimer} />
                <Button text="Reset" onClick={resetTimer} />
            </div>
        </div>
    );
}

export default App;
