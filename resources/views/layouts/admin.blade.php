<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-gray-100">
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 h-screen bg-gray-800 text-white">
            <div class="p-4">
                <h1 class="text-2xl font-bold">Admin Panel</h1>
            </div>
            <ul>
                <li class="p-4 hover:bg-gray-700"><a href="/dashboard">Dashboard</a></li>
                <li class="p-4 hover:bg-gray-700"><a href="/users">Users</a></li>
            </ul>
        </div>

        <!-- Content -->
        <div class="flex-1 p-6">
            @yield('content')
        </div>
    </div>
</body>

</html>