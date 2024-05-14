<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="google" content="notranslate">
        <base href="{{ $htmlBaseUri }}">

        @yield('head')

        @include('common::prerender.meta-tags')
    </head>

    <body>
        @yield('body')
    </body>
</html>
