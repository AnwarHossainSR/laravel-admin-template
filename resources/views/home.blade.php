@extends('layouts.app')

@section('title', 'Home - MyApp')

@section('content')
<!-- Hero Section -->
<header class="bg-cover bg-center py-32 relative" style="background-image: url('https://source.unsplash.com/1600x900/?nature,water');">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto px-6 text-center relative z-10 text-white">
        <h1 class="text-5xl font-extrabold leading-tight mb-4">Welcome to MyApp</h1>
        <p class="text-xl mb-6">A platform to simplify your daily tasks and improve productivity.</p>
        <a href="#get-started" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition">Get Started</a>
    </div>
</header>

<!-- Features Section -->
<section id="features" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-12">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Feature 1 -->
            <div class="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
                <div class="text-blue-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Real-Time Sync</h3>
                <p class="text-gray-600">Keep your data in sync across all devices seamlessly.</p>
            </div>
            <!-- Feature 2 -->
            <div class="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
                <div class="text-blue-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9l2-2-5-5-2 2 3 3H5v6h12l-3 3 2 2 5-5z" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Easy Setup</h3>
                <p class="text-gray-600">Get started with minimal setup and configuration.</p>
            </div>
            <!-- Feature 3 -->
            <div class="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
                <div class="text-blue-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10l5-5 5 5V21H7V10z" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Easy Navigation</h3>
                <p class="text-gray-600">User-friendly interface for smooth and fast navigation.</p>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section id="get-started" class="bg-blue-600 py-16 text-center text-white">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="mb-6 text-lg">Join thousands of users who are improving their productivity with MyApp!</p>
        <a href="#signin" class="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-full text-lg transition">Sign In</a>
    </div>
</section>
@endsection