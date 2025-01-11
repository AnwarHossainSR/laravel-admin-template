import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);

  return (
    <>
      <div
        className="cursor-pointer rounded-md px-3 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={toggleOpen}
      >
        {children}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

const Content = ({
  align = 'right',
  width = '48',
  contentClasses = 'py-2 bg-white dark:bg-gray-800',
  children,
}) => {
  const { open, setOpen } = useContext(DropDownContext);

  let alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
  } else if (align === 'right') {
    alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  }

  return (
    <>
      <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className={`absolute z-50 mt-2 rounded-lg shadow-md ${alignmentClasses} ${widthClasses}`}
          onClick={() => setOpen(false)}
        >
          <div
            className={`rounded-lg ring-1 ring-gray-300 ring-opacity-20 dark:ring-gray-700 ${contentClasses}`}
          >
            {children}
          </div>
        </div>
      </Transition>
    </>
  );
};

const DropdownLink = ({ icon: Icon, className = '', children, ...props }) => {
  return (
    <Link
      {...props}
      className={`flex items-center px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${className}w-full`}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      <span>{children}</span>
    </Link>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
