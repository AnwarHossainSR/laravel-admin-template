<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Welcome to MyApp')</title>
    @vite('resources/css/app.css')
    <style>
        body {
            background: linear-gradient(135deg, #f3f4f6, #e2e8f0);
        }
    </style>
</head>

<body class="font-sans text-gray-800">
    <!-- Navbar -->
    @include('partials.navbar')

    <!-- Main Content -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    @include('partials.footer')
</body>

</html>