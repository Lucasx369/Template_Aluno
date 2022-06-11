api = 'http://localhost:1324/'


$(document).ready(() => {
    users.list();
});


var users = {
    
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                data.forEach(element => {
                    tx += '<h1 id="nome">'+element.nome+'</h1>';
                });
                $('#nome').html(tx);
            }
        });
        
    }
    
};


$(document).ready(function(){
    $("#ocultar").click(function(){
      $("#valorIdade").hide();
    });
    $("#ver").click(function(){
      $("#valorIdade").show();
    });
  });



