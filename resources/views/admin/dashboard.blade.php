@extends('layouts.admin')

@section('content')
<h2 class="text-xl font-bold mb-4">Dashboard</h2>
<div class="grid grid-cols-3 gap-4">
    <div class="p-4 bg-white shadow rounded">
        <h3 class="font-semibold">Users</h3>
        <p class="text-gray-600">100</p>
    </div>
    <div class="p-4 bg-white shadow rounded">
        <h3 class="font-semibold">Sales</h3>
        <p class="text-gray-600">$500</p>
    </div>
</div>
@endsection