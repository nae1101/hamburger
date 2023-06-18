// SPとTabのとき
// Menuをクリックしたら画面が暗くなり右からサイドバーがスライドしてくる。
// バツ印を押したらサイドバーが右にスライドして画面が明るくなる。

jQuery(function($){
    alert('テスト');

    //Menuをクリックしたら
    $(".js-sidebar-menu").on("click",function(){
        //画面が暗くなる
        $(".l-body__overlay").fadeIn(500).toggleClass("is-open");
        //右からサイドバーがスライドしてくる
        $(".l-sidebar").toggleClass("is-open");
    })
    
})
