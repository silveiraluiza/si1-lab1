$(document).ready(function(){
    $("#submeter1").click(function(){
    	var assunto=$("#aprender").val();
    	$("#aprender").val("");
        $("#lista-aprender li:first").append("<li>"+assunto+"</li>");
    });
    $
    $("#submeter2").click(function(){
    	var assunto1=$("#aprendi").val();
    	$("#aprendi").val("");
        $("#lista-aprendi li:first").append("<li>"+assunto1+"</li>");
    });
});