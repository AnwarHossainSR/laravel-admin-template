import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react'; // Importing Lucide icons

export default function UsersIndex({ users }) {
  console.log('users', users);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-200">
          User Management
        </h2>
      }
    >
      <Head title="User Management" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Add User Button */}
          <div className="mb-6">
            <Link
              href={route('users.create')}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white"
            >
              Add New User
            </Link>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="min-w-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <thead>
                <tr className="bg-gray-100 text-sm uppercase leading-normal text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600 dark:text-gray-400">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-6 py-3">{user.name}</td>
                    <td className="px-6 py-3">{user.email}</td>
                    <td className="flex items-center justify-center space-x-2 px-6 py-3 text-center">
                      {/* Edit Icon */}
                      <Link
                        href={route('users.edit', user.id)}
                        className="text-yellow-500"
                      >
                        <Edit size={16} />
                      </Link>

                      {/* Delete Form */}
                      <form
                        action={route('users.destroy', user.id)}
                        method="POST"
                        style={{ display: 'inline' }}
                      >
                        {/* CSRF token and method fields are hidden */}
                        <input
                          type="hidden"
                          name="_token"
                          value={user._token}
                        />
                        <input type="hidden" name="_method" value="DELETE" />
                        <button
                          type="submit"
                          className="text-red-500"
                          onClick={() =>
                            confirm(
                              'Are you sure you want to delete this user?',
                            )
                          }
                        >
                          <Trash size={16} />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination (if needed) */}
          {/* {users.links()} */}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
