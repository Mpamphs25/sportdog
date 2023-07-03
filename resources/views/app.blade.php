<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@200;400;600&display=swap" rel="stylesheet">
    <!-- <link rel="stylesheet" href="app.css"/> -->
    <!-- <link href="/dist/output.css" rel="stylesheet"> -->
    <script src="https://cdn.tailwindcss.com"></script>
    @viteReactRefresh
    @routes
@vite('resources/js/app.jsx')
    
    @inertiaHead
  </head>
  <body style="font-family: Fira Sans Extra Condensed">
    @inertia
    <div id="app"></div>
  </body>
</html>