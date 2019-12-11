<html>
<head>
    <title>Removed</title>
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
    <main class="delete">
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hwdata";

    $name = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // sql to delete a record
    $sql = "DELETE FROM hwtable WHERE email='".$_POST["email"]."'";

    if ($conn->query($sql) === TRUE) {
        echo $_POST["email"]. " has been successfully de-registered from our membership.";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

    echo "<br>";
    echo "Good bye ". $_POST["email"];

    $conn->close();
    ?>
    </main>
    <article class="delete">
        <img src="image/bye.jpg"><br>
        <h3>Your name has been removed from membership list.</h3>
        <h3>Thank you for using our website and joining membership so far.</h3>
        <h6>If you want a community to talk about wild animals, you can register on this website again at any times.</h6>
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