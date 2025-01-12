import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GuestLayout({ children, auth }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <Navigation auth={auth} />

      {/* Main Content */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const Navigation = ({ auth }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="bg-white shadow-lg dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              পরিষেবাসমূহ
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              যোগাযোগ
            </Link>
            {auth?.user ? (
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  লগইন
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="transition-transform duration-300 ease-in-out sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              পরিষেবাসমূহ
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              যোগাযোগ
            </Link>
            {auth?.user ? (
              <Link
                href="/dashboard"
                className="block bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  লগইন
                </Link>
                <Link
                  href="/register"
                  className="block bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
                >
                  সাইন আপ
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">আমাদের সম্পর্কে</h3>
          <p className="mt-4 text-gray-400">
            আমরা আধুনিক প্রযুক্তি ব্যবহার করে ভবিষ্যৎ গড়ছি।
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">দ্রুত লিঙ্ক</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                পরিষেবাসমূহ
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                যোগাযোগ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">যোগাযোগ</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                টুইটার
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                লিঙ্কডইন
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                গিটহাব
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">নিউজলেটার</h3>
          <p className="mt-4 text-gray-400">
            আমাদের সর্বশেষ খবর ও আপডেট সম্পর্কে জানতে নিবন্ধন করুন।
          </p>
        </div>
      </div>
    </div>
  </footer>
);
