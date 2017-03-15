$(".add").on("click",function(){
    var str=$('<span>微博加v<i>x</i></span>');
    $(this).before(str);
});

$(".compiler").find(".panel-body").on("click",'span i',function(){
    $(this).parent().remove()
});