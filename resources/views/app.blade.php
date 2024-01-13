<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <!-- <script src="https://cdn.tailwindcss.com"></script> -->
    <!-- <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> -->
    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    <style>
      body {
        background-color: lightgray
      }
    </style>
  </head>
  <body>

      @inertia
      
  </body>
</html>