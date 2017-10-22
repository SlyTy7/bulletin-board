$(document).ready(function(){

	//submit button
	var submit = $("#submit");

	//delete button
	var remove = $("#remove");

	//remove button
	//var deleteComment = $("#remove");
	//console.log(remove);

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

		//send error if no name is entered
		if(name == ""){
			$(".jumbotron-header").append("<text class='error'>You didn't enter your name!</p>");
			return console.log("No Name");
		}else{
			$(".error").remove();
		}

		//send error if no comment is entered
		if(comment == ""){
			return console.log("No Comment");
		}

		//adds new comment to end of comment chain
		$(".comments").append(output);

		//makes every other comment background-color change
		commentColor();

		//resets name and comment to blank
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