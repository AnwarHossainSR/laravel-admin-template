import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
  const user = usePage().props.auth.user;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

  const textChunks = ['এ', 'ডু', 'প্রো'];

  useEffect(() => {
    const totalChunks = textChunks.length;
    const interval = setInterval(() => {
      if (!isReversed) {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === totalChunks - 1) {
          setIsReversed(true);
        }
      } else {
        setCurrentIndex(currentIndex - 1);
        if (currentIndex === 0) {
          setIsReversed(false);
        }
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentIndex, isReversed, textChunks.length]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="border-b border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <ApplicationLogo className="h-8 w-auto fill-current text-gray-800 dark:text-white" />
                </Link>
                <span className="ml-2 flex text-xl font-bold">
                  {textChunks.map((chunk, index) => (
                    <span
                      key={index}
                      className={`bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent transition-opacity duration-500 ${
                        index <= currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {chunk}
                    </span>
                  ))}
                </span>
              </div>

              <div className="hidden sm:ms-10 sm:flex sm:items-center sm:space-x-8">
                <NavLink
                  className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white"
                  href={route('dashboard')}
                  active={route().current('dashboard')}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  href="/users"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Users
                </NavLink>
              </div>
            </div>

            <div className="hidden sm:ms-6 sm:flex sm:items-center">
              <div className="relative ms-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
                      >
                        {user.name}
                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>
                      Profile
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route('logout')}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState,
                  )
                }
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none dark:hover:bg-gray-800"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
          }
        >
          <div className="space-y-1 pb-3 pt-2">
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink href="/users">Users</ResponsiveNavLink>
          </div>

          {/* User Info */}
          <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-700">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {user.email}
              </div>
            </div>

            {/* Dropdown Links */}
            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route('profile.edit')}>
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                method="post"
                href={route('logout')}
                className="text-red-600 hover:text-red-800"
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white">
        {/* Footer content can be added here if needed */}
      </footer>
    </div>
  );
}
