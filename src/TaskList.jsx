import { Icon } from '@iconify/react'
import React from 'react'

function TaskList() {
  return (
    <div className="w-3/12 h-full shadow-[2px_0_0_rgba(217,119,6,0.2)] p-6 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between pb-4 shadow-[0_2px_0_rgba(217,119,6,0.2)]">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <button>
          <Icon icon="uil:ellipsis-v" className="w-6 h-6" />
        </button>
      </div>
      <button className="text-amber-400 bg-white w-full py-3 mt-2 rounded-md font-semibold shadow-[0_4px_0_rgb(25,25,25,0.1)] flex items-center justify-center">
        <Icon icon="uil:plus" className="w-4 h-4 mr-2 stroke-amber-400 stroke-2" />
        Add task
      </button>
    </div>
  )
}

export default TaskList