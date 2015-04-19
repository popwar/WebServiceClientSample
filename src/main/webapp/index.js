$(document).ready(function() {
	var totalNumber = 0;
	
	function PageCallback(page_index, jq) {
		var $div1 = $("#div1");
		$div1.html("");
		InitTable(page_index);
	}
	
	function InitTable(page_index) {
		postData(page_index);
	}
	
	function postData(page_index){
		var resumeName = $("#resumename").val();
		$.ajax({
			url : 'https://localhost:8443/RestWebServce/rest/resumeService/resumes/' + resumeName,
			type : 'GET',
			data : 'page=' + page_index,
			contentType : 'application/json',
			async : false,
			success : function(data, textStatus) {
				if (data.success == false) {
					 $("#div1").text("failed");
					return false;
				}else {
					totalNumber = data.totalNumberOfElement;
					for (var i=0;i<data.entity.length;i++)
					{
						$("#div1").html("");
						$("#div1").append("Name: " +  data.entity[i].basicInfo.name + "<br>");
						$("#div1").append("Resume Name: " + data.entity[i].resumeName + "<br>");
					}
				}
			}
		});
	}
	
	$("#get").click(function() {
		InitTable(0);
		$("#Pagination").pagination(totalNumber,
				{
					callback : PageCallback,
					prev_text : 'Prev', 
					next_text : 'Next',
					items_per_page : 1,
					num_display_entries : 6,
					num_edge_entries : 1
		});
		/*$.ajax({
	        url: "https://localhost:8443/RestWebServce/rest/resumeService/resumes"
	    }).then(function(data) {
	    	alert(data);
	    });*/
	});
});