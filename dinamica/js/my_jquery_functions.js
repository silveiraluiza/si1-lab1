$(document).ready(function(){
    $("#submeter1").click(function(){
        var assunto=$("#aprender").val();
        $("#aprender").val("");
        if (assunto != "" ){
             $("#lista-aprender").append("<font size='5'><li><p>"+assunto+
                "</p></li></font>"+'<button id="ex" class="btn btn-small btn-danger">Remover</button>'+
                "    "+'<button id="mov" class="btn btn-small btn-warning">Mover!</button>');
        }
    });
    $("#submeter2").click(function(){
        var assunto1=$("#aprendi").val();
        $("#aprendi").val("");
        if (assunto1 != ""){
             $("#lista-aprendi").append("<font size='5'><li>"+assunto1+
                "</li></font>"+'<button id="ex" class="btn btn-small btn-danger">Remover</button>'+
                "    "+'<button id="mov1" class="btn btn-small btn-warning">Mover!</button>');
        }
    });
     $(document).on("click", "#mov", function(){
      var temp =$(this).parent().text();
      $("#lista-aprendi").append("<font size='5'><li><p>"+temp+
                "</p></li></font>"+'<button id="ex" class="btn btn-small btn-danger">Remover</button>'+
                "    "+'<button id="mov" class="btn btn-small btn-warning">Mover!</button>');
      $(this).parent().remove();

     });
     $(document).on("click", "#ex", function(){
            $(this).parent().remove();
            $(this).remove();
        });
    $(document).on("click", "#mov1", function(){
      var temp =$(this).parent().text();
      $("#lista-aprender").append("<font size='5'><li><p>"+temp+
                "</p></li></font>"+'<button id="ex" class="btn btn-small btn-danger">Remover</button>'+
                "    "+'<button id="mov" class="btn btn-small btn-warning">Mover!</button>');
      $(this).parent().remove();
  });
 });