<?php
/* 
A domain Class to demonstrate RESTful web services
*/
Class Student {
	
	public function db_connect(){
		$con = mysqli_connect("localhost", "root", "","angular");
		return $con;
	}

	public function getAllStudents(){
		$con = $this->db_connect();
		$sql = "select * from tblemployees";
		$result = mysqli_query( $con,$sql);
		$data = array();
		$i=0;
		while($row = mysqli_fetch_assoc($result))
		{
			/*$data[$i]['id'] = $row['id'];
			$data[$i]['name'] = $row['name'];
			$data[$i]['gender'] = $row['gender'];
			$data[$i]['city'] = $row['city'];			
			$data[$i]['id'] = $row['Id'];
			$data[$i]['name'] = $row['Name'];
			$data[$i]['gender'] = $row['Gender'];
			$data[$i]['salary'] = $row['Salary']; */
			$data[$i]['id'] = $row['Id'];
				$data[$i]['name'] = $row['Name'];
				$data[$i]['gender'] = $row['Gender'];
				$data[$i]['salary'] = $row['Salary'];
			$i++;
		}
		return $data;
	} 
	
	public function getStudent($id){
		
		$i=0;
		$con = $this->db_connect();
		$sql = "select * from tblemployees where id = $id";
		$result = mysqli_query( $con, $sql);
		if(mysqli_num_rows($result)>0)
		{
			$data = array();		
			while($row = mysqli_fetch_array($result))
			{
				/*$data[$i]['id'] = $row['id'];
				$data[$i]['name'] = $row['name'];
				$data[$i]['gender'] = $row['gender'];
				$data[$i]['salary'] = $row['city'];*/
				$data['id'] = $row['Id'];
				$data['name'] = $row['Name'];
				$data['gender'] = $row['Gender'];
				$data['salary'] = $row['Salary'];
				$data['city'] = $row['city'];
				$data['country'] = $row['country'];
				$i++;
			}
			return $data;
		}else{
			return false;
		}
	}	
	
	
}
	

?>