import { Popover, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import React from 'react';

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: () => (
      <div className="w-12 h-12 rounded-md bg-opacity-40 bg-amber-400 flex items-center justify-center">
        <Icon icon="uil:pen" className="w-8 h-8 text-amber-400" />
      </div>
    ),
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: () => (
      <div className="w-12 h-12 rounded-md bg-opacity-40 bg-amber-400 flex items-center justify-center">
        <Icon icon="uil:chart" className="w-8 h-8 text-amber-400" />
      </div>
    ),
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: () => (
      <div className="w-12 h-12 rounded-md bg-opacity-40 bg-amber-400 flex items-center justify-center">
        <Icon icon="uil:android-alt" className="w-8 h-8 text-amber-400" />
      </div>
    ),
  },
];

function Navbar() {
  return (
    <nav className="flex justify-between items-center relative z-50 p-4 px-6 shadow-[0_2px_0_rgba(217,119,6,0.2)]">
      <h1 className="text-2xl font-semibold text-white flex items-center">
        <Icon icon="uil:clock" className="w-8 h-8 mr-2" />
        Pomodoro Clock
      </h1>
      <div className="flex items-center gap-12">
        <button type="button" className="text-white font-medium flex items-center mt-1">
          <Icon icon="uil:graph-bar" className="w-5 h-5 mr-2 mb-1" />
          Statistics
        </button>
        <Popover className="relative">
          <Popover.Button className="text-white font-medium flex items-center mt-1">
            <Icon icon="uil:cog" className="w-5 h-5 mr-2 mb-0.5" />
            Settings
            <Icon icon="uil:angle-down" className="w-5 h-5 mt-0.5 ml-1 stroke-white stroke-[0.6px]" />
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-20 top-5 right-0 w-max">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative flex flex-col gap-8 bg-white p-7">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="bg-gray-50 p-4">
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Documentation
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      Start integrating products and tools
                    </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <button type="button" className="text-amber-400 bg-white w-32 py-3 rounded-md font-semibold shadow-[0_4px_0_rgb(25,25,25,0.1)] mt-[4px]">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
