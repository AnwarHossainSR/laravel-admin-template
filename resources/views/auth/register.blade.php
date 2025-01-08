@extends('layouts.app')

@section('content')
<div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md mt-32 mb-16">
    <h2 class="text-2xl font-bold text-center mb-4">Create an Account</h2>

    <form method="POST" action="{{ route('register') }}">
        @csrf
        <div class="mb-4">
            <label for="name" class="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" value="{{ old('name') }}" class="w-full px-4 py-2 border rounded-md" required>
            @error('name') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" value="{{ old('email') }}" class="w-full px-4 py-2 border rounded-md" required>
            @error('email') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md" required>
            @error('password') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <div class="mb-4">
            <label for="password_confirmation" class="block text-gray-700">Confirm Password</label>
            <input type="password" id="password_confirmation" name="password_confirmation" class="w-full px-4 py-2 border rounded-md" required>
        </div>

        <div class="mb-4">
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Register</button>
        </div>
    </form>

    <p class="text-center text-sm">Already have an account? <a href="{{ route('login') }}" class="text-blue-600 hover:underline">Sign in</a></p>
</div>
@endsection