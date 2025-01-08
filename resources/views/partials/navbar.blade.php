<nav class="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="{{ route('home') }}" class="text-3xl font-bold text-blue-600">MyApp</a>
        <div class="space-x-6">
            <a href="{{ route('home') }}" class="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#features" class="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="{{ route('login') }}" class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">Sign In</a>
            <a href="{{ route('register') }}" class="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition">Register</a>
        </div>
    </div>
</nav>