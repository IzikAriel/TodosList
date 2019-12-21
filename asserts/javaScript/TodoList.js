//check off specific todoas By clicked
$("ul").on("click","li",function(){
	$(this).toggleClass("selected");

});
//click on X to delete Todo

$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13 && $(this).val()!=="")
	{
		var newTodo = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newTodo + "</li>");
		$(this).val("");
	}
	
});
$(".fa-plus").click(function(){
 $("input[type='text']").fadeToggle(500);
});
