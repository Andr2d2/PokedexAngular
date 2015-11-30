appPkmn.filter("pascalcase", function() {
  return function(input) {
    var nomeCompleto = input.split(/[\s-]/); // Separa por espaço e hífen
    var nomeFormatado = nomeCompleto.map(function(nome) {
      
      // Verifica os conectivos, para não formata-los
      //if (/(da|de|dos|do|-|_)/.test(nome)) return nome;
      
      // Retorna o nome com primeira letra maiúscula
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    return nomeFormatado.join(" ");
  };
});

appPkmn.filter("pkmnId", function(){
  return function(input){
    var array = input.split("/");
    var id = array[array.length -2];
    return id;
  };
});

appPkmn.filter("formatNumber", function(){
  return function(input){
    var number = "000" + input;
    return number.substr(number.length - 3);
  };
});