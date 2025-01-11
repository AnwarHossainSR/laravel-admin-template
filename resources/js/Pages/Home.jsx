import { Head, Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import React from 'react';

const Navigation = ({ auth }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/api/placeholder/32/32"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Company
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>
            {auth?.user ? (
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  Sign Up
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
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Contact
            </Link>
            {auth?.user ? (
              <Link
                href="/dashboard"
                className="block bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-xl text-gray-100">
          Build something amazing with Laravel and React
        </p>
        <div className="mt-8">
          <Link
            href="/register"
            className="rounded-md bg-white px-8 py-3 font-medium text-indigo-600 hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="bg-gray-50 py-16 dark:bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            title: 'Easy to Use',
            description:
              'Our platform is designed to be intuitive and user-friendly.',
          },
          {
            title: 'Powerful Features',
            description: 'Access a wide range of tools and capabilities.',
          },
          {
            title: '24/7 Support',
            description: 'Get help whenever you need it from our support team.',
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="mt-4 text-gray-400">
            Building the future with modern web technologies.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Connect</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="mt-4 text-gray-400">
            Stay updated with our latest news and updates.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation auth={auth} />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
}
