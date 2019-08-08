<html>
    <head>
        <title>Demo Site</title>
    </head>
    <body>
        <h1>Compose Test</h1>
        <p>Text should appear on the line below</p>
        <?php
            $contents = file_get_contents('http://spoof-db:8080');
            $parsed_contents = json_decode($contents);

            echo "<p>Data: $parsed_contents->data</p>"
        ?>
    </body>
</html>