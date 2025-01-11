import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          {/* Update Profile Information Section */}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 dark:text-gray-200">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          {/* Update Password Section */}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 dark:text-gray-200">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          {/* Delete User Section */}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 dark:text-gray-200">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
