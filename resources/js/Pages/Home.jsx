import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

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

export default function Welcome({ auth }) {
  return (
    <GuestLayout auth={auth}>
      <Head title="Welcome" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Hero />
        <Features />
      </div>
    </GuestLayout>
  );
}
