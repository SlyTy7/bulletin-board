$(document).ready(function(){

	//submit button
	var submit = $("#submit");
	//delete button
	var remove = $("#remove");


	// add new comment to page once submit button is pressed
	submit.click(function(){
		var name = $("#name").val();
		var comment = $("#comment").val();
		var output = `
			<div class='jumbotron jumbotron-comment'>
				<h3 class='card-title comment-name'>${name}</h3>
				<hr>
				<text class='card-text comment-comment'>
					<i class="fa fa-quote-left text-primary"></i>
						${comment}
					<i class="fa fa-quote-right text-primary"></i>
				</text>
				<button class="btn btn-danger" id="remove">Delete Comment</button>
			<div>
		`;

		//send error if form is left empty
		if(name == ""){
			return $(".error").text("You didn't enter your name!");
		}else if(comment == ""){
			return $(".error").text("You didn't enter a comment!");
		}else if(name != "" && comment != ""){
			//remove error if fixed
			$(".error").text("");
		}

		//adds new comment to end of comment chain
		$(".comments").append(output);

		//makes every other comment background-color change
		commentColor();

		//resets name and comment to blank after successful submit
		$("#name").val("");
		$("#comment").val("");
	});




	//runs function once 'delete button' is clicked
	$(".comments").on('click', '#remove', function() {
		//removes current comment
		this.parentElement.remove();
		
		//reset comment coloring after delete
		commentColor();
	});

});

//Alternates colors of comments
function commentColor(){
	$(".jumbotron-comment:even").css({"background-color": "#c5c7ca"});
	$(".jumbotron-comment:odd").css({"background-color": "#e9ecef"});
}