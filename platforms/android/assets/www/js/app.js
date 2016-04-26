/**
 * Created by Joao on 25/04/2016.
 */
$('.collection-item').on('click', function () {

    var $badge = $('.badge',this);
    if ($badge.length == 0) {
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }
    $badge.text(parseInt($badge.text()) + 1);
});

$('.modal-trigger').leanModal({
    ready: function() {
        console.log('Ready');
        //alert('Ready');
    }
});

$('.collection').on('click', '.badge', function () {
    $(this).remove();
    Materialize.toast('Item removido', 2000);
    return false;
});

$('#confirmar').on('click', function () {
    var texto = '';

    $('.badge').parent().each(function() {
        var produto = this.firstChild.textContent;
        var quantidade = this.lastChild.textContent;
        texto += produto + ': ' + quantidade + ', ';
    });
    $('#resumo').text(texto);
});

$('.acao-limpar').on('click', function () {
   $('#numero-mesa').val('');
   $('.badge').remove();
});

$('.scan-qrcode').click(function(){
    cordova.plugins.barcodeScanner.scan(function(resultado){
        if (resultado.text){
            Materialize.toast('Mesa' + resultado.text, 2000);
            $('#numero-mesa').val(resultado.text);
        }
    },
        function(erro) {
            Materialize.toast('Erro ' + erro, 2000, 'red-text');
        });
});
