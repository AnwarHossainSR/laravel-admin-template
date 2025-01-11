import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />
      <div className="my-10 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">
            Register
          </h2>
          <form onSubmit={submit} className="mt-4 space-y-4">
            <div>
              <InputLabel
                htmlFor="name"
                value="Name"
                className="text-gray-700 dark:text-gray-300"
              />
              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                autoComplete="name"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)}
                required
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
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
                className="mt-1 block w-full rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                autoComplete="username"
                onChange={(e) => setData('email', e.target.value)}
                required
              />
              <InputError message={errors.email} className="mt-2" />
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
                className="mt-1 block w-full rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                autoComplete="new-password"
                onChange={(e) => setData('password', e.target.value)}
                required
              />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div>
              <InputLabel
                htmlFor="password_confirmation"
                value="Confirm Password"
                className="text-gray-700 dark:text-gray-300"
              />
              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                autoComplete="new-password"
                onChange={(e) =>
                  setData('password_confirmation', e.target.value)
                }
                required
              />
              <InputError
                message={errors.password_confirmation}
                className="mt-2"
              />
            </div>
            <div>
              <PrimaryButton
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                disabled={processing}
              >
                Register
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
