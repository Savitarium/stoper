import { useState, useEffect } from "react";

const TimeView = (props) => {
    const { time } = props;
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                props.setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, props]);

    const formatTime = (timeInMs) => {
        const hours = Math.floor(timeInMs / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0");
        const minutes = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor((timeInMs % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0");
        const milliseconds = (timeInMs % 1000).toString().padStart(3, "0");
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    return <div>{formatTime(time)}</div>;
};

export default TimeView;
