/**
 * Created by Administrator on 2016/9/9.
 */
(function () {
    $(function () {
        var ulLeft = $('.home_banner > ul').offset().left; // 获取ul当前偏移量的位置
        var liWidth = $('.banner1').width(); //  获取一张图片的宽度
        var ulLis = $('.home_banner > ul').children();

        //动态生成圆点
        var olisHtml = '';
        for (var i = 0; i < ulLis.length; i++) {
            olisHtml += '<li></li>'
        }
        $('.dot').html(olisHtml);

        //初始化时默认的圆点颜色
        $('.dot').children().eq(0).attr('class', 'cyan');

        // 获取ol里面的li 给每一个li绑定一个鼠标划上事件
        var olLis = $('.dot').children();
        $.each(olLis, function (i, e) {
            $(olLis[i]).on('mouseenter', function () {
                $('.home_banner > ul').animate({'left': -100 * i + '%'});
                $(olLis[i]).attr('class', 'cyan').siblings().removeAttr('class');
            });
        });

        // 启动自动轮播
        var page = 0;
        var timerId
        timerId = setInterval(startTimer, 2000);

        var bannerUl = $('.home_banner > ul');
        var cloneUl = ulLis.eq(0).clone();
        // 追加到ul节点
        bannerUl.append(cloneUl);

        function startTimer() {
            if (page >= ulLis.length) {
                $(olLis[0]).attr('class', 'cyan').siblings().removeAttr('class');
                $('.home_banner > ul')[0].style = 'left:0';
                page = 1;
            } else {
                page++;
            }
            $('.home_banner > ul').animate({'left': -100 * page + '%'});
            $(olLis[page]).attr('class', 'cyan').siblings().removeAttr('class');
            if (page >= ulLis.length) {
                $(olLis[0]).attr('class', 'cyan').siblings().removeAttr('class');
            }
        };


        //  鼠标划上tail 关闭定时器
        $('.tail').on('mouseenter', function () {
            clearInterval(timerId);
        });

        //  鼠标离开tail 关闭定时器
        $('.tail').on('mouseleave', function () {
            timerId = setInterval(startTimer, 2000);
        });

    });
})();