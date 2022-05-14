import { Icon } from "@iconify/react";
import moment from "moment";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TaskList from "./TaskList";

function App() {
  const [timeDistribution, setTimeDistribution] = useState([1500, 300, 900]);
  const [currentRoundBig, setCurrentRoundBig] = useState(1);
  const [currentRoundSmall, setCurrentRoundSmall] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  
  const [target, setTarget] = useState(timeDistribution[currentSection]);
  const [timeLeft, setTimeLeft] = useState(target);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1);

        return () => clearTimeout(timer);
      } else {
        setCurrentRoundSmall(currentRoundSmall + 1);
        switch (currentSection) {
          case 0: {
            setCurrentSection(1);
            setTimeLeft(timeDistribution[1]);
            break;
          }
          case 1: {
            if ((currentRoundSmall + 1) % 8 === 0) {
              setCurrentSection(2);
              setTimeLeft(timeDistribution[2]);
            } else {
              setCurrentSection(0);
              setTimeLeft(timeDistribution[0]);
            }
            break;
          }
          case 2: {
            if ((currentRoundSmall + 1) % 9 === 0) {
              setCurrentRoundBig(currentRoundBig + 1);
              setCurrentRoundSmall(0);
            }
            setCurrentSection(0);
            setTimeLeft(timeDistribution[0]);
          }
        }
      }
    }
  }, [timeLeft, isRunning, currentSection]);

  useEffect(() => {
    console.log(currentSection, currentRoundSmall)
  }, [currentSection,])

  return (
    <div className="w-full h-screen flex flex-col bg-amber-400">
      <Navbar />
      <div className="App w-full h-full flex text-white font-[Rubik]">
        <TaskList />
        <div className="flex-1 flex flex-col gap-16 items-center justify-center relative">
          <div className="w-[calc(100%-2px)] absolute top-0 left-0 h-1 bg-amber-500 bg-opacity-60 translate-x-[2px] translate-y-[2px]">
            <div className="h-1 bg-white" style={{
              width: `${(timeLeft / target) * 100}%`
            }}></div>
          </div>
          <h2 className="text-xl -mb-16 font-bold">#{currentRoundBig}</h2>
          <p className="text-lg -mb-4">Time to work!</p>
          <div className="flex tracking-wide">
            <button className="bg-white text-amber-400 rounded-md w-56 py-4 text-lg font-medium drop-shadow-[0_4px_0_rgb(25,25,25,0.1)]">Porodomo</button>
            <button className="text-white rounded-md w-56 py-4 text-lg font-medium">Short break</button>
            <button className="text-white rounded-md w-56 py-4 text-lg font-medium">Long break</button>
          </div>
          <div className="font-['DSEG7_Classic_Mini'] text-9xl drop-shadow-[0_6px_0_rgb(25,25,25,0.1)]">{moment.utc(moment.duration(timeLeft, "seconds").as('milliseconds')).format("mm:ss")}</div>
          <button onClick={() => setIsRunning(!isRunning)} className={`bg-white text-amber-400 text-2xl font-bold uppercase w-56 py-4 rounded-md tracking-wide transition-all ${isRunning ? "translate-y-[4px]" : "shadow-[0_6px_0_rgb(25,25,25,0.1)]"}`}>{["Start", "Stop"][Number(isRunning)]}</button>
        </div>
      </div>
    </div>
  )
}

export default App
