import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('password.confirm'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Confirm Password" />
      <div className="my-20 flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white">
            Confirm Password
          </h2>
          <div className="mb-6 mt-4 text-sm text-gray-600 dark:text-gray-300">
            This is a secure area of the application. Please confirm your
            password before continuing.
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <InputLabel htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div>
              <PrimaryButton
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                disabled={processing}
              >
                Confirm
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
