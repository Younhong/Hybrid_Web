<html>
<head>
<link href="subPage.css" rel="stylesheet" type="text/css">
<title>Members of Wild Animals Website</title>
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
    <main class="list">       
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hwdata";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT a.name, a.age, a.city, a.email, a.type, b.country from hwtable a, hwtable2 b where a.city = b.city";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<table><tr><td><b>Name</b></td><td>" . $row["name"]. 
            "</td></tr><tr><td><b>Email</b></td><td>" . $row["email"]. 
            "</td></tr><tr><td><b>Age</b></td><td>" . $row["age"]. 
            "</td></tr><tr><td><b>City</b></td><td>" . $row["city"].
            "</td></tr><tr><td><b>Country</b></td><td>" . $row["country"].
            "</td></tr><tr><td><b>Animal Type</b></td><td>" . $row["type"]. "</td></tr></table><br><br>";
        }
    } 
    else {
        echo "0 results";
    }
    $conn->close();
    ?>
    </main>
    <article>
        <img src="image/list.png"><br>
        <h3>This page shows list of people who have registered for membership on our website.</h3>
        <h3>They are willing to commnicate with each other about wild animals.</h3>
        <h3>Check for people who have interest in same animals as you.</h3>
        <h3>You can also check if that person is in same city with you and meet directly.</h3>
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