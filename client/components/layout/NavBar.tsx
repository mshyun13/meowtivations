import {
  faCheckCircle,
  faXmarkCircle,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Link } from 'react-router'

// import LoginButton
import LoginButton from '../LoginButton'

const links = [
  { name: 'Random', to: '/random' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Create', to: '/create' },
]

export default function Navigation() {
  return (
    <Popover as="nav" className="bg-primary text-white relative">
      <div className="mx-auto max-w-7xl sm:px-2">
        <div className="flex items-center justify-between py-4  lg:space-x-2">
          {/* MOBILE */}
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* DESKTOP */}
          <div className="hidden items-center md:flex">
            <Link
              to="/"
              className="rounded-md px-1 py-2 text-white hover:opacity-80"
            >
              <div className="whitespace-nowrap">
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  className="fa-bounce mr-1"
                  style={{ color: '#ffee58' }} /* Meowtivation yellow */
                />
                <span className="font-bold font-title text-2xl tracking-wide lg:text-3xl text-white">
                  {'Meowtivation'}
                </span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="fa-bounce ml-1"
                  style={{ color: '#ffee58' }} /* Meowtivation yellow */
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP */}
          <ul className="hidden flex-1 justify-center text-primary md:flex xl:space-x-1">
            <li key={'Home'}>
              <DesktopLink to={'/'}>{'Home'}</DesktopLink>
            </li>
            {links.map((link) => (
              <li key={link.to}>
                <DesktopLink to={link.to}>{link.name}</DesktopLink>
              </li>
            ))}
            <li key={'users'}>
              <DesktopLink to={'/users/user1'}>Example User</DesktopLink>
            </li>
          </ul>

          {/* DESKTOP */}
          {/* LoginButton */}
          <div>
            <LoginButton />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <MobileNavigation />
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export function MobileNavigation() {
  return (
    <div className="divide-y divide-slate-300 rounded-lg border border-slate-300 bg-slate-100 shadow-lg ring-1 ring-blue ring-opacity-5">
      <div className="px-5 pb-6 pt-5">
        <div className="flex flex-row-reverse items-center justify-between">
          <Popover.Button className="-mr-2 inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-secondary hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue">
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>

          <Popover.Button as={Link} to="/"></Popover.Button>
        </div>
      </div>
      <div className="space-y-6 px-5 py-6">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4">
          <li key={'home'}>
            <Popover.Button
              as={Link}
              to={'/'}
              className="rounded text-base text-secondary font-medium hover:bg-slate-300 hover:text-slate-600"
            >
              {'Home'}
            </Popover.Button>
          </li>
          {links.map((link) => (
            <li key={link.to}>
              <Popover.Button
                as={Link}
                to={link.to}
                className="rounded text-base text-secondary font-medium hover:bg-slate-300 hover:text-slate-600"
              >
                {link.name}
              </Popover.Button>
            </li>
          ))}
          <li key={'users'}>
            <Popover.Button
              as={Link}
              to={'/users/user1'}
              className="rounded text-base text-secondary font-medium hover:bg-slate-300 hover:text-slate-600"
            >
              Example User
            </Popover.Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export function DesktopLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className="rounded-md px-2 py-2 font-header text-base font-bold text-white transition-colors hover:bg-blue lg:px-4 lg:text-xl"
    >
      {children}
    </Link>
  )
}
