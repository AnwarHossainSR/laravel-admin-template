import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const Hero = () => (
  <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-20 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          আমাদের প্ল্যাটফর্মে আপনাকে স্বাগতম
        </h1>
        <p className="mt-4 text-lg text-gray-100 sm:text-xl md:text-2xl">
          সহজে এবং কার্যকরভাবে দক্ষতা অর্জন করুন
        </p>
        <div className="mt-8">
          <Link
            href="/register"
            className="rounded-md bg-white px-8 py-3 font-medium text-indigo-600 shadow-lg transition duration-300 hover:bg-gray-100"
          >
            শুরু করুন
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="bg-gray-50 py-16 dark:bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {[
          {
            title: 'সহজ ব্যবহারের সুবিধা',
            description:
              'আমাদের প্ল্যাটফর্মটি ব্যবহারকারীদের জন্য সহজ ও বোধগম্যভাবে ডিজাইন করা হয়েছে।',
            icon: '🖥️',
          },
          {
            title: 'অত্যাধুনিক বৈশিষ্ট্য',
            description:
              'আপনার দক্ষতা বৃদ্ধির জন্য উন্নত সরঞ্জাম এবং ফিচার ব্যবহার করুন।',
            icon: '🚀',
          },
          {
            title: '২৪/৭ সাপোর্ট',
            description:
              'আমাদের টিমের সহায়তা পান যেকোনো সময় এবং যেকোনো পরিস্থিতিতে।',
            icon: '📞',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="mt-6 text-center text-xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="bg-indigo-600 py-12">
    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        আজই আপনার শিক্ষা যাত্রা শুরু করুন
      </h2>
      <p className="mt-4 text-lg text-indigo-200">
        আমাদের কোর্স প্ল্যাটফর্মে দক্ষতা অর্জন এবং নতুন সুযোগ আবিষ্কার করুন।
      </p>
      <div className="mt-8">
        <Link
          href="/courses"
          className="inline-block rounded-md bg-white px-6 py-3 font-medium text-indigo-600 shadow-lg transition duration-300 hover:bg-gray-100"
        >
          কোর্স ব্রাউজ করুন
        </Link>
      </div>
    </div>
  </div>
);

export default function Welcome({ auth }) {
  return (
    <GuestLayout auth={auth}>
      <Head title="Home" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </GuestLayout>
  );
}
