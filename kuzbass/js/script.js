// открытие окна входа
$('.regBtn').click(function() {
    $('.popupFade').fadeIn();
    return false;
});	

$('.popupClose').click(function() {
    $(this).parents('.popupFade').fadeOut();
    return false;
});

// проверка полей
$('.registerBtn').on('click', function(){
    $('.regForm').find('.textIn').each(function(){
        if($(this).val() != ''){
            $(this).removeClass('null');
        } else{
            $(this).addClass('null');
        }
    });

    if($('input.textIn').hasClass('null')){
        alert('Остались незаполненные поля');
    } else{
        $('.regForm').submit();
        alert('Авторизация прошла успешно');
    }
});
// массив курса
let curs = [, 71.22, 81.79, 1.1, 0.9];

// связь между селектами выбора валют
$('.valSel:eq(1)').val(1);
let val0 =+ 0;
let val1 =+ 1;
$('.valSel:eq(0)').on('change', function(){
    if($(this).val() == $('.valSel:eq(1)').val()){
        $('.valSel:eq(1)').val(val0);
        val1 = val0;
    }
    val0 =+ $(this).val();
    schet();
});
$('.valSel:eq(1)').on('change', function(){
    if($(this).val() == $('.valSel:eq(0)').val()){
        $('.valSel:eq(0)').val(val1);
        val0 = val1;
    }
    val1 =+ $(this).val();
    schet();
});
// событие на инпуте
$('.countVal:eq(0)').on('change', schet);
// функция счета
function schet(){
    let sum =+ 0;
    let count =+ $('.countVal:eq(0)').val();
    if($('.valSel:eq(0)').val() == 1 && $('.valSel:eq(1)').val() == 2){
        sum = count * curs[4];
        $('.countVal:eq(1)').val(sum.toFixed(2));
    } else if($('.valSel:eq(0)').val() == 2 && $('.valSel:eq(1)').val() == 1){
        sum = count * curs[3];
        $('.countVal:eq(1)').val(sum.toFixed(2));
    } else if($('.valSel:eq(0)').val() == 1 && $('.valSel:eq(1)').val() == 0){
        sum = count * curs[1];
        $('.countVal:eq(1)').val(sum.toFixed(2));
    } else if($('.valSel:eq(0)').val() == 2 && $('.valSel:eq(1)').val() == 0){
        sum = count * curs[2];
        $('.countVal:eq(1)').val(sum.toFixed(2));
    } else{
        sum = count / curs[$('.valSel:eq(1)').val()];
        $('.countVal:eq(1)').val(sum.toFixed(2));
    }
}