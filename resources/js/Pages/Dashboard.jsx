import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  const stats = [
    {
      label: 'Total Users',
      value: '1,245',
      icon: '👥',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      label: 'Active Sessions',
      value: '345',
      icon: '🔄',
      color: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      label: 'New Registrations',
      value: '78',
      icon: '🆕',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      label: 'Revenue',
      value: '$12,345',
      icon: '💰',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      label: 'Support Tickets',
      value: '34',
      icon: '🎟️',
      color: 'bg-red-100',
      textColor: 'text-red-600',
    },
    {
      label: 'Completed Tasks',
      value: '567',
      icon: '✅',
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
    },
  ];

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-200">
          Stats Overview
        </h2>
      }
    >
      <Head title="Stats Overview" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 shadow-sm ${stat.color} border border-gray-200 dark:border-gray-700`}
              >
                <div className="flex items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.textColor} bg-white shadow-md`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                    <p className={`mt-1 text-xl font-bold ${stat.textColor}`}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Welcome Section */}
          <div className="mt-10 rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Welcome Back!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use the stats above to monitor the health of your application.
              Stay informed and make data-driven decisions!
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
