/* eslint-disable react/no-array-index-key */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TaskList from './TaskList';

function App() {
  const [timeDistribution, setTimeDistribution] = useState([1500, 300, 900]);
  const [currentRoundBig, setCurrentRoundBig] = useState(1);
  const [currentRoundSmall, setCurrentRoundSmall] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeDistribution[currentSection]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1);

        return () => clearTimeout(timer);
      }
      setCurrentRoundSmall(currentRoundSmall + 1);
      switch (currentSection) {
        case 0: {
          setCurrentSection(1);
          setTimeLeft(timeDistribution[1]);

          if ((currentRoundSmall + 1) % 9 === 0) {
            setCurrentSection(2);
            setTimeLeft(timeDistribution[2]);
          }
          break;
        }
        case 1: {
          setCurrentSection(0);
          setTimeLeft(timeDistribution[0]);
          setCurrentRoundBig(currentRoundBig + 1);
          break;
        }
        case 2: {
          if ((currentRoundSmall) % 9 === 0) {
            setCurrentRoundSmall(0);
          }
          setCurrentSection(0);
          setTimeLeft(timeDistribution[0]);
          break;
        }
        default: break;
      }
    }
    return () => {};
  }, [timeLeft, isRunning, currentSection]);

  useEffect(() => {
    console.log(currentRoundSmall);
  }, [currentRoundSmall]);

  return (
    <div className="w-full h-screen flex flex-col bg-amber-400 font-[Rubik]">
      <Navbar />
      <div className="w-full h-full min-h-0 flex text-white">
        <TaskList />
        <div className="flex-1 flex flex-col gap-16 items-center justify-center relative">
          <div className="w-[calc(100%-2px)] absolute z-0 top-0 left-0 h-1 bg-amber-500 bg-opacity-60 translate-x-[2px] translate-y-[2px]">
            <div
              className="h-1 bg-white"
              style={{
                width: `${(timeLeft / timeDistribution[currentSection]) * 100}%`,
              }}
            />
          </div>
          <h2 className="text-xl -mb-16 font-bold -mt-28">
            #
            {currentRoundBig}
          </h2>
          <p className="text-lg -mb-4">{['Time to work!', 'Time for a break!'][Number(Boolean(currentSection))]}</p>
          <div className="flex tracking-wide">
            {['Porodomo', 'Short break', 'Long break'].map((item, index) => (
              <button
                type="button"
                key={index}
                className={`${currentSection === index ? 'bg-white text-amber-400 drop-shadow-[0_4px_0_rgb(25,25,25,0.1)]' : 'text-white'
                } text-white rounded-md w-56 py-4 text-lg font-medium drop-shadow-[0_4px_0_rgb(25,25,25,0.1)]`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="font-['DSEG7_Classic_Mini'] text-9xl drop-shadow-[0_6px_0_rgb(25,25,25,0.1)]">{moment.utc(moment.duration(timeLeft, 'seconds').as('milliseconds')).format('mm:ss')}</div>
          <button type="button" onClick={() => setIsRunning(!isRunning)} className={`bg-white text-amber-400 text-2xl font-bold uppercase w-56 py-4 rounded-md tracking-wide transition-all ${isRunning ? 'translate-y-[4px]' : 'shadow-[0_6px_0_rgb(25,25,25,0.1)]'}`}>{['Start', 'Stop'][Number(isRunning)]}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
