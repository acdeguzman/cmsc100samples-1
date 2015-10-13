$(document).ready(function(){
	$("#intro").hide();
	
	$("p.p1").mouseover(function(){
		$("#show_this").fadeIn();
	});

	$("p.p1").mouseout(function(){
		$("#show_this").fadeOut();
	});
	
	/*
		pwede ring ganto:
	$("p.p1").on({
		"mouseover": function(){
			$("#show_this").fadeIn();
		},

		"mouseout": function(){
			$("#show_this").fadeOut();
		}
	});
	
	*/
	$(".textbox").keyup(function(){
		a = Number($("#a").val());
		b = Number($("#b").val());
		sum = a+b;

		$("#sum").val(sum);
	});
	/*
	$("#newContent").load("index.html", function(resp){
		//alert("Content updated!");
	});
	*/
	$("button[name='get_Students']").click(function(){
		/*$.get("http://localhost:5000/degree-programs/1", function(resp){
			console.log(resp);
		});*/
		$.post("http://localhost:5000/degree-programs",{
			code: "BSF",
			name: "BS Forestry"
		},
		function(resp){
			console.log(resp);
		});
	});

	$("buttons[name='reverse']").click(function(){
		$("input").each(function(){
			if(this.checked=="checked"){
				$('input').prop(checked, false);
			}
			else{
				$('input').prop(checked, true);
			}
		})
	});
	
});