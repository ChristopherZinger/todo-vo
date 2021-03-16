<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>React To-Do List</title>

    <link rel="stylesheet" href="{{asset('css/styles.css')}}">
    <script src="{{asset('js/app.js')}}" defer></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Raleway:wght@100;300;400&display=swap" rel="stylesheet">
</head>
<body class="antialiased">

    <header></header>

    <main>
        @yield('content')
    </main>

    <footer></footer>
</body>
</html>
