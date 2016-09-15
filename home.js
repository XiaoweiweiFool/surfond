/**
 * Created by Administrator on 2016/9/9.
 */
(function () {
    $(function () {
        var ulLeft = $('.home_banner > ul').offset().left; // ��ȡul��ǰƫ������λ��
        var liWidth = $('.banner1').width(); //  ��ȡһ��ͼƬ�Ŀ��
        var ulLis = $('.home_banner > ul').children();

        //��̬����Բ��
        var olisHtml = '';
        for (var i = 0; i < ulLis.length; i++) {
            olisHtml += '<li></li>'
        }
        $('.dot').html(olisHtml);

        //��ʼ��ʱĬ�ϵ�Բ����ɫ
        $('.dot').children().eq(0).attr('class', 'cyan');

        // ��ȡol�����li ��ÿһ��li��һ����껮���¼�
        var olLis = $('.dot').children();
        $.each(olLis, function (i, e) {
            $(olLis[i]).on('mouseenter', function () {
                $('.home_banner > ul').animate({'left': -100 * i + '%'});
                $(olLis[i]).attr('class', 'cyan').siblings().removeAttr('class');
            });
        });

        // �����Զ��ֲ�
        var page = 0;
        var timerId
        timerId = setInterval(startTimer, 2000);

        var bannerUl = $('.home_banner > ul');
        var cloneUl = ulLis.eq(0).clone();
        // ׷�ӵ�ul�ڵ�
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


        //  ��껮��tail �رն�ʱ��
        $('.tail').on('mouseenter', function () {
            clearInterval(timerId);
        });

        //  ����뿪tail �رն�ʱ��
        $('.tail').on('mouseleave', function () {
            timerId = setInterval(startTimer, 2000);
        });

    });
})();