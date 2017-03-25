<?php
function save_values_to_db($row,$column,$conn)
{
	
	for ($i=0; $i<$row ; $i++) { 
		for ($j=0; $j<$column ; $j++) {	
			$val[$i][$j]=$_POST["$i,$j"];
			}
			$fid=$val[$i][0];
			$name=$val[$i][1];
			$age=$val[$i][2];
			$bloodgroup=$val[$i][3];
			$gender=$val[$i][4];
			$maritalstatus=$val[$i][5];
			$education=$val[$i][6];
			$works=$val[$i][7];
			$address=$val[$i][8];
			$sql=mysqli_query($conn,"INSERT INTO datalog(fid,name,age,bloodgroup,gender,maritalstatus,education,works,address) VALUES ('$fid','$name','$age','$bloodgroup','$gender','$maritalstatus','$education','$works','$address')");
	}
	print_r(array_values($val[0]));
}
$servername = "localhost";
$username = "root";
$password = "";
$database="datacollection";
// Create connection
$conn =mysqli_connect($servername, $username, $password,$database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "Connected successfully";

save_values_to_db($_POST['rows'],$_POST['cols'],$conn);

?>
