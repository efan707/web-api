jQuery(document).ready(function($) {
 $('#pagepiling').pagepiling({
        menu: null,
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: ['#00cccc', '#4BBFC3', '#2E93D9', '#00cccc','#0099FF','#4BBFC3','#6666FF','#9966CC','#0099FF'],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
    $("#nav ul li").click(function(event) {
        var pos=$(this).prevAll().length+1;
        $.fn.pagepiling.moveTo(pos);
    });

    /*********for search*********************/
 $(".section .content ul").hover(function() {
     $("#search ul").css({ overflow: 'visible'});
  }, function() {
     $("#search ul").css({ overflow: 'hidden'});
  });

  var actionArr=["https://www.google.com.hk",'http://www.baidu.com/s',
     'http://s.weibo.com/weibo/','http://www.zhihu.com/search',
     'http://s.taobao.com/search','http://www.amazon.cn/s/ref=nb_sb_noss_2',
     'http://zs.meituan.com/s','http://search.dangdang.com/',
     'http://zh.wikipedia.org/w/index.php','http://zhidao.baidu.com/search'];
  var keyArr=['q','wd','','q','q','field-keywords','w','key','search','word'];
   $("#search ul li").click(function(event) {
     var pos=$("#search ul li").index(this);
     $("#search .selected").text($(this).text());
     var tex=$(this).text()+"一下";
     $("#search #btn").val(tex);
     $("#sform").attr('action',function(){return actionArr[pos-1];});
     $("#sform #keyword").attr('name',function(){return keyArr[pos-1];});
     $("#search ul").css({ overflow: 'hidden'});
   });
});

