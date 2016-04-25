/**
 * Created by Joao on 25/04/2016.
 */
$('.collection-item').on('click', function () {

    var $badge = $('.badge',this);
    if ($badge.length == 0) {
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }
    $badge.text(parseInt($badge.text()) + 1)
});

$('.modal-triger').leanModal();

/*$(".submit").click(function () {
 $(this).closest("form").submit();
 });*/

$('.collection').on('click', '.badge', function () {
    $(this).remove();
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