@extends('layouts.admin')

@section('content')
<div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold">Users</h2>
    <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add User
    </a>
</div>

<div class="bg-white shadow rounded overflow-x-auto">
    <table class="table-auto w-full">
        <thead class="bg-gray-200">
            <tr>
                <th class="px-4 py-2 text-left text-gray-600">#</th>
                <th class="px-4 py-2 text-left text-gray-600">Name</th>
                <th class="px-4 py-2 text-left text-gray-600">Email</th>
                <th class="px-4 py-2 text-left text-gray-600">Role</th>
                <th class="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
            <tr class="border-b hover:bg-gray-100">
                <td class="px-4 py-2">{{ $loop->iteration }}</td>
                <td class="px-4 py-2">{{ $user->name }}</td>
                <td class="px-4 py-2">{{ $user->email }}</td>
                <td class="px-4 py-2">{{ ucfirst($user->role) }}</td>
                <td class="px-4 py-2">
                    <div class="flex items-center space-x-2">
                        <a href="#" class="text-blue-500 hover:underline">Edit</a>
                        <form action="#" method="POST" class="inline-block">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="text-red-500 hover:underline">
                                Delete
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>

<div class="mt-4">
    {{ $users->links() }}
</div>
@endsection