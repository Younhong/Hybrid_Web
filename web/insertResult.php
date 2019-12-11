<html>
    <head>
        <title>Registered</title>
        <link href="subPage.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <header>Lifes on Earth.
            <nav>
                <ul>
                    <li><a href="#Navigator menu 1"> Animals</a></li>
                    <li><a href="#Navigator menu 1"> Plants</a></li>
                    <li><a href="#Navigator menu 1"> More</a></li>
                    <li style="float:right"><a href="#about">About Website</a></li>
                </ul>
            </nav>
        </header>
        <main class="insert">    
        <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "hwdata";

            $name = $email = $animalName = "";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO hwtable (name, email, age, city, type) 
            VALUES('".$_POST["name"]."','".$_POST["email"]."','".$_POST["age"]."','".$_POST["city"]."','".$_POST["type"]."')";

            if ($conn->query($sql) === TRUE) {
                echo "Welcome ". $_POST["email"];
            } else;

            $sql = "INSERT INTO hwtable2 (city, country) 
            VALUES('".$_POST["city"]."', '".$_POST["country"]."' )";

            if ($conn->query($sql) === TRUE);
            else;

            echo "<h2>Check for informations you have submitted just now:</h2>";
            echo "<table><tr><td><b>Name</b></td><td>". $_POST["name"];
            echo "</td></tr><tr><td><b>Email</b></td><td>". $_POST["email"];
            echo "</td></tr><tr><td><b>Age</b></td><td>". $_POST["age"];
            echo "</td></tr><tr><td><b>City</b></td><td>". $_POST["city"];
            echo "</td></tr><tr><td><b>City</b></td><td>". $_POST["country"];
            echo "</td></tr><tr><td><b>Type</b></td><td>". $_POST["type"];
            echo "</td></tr></table>";
            $conn->close();
        ?>
        </main>
        <article class="insert">
            <img src="image/welcome.jpg"><br>
            <h3>You are now member of our website!!</h3>
            <h3>Look around this website and enjoy.</h3>
            <a href="wildLife.html">Go back to Main Page</a>
        </article>
        <footer>
            <p>Copyright &copy; 2019<br> Designed and posted by Younhong Ko, 21400022.<br>All Rights are Reserved by Younhong.<br>All content and graphics on this web site are the
            property of Younhong Corporation.</p>      
            <p>Contact information:<br>
            Location: Handong Global University, 558, Handong-ro, Heunghae-eup, Buk-gu, Pohang-si, Gyeongsangbuk-do, Republic of Korea<br>
            Phone #: 010-****-0874<br>
            Available at Weekends 3PM ~ 7PM<br>
            <a href="mailto: 21400022@handong.edu">21400022@handong.edu</a><br>
            <a href="mailto: younhong@kakao.com">younhong@kakao.com</a>
            </p>
        </footer>
    </body>
</html>