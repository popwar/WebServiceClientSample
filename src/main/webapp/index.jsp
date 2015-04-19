<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="json2.js"></script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="jquery.pagination.js"></script>
</head>
<body>
	<h2>Resume</h2>
	<!-- <a href="https://localhost:8443/RestWebServce/rest/resumeService/resumes/insertData">insert data</a> -->
	<br>
	Resume Name: &nbsp;
	<input type="text" id="resumename" />
	<br>
	<input type="button" id="get" value="get" />
	<div id="div1"></div>
	<div id="Pagination"></div> 
</body>
</html>