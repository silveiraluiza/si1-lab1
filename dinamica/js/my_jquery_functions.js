$(document).ready(function(){
    $("#submeter1").click(function(){
    	var assunto=$("#aprender").val();
    	$("#aprender").val("");
        $("#lista-aprender").append("<font size='5'><li>"+assunto+"</li></font>");
        var b= $('<input type="button" class="btn btn-default btn-sm"  id:"ex" value="excluir"/>');
         $("#lista-aprender").append(b);
        var b1= $('<input type="button" class="btn btn-default btn-sm"  id:"mov" value="mover"/>');
         $("#lista-aprender").append(b1);
    });
    $("#submeter2").click(function(){
    	var assunto1=$("#aprendi").val();
    	$("#aprendi").val("");
        $("#lista-aprendi").append("<font size='5'><li>"+assunto1+"</li></font>");
        var b2= $('<input type="button" class="btn btn-default btn-sm"  id:"ex" value="excluir"/>');
         $("#lista-aprendi").append(b);
        var b3= $('<input type="button" class="btn btn-default btn-sm"  id:"mov" value="mover"/>');
         $("#lista-aprendi").append(b1);
    });
    $("#ex").click(function(){
    	$("#lista-aprender").remove();
    });
});