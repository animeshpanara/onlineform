<?php
function save_values_to_db($row,$column,$conn)
{
	
	for ($i=0; $i<$row ; $i++) { 
		for ($j=1; $j<$column ; $j++) {
				if(isset($_POST["$i,$j"]))	
					$val[$i][$j]=$_POST["$i,$j"];
				else
					$val[$i][$j]=0;
			}
			$fid=$i+1;
			$name=$val[$i][1];
			$dob=$val[$i][2];
			$relation=$val[$i][3];
			$bloodgroup=$val[$i][4];
			$gender=$val[$i][5];
			$maritalstatus=$val[$i][6];
			$education=$val[$i][7];
			$occupation=$val[$i][8];
			$occupationaladdress=$val[$i][9];
			$maternalsurname=$val[$i][10];
			$phone=$val[$i][11];
			$address=$val[$i][12];
			$sql=mysqli_query($conn,"INSERT INTO datalog1(fid,name,dob,relation,bloodgroup,gender,maritalstatus,education,occupation,occupationaladdress,maternalsurname,phone,address) VALUES ('$fid','$name','$dob','$relation','$bloodgroup','$gender','$maritalstatus','$education','$occupation','$occupationaladdress','$maternalsurname','$phone','$address')");
			if (!$sql) {
			echo "helooooo";
    		die('Invalid query: ' . mysql_error());
			}
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

save_values_to_db($_POST['rows'],13,$conn);

?>
