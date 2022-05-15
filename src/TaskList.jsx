import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { AnimateSharedLayout, MotionConfig } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const Item = ({ name, desc }) => {
  return (
    <motion.div
      layout
      className="bg-white w-full rounded-md text-amber-400 p-4 flex gap-1.5">
      <input class="form-check-input appearance-none h-4 w-4 flex-shrink-0 border border-gray-300 rounded-sm bg-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
      <div>
        <h3 className="text-stone-600 font-medium text-lg -mt-0.5">{name}</h3>
        <p className="text-stone-600">{desc}</p>
      </div>
    </motion.div>
  )
}

function TaskList() {
  const [tasks, setTasks] = useState([
    [0, "Fuck My Life", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    [1, "Fuck My Life", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  ])
  return (
    <div className="w-3/12 h-full shadow-[2px_0_0_rgba(217,119,6,0.2)] p-6 pb-0 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between pb-4 shadow-[0_2px_0_rgba(217,119,6,0.2)]">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <button>
          <Icon icon="uil:ellipsis-v" className="w-6 h-6" />
        </button>
      </div>
      <button onClick={() => {
        setTasks([[
          tasks.length,
          Math.random().toFixed(2),
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ"], ...tasks])
      }} className="text-amber-400 bg-white w-full py-3 mt-2 rounded-md font-semibold shadow-[0_4px_0_rgb(25,25,25,0.1)] flex items-center justify-center">
        <Icon icon="uil:plus" className="w-4 h-4 mr-2 stroke-amber-400 stroke-2" />
        Add task
      </button>
      <div className="h-full overflow-y-auto overflow-x-hidden flex flex-col gap-2 pb-6">
        <AnimateSharedLayout>
          {tasks.map(([index, name, desc]) => <Item key={index} name={name} desc={desc} />)}
        </AnimateSharedLayout>
      </div>
    </div>
  )
}

export default TaskList