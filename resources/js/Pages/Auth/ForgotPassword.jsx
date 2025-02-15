import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />
      <div className="my-20 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">
            Forgot Password
          </h2>
          <div className="mb-6 mt-4 text-sm text-gray-600 dark:text-gray-300">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </div>
          {status && (
            <div className="mb-4 text-sm font-medium text-green-600">
              {status}
            </div>
          )}
          <form onSubmit={submit} className="space-y-4">
            <div>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
              <PrimaryButton
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                disabled={processing}
              >
                Email Password Reset Link
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
