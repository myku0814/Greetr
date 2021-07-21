var g = G$('Myku', 'mooncake');

console.log(g);

g.greet().setLang('es').greet(true).log();

$('#login').click(function() {
    var loginGrtr = G$('Myku', 'mooncake');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});