/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import Item from './components/Item';
import AddTask from './components/AddTask';

function TaskList() {
  const [addTaskBoxOpen, setAddTaskBoxOpen] = useState(false);

  const [tasks, setTasks] = useState([
    [0, 'Fill in the hole', 1],
    [1, 'Fill in another hole that I have dug a few years ago', 2],
  ]);

  return (
    <aside className="w-3/12 h-full shadow-[2px_0_0_rgba(217,119,6,0.2)] p-6 pb-0 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between pb-4 shadow-[0_2px_0_rgba(217,119,6,0.2)]">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <button type="button">
          <Icon icon="uil:ellipsis-v" className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`text-orange-400 ${
          !addTaskBoxOpen ? 'cursor-pointer' : 'cursor-auto'
        } bg-white w-full py-3 px-4 mt-2 rounded-md shadow-[0_4px_0_rgb(25,25,25,0.1)] flex items-center flex-col`}
      >
        <button
          type="button"
          className={`w-full flex justify-center font-semibold ${!addTaskBoxOpen ? 'cursor-pointer' : 'cursor-auto'}`}
          onClick={() => {
            setAddTaskBoxOpen(true);
            document.getElementById('tasknameinput').focus();
          }}
        >
          <div
            className={`flex items-center justify-left h-8 whitespace-nowrap duration-500 transition-all ${
              addTaskBoxOpen ? 'flex-1' : 'flex-0'
            }`}
          >
            <Icon icon="uil:plus" className="w-4 h-4 mr-2 stroke-orange-400 stroke-2" />
            Add task
          </div>
        </button>
        <div
          className={`${
            addTaskBoxOpen ? 'h-72 py-1' : 'h-0 py-0'
          } delay-100 transition-all w-full duration-500 overflow-hidden flex flex-col justify-between px-1`}
        >
          <AddTask setAddTaskBoxOpen={setAddTaskBoxOpen} setTasks={setTasks} />
        </div>
      </div>
      <div className="h-full overflow-y-auto overflow-x-hidden flex flex-col gap-2 pb-6">
        <AnimateSharedLayout>
          {tasks.map(([index, name, est], i) => (
            <Item key={index} index={i} name={name} est={est} />
          ))}
        </AnimateSharedLayout>
      </div>
    </aside>
  );
}

export default TaskList;
