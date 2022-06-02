/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import {
  AnimateSharedLayout, motion,
} from 'framer-motion';

function AddTask() {
  const [estPomorodo, setEstPomorodo] = useState(0);
  const [taskTitle, setTaskTitle] = useState('');

  return (
    <>
      <div>
        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} id="tasknameinput" placeholder="What are you working on?" className="text-left w-full placeholder-zinc-300 text-xl font-medium focus:outline-none mt-2 text-zinc-600" />
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
      </div>
      <button type="button" className={`${taskTitle ? 'bg-amber-400 shadow-[0_3px_0_rgba(217,119,6,0.5)]' : 'bg-zinc-300 shadow-[0_3px_0_rgba(87,83,78,0.1)]'} rounded-md font-medium text-white w-full p-3 transition-all`}>Save</button>
    </>
  );
}

function Item({ index, name, desc }) {
  return (
    <motion.div
      layout
      initial={{
        y: 0,
        x: 600,
        opacity: 0,
      }}
      animate={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.1 * index,
          duration: 0.3,

        },
      }}
      exit={{
        opacity: 0,
      }}
      className="bg-white w-full rounded-md text-amber-400 p-4 flex gap-1.5"
    >
      <input className="form-check-input appearance-none h-4 w-4 flex-shrink-0 border border-gray-300 rounded-sm bg-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
      <div>
        <h3 className="text-zinc-600 font-medium text-lg -mt-0.5">{name}</h3>
        <p className="text-zinc-600">{desc}</p>
      </div>
    </motion.div>
  );
}

function TaskList() {
  const [addTaskBoxOpen, setAddTaskBoxOpen] = useState(false);

  const [tasks, setTasks] = useState([
    [0, 'Fuck My Life', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    [1, 'Fuck My Life', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
  ]);
  return (
    <div className="w-3/12 h-full shadow-[2px_0_0_rgba(217,119,6,0.2)] p-6 pb-0 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between pb-4 shadow-[0_2px_0_rgba(217,119,6,0.2)]">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <button type="button">
          <Icon icon="uil:ellipsis-v" className="w-6 h-6" />
        </button>
      </div>
      <div>
        <div className={`text-amber-400 ${!addTaskBoxOpen ? 'cursor-pointer' : 'cursor-auto'} bg-white w-full py-3 px-4 mt-2 rounded-md shadow-[0_4px_0_rgb(25,25,25,0.1)] flex items-center flex-col`}>
          <button
            type="button"
            className={`w-full flex justify-center font-semibold ${!addTaskBoxOpen ? 'cursor-pointer' : 'cursor-auto'}`}
            onClick={() => {
              setAddTaskBoxOpen(true);
              document.getElementById('tasknameinput').focus();
            }}
          >
            <div className={`flex items-center justify-left h-8 whitespace-nowrap duration-500 transition-all ${addTaskBoxOpen ? 'flex-1' : 'flex-0'}`}>
              <Icon icon="uil:plus" className="w-4 h-4 mr-2 stroke-amber-400 stroke-2" />
              Add task
            </div>
          </button>
          <div className={`${addTaskBoxOpen ? 'h-64' : 'h-0'} delay-100 transition-all w-full duration-500 overflow-hidden flex flex-col justify-between p-1`}>
            <AddTask />
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto overflow-x-hidden flex flex-col gap-2 pb-6">
        <AnimateSharedLayout>
          {tasks.map(([index, name, desc], i) => (
            <Item key={index} index={i} name={name} desc={desc} />
          ))}
        </AnimateSharedLayout>
      </div>
    </div>
  );
}

export default TaskList;
