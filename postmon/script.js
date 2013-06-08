var postmonSearch = {
  consultaCep: function(){
    var cep_digitado = $("#cep").val();
    
    $("#cep_encontrado").html("Buscando...");
    $.get("http://api.postmon.com.br/v1/cep/" + cep_digitado, function(data){
      var cep = "";
      cep = "<p>Logradouro: " + data.logradouro + "</p>";
      cep += "<p>Bairro: " + data.bairro + "</p>";
      cep += "<p>Cidade: " + data.cidade + "</p>";
      $("#cep_encontrado").html(cep);
    });
  }
}

$("#btn_consultar").click(postmonSearch.consultaCep);
