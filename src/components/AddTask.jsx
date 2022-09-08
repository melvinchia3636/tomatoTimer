/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

export default function AddTask({ setAddTaskBoxOpen, setTasks }) {
  const [estPomorodo, setEstPomorodo] = useState(0);
  const [taskTitle, setTaskTitle] = useState('');

  const addNewTask = () => {
    setAddTaskBoxOpen(false);
    setTaskTitle('');
    setEstPomorodo(0);
    setTasks((prev) => [...prev, [prev.length, taskTitle, Math.min(estPomorodo, 99)]]);
  };

  return (
    <>
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        id="tasknameinput"
        placeholder="What are you working on?"
        className="text-left w-full placeholder-zinc-300 text-xl font-medium focus:outline-none mt-2 text-zinc-600"
      />
      <h3 className="text-left text-zinc-600 text-sm mt-4 font-semibold">Est Pomodoros</h3>
      <div className="flex">
        <input
          value={estPomorodo}
          onChange={(e) => {
            setEstPomorodo(parseInt(e.target.value, 10));
          }}
          type="number"
          className="text-left w-16 placeholder-zinc-400 text-lg font-medium focus:outline-none mt-2 text-zinc-600 rounded-md bg-zinc-200 bg-opacity-40 p-2"
        />
        <button
          type="button"
          onClick={() => {
            setEstPomorodo(estPomorodo + 1);
          }}
          className="text-left text-zinc-600 text-sm font-semibold ml-2 mt-2 w-12 h-12 rounded-md flex items-center justify-center bg-white shadow-[0_3px_0_rgba(87,83,78,0.1)] border-2 border-zinc-100"
        >
          <Icon icon="octicon:triangle-up-24" className="w-4 h-4 text-zinc-300 stroke-zinc-300 stroke-1" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (estPomorodo > 0) {
              setEstPomorodo(estPomorodo - 1);
            }
          }}
          className="text-left text-zinc-600 text-sm font-semibold ml-2 mt-2 w-12 h-12 rounded-md flex items-center justify-center bg-white shadow-[0_3px_0_rgba(87,83,78,0.1)] border-2 border-zinc-100"
        >
          <Icon icon="octicon:triangle-down-24" className="w-4 h-4 text-zinc-300 stroke-zinc-300 stroke-1" />
        </button>
      </div>
      <button
        type="button"
        onClick={addNewTask}
        className={`${
          taskTitle
            ? 'bg-orange-400 shadow-[0_3px_0_rgba(251,146,60,0.5)]'
            : 'bg-zinc-300 shadow-[0_3px_0_rgba(87,83,78,0.1)]'
        } rounded-md font-medium text-white w-full p-3 transition-all`}
      >
        Save
      </button>
      <button
        onClick={() => setAddTaskBoxOpen(false)}
        type="button"
        className="text-zinc-300 hover:text-zinc-500 hover:bg-zinc-100 p-3 -mt-1 rounded-md hover:shadow-[0_3px_0_rgba(87,83,78,0.1)] transition-all text-center font-medium"
      >
        Cancel
      </button>
    </>
  );
}
