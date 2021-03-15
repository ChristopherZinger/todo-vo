<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>React To-Do List</title>

    <link rel="stylesheet" href="{{asset('css/styles.css')}}">
    <script src="{{asset('js/app.js')}}" defer></script>
</head>
<body class="antialiased">

    <header></header>

    <main>
        @yield('content')
    </main>

    <footer></footer>
</body>
</html>
