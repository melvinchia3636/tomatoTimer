import { Icon } from '@iconify/react'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 px-6 shadow-[0_2px_0_rgba(217,119,6,0.2)]">
      <h1 className="text-2xl font-semibold text-white flex items-center">
        <Icon icon="uil:clock" className="w-8 h-8 mr-2" />
        Pomodoro Clock
      </h1>
      <div className="flex items-center gap-12">
        <button className="text-white font-medium flex items-center">
          <Icon icon="uil:graph-bar" className="w-5 h-5 mr-2" />
          Statistics
        </button>
        <button className="text-white font-medium flex items-center">
          <Icon icon="uil:cog" className="w-5 h-5 mr-2" />
          Settings
        </button>
        <button className="text-amber-400 bg-white w-32 py-3 rounded-md font-semibold shadow-[0_4px_0_rgb(25,25,25,0.1)]">Login</button>
      </div>
    </nav>
  )
}

export default Navbar