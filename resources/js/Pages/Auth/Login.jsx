import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />
      <div className="my-20 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">
            Log In
          </h2>
          {status && (
            <div className="mb-4 mt-2 text-sm font-medium text-green-600 dark:text-green-400">
              {status}
            </div>
          )}
          <form onSubmit={submit} className="mt-4 space-y-4">
            <div>
              <InputLabel
                htmlFor="email"
                value="Email"
                className="text-gray-700 dark:text-gray-300"
              />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError
                message={errors.email}
                className="mt-2 text-red-500"
              />
            </div>
            <div>
              <InputLabel
                htmlFor="password"
                value="Password"
                className="text-gray-700 dark:text-gray-300"
              />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                autoComplete="current-password"
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError
                message={errors.password}
                className="mt-2 text-red-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  Remember me
                </span>
              </label>
              {canResetPassword && (
                <Link
                  href={route('password.request')}
                  className="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Forgot password?
                </Link>
              )}
            </div>
            <div>
              <PrimaryButton
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                disabled={processing}
              >
                Log in
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
