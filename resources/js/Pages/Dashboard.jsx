import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-2xl font-bold leading-tight text-gray-700 dark:text-gray-200">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
            <div className="p-6 text-lg text-gray-800 dark:text-gray-200">
              <h3 className="mb-4 text-xl font-semibold">Welcome Back!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You're logged in! Explore your dashboard and manage your account
                easily. Use the navigation menu to access other sections of the
                application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
