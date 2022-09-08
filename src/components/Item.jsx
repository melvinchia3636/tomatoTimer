/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Item({ index, name, est }) {
  const [completed, setCompleted] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

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
      className="bg-white w-full rounded-md text-orange-400 p-4"
    >
      <div className="flex items-center gap-1.5">
        <input
          className="form-check-input appearance-none h-4 w-4 flex-shrink-0 border border-zinc-300 rounded-sm bg-white checked:bg-orange-400 checked:border-orange-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id="flexCheckDefault"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <div className="flex items-center justify-between w-full gap-4">
          <h3 className="text-zinc-600 font-medium text-lg transition-all">
            <span className={`strike ${completed && 'active'}`}>{name}</span>
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold flex items-center gap-1">
              <span className="text-xl font-medium block mb-[2px]">0</span>
              <span>/</span>
              <span>{est}</span>
            </span>
            <button type="button" onClick={() => setIsExpand(!isExpand)}>
              <Icon icon="uil:angle-down" className="w-6 h-6 text-zinc-300" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isExpand ? 'h-72 py-1' : 'h-0 py-0'
        } delay-100 transition-all w-full duration-500 overflow-hidden flex flex-col justify-between px-1`}
      />
    </motion.div>
  );
}
