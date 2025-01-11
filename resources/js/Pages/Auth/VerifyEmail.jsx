import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm({});

  const submit = (e) => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />
      <div className="my-20 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">
            Email Verification
          </h2>
          <div className="mb-6 mt-4 text-sm text-gray-600 dark:text-gray-300">
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
          </div>

          {status === 'verification-link-sent' && (
            <div className="mb-4 text-sm font-medium text-green-600">
              A new verification link has been sent to the email address you
              provided during registration.
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">
            <div className="flex items-center justify-between">
              <PrimaryButton
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                disabled={processing}
              >
                Resend Verification Email
              </PrimaryButton>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <Link
                href={route('logout')}
                method="post"
                as="button"
                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Log Out
              </Link>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
