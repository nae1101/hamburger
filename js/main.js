// SPとTabのとき
// Menuをクリックしたら画面が暗くなり右からサイドバーがスライドしてくる。
// バツ印を押したらサイドバーが右にスライドして画面が明るくなる。

jQuery(function($){

    //Menuをクリックしたら
    $(".js-sidebar-menu").on("click",function(){
        //画面が暗くなる
        $(".l-body__overlay").toggleClass("is-open");
        //bodyが固定される
        $("#body").css("position","fixed");
        //右からサイドバーがスライドしてくる
        $(".l-sidebar").toggleClass("is-open");
    })
    //バツをクリックしたら
    $(".js-icon__close").on("click",function(){
        //サイドバーが戻り
        $(".l-body__overlay").removeClass("is-open");
        //bodyの固定がなくなる
        $("#body").css("position","");
        //画面が明るくなる
        $(".l-sidebar").removeClass("is-open");

    })
    // 画面幅が変更されたときに実行させたい処理内容
    $(window).resize(function(){
        $(".l-body__overlay").removeClass("is-open");
        $("#body").css("position","");
        $(".l-sidebar").removeClass("is-open");

    })
    
})
