/**
 * Created by Administrator on 2016/9/6.
 */
$(function(){
    $('.username').on('keyup',function(){
        var regularChina=/[\u4e00-\u9fa5]/;
        var username = $('.username').val();
        if(username.length==0){
            $('.usename_empty').text('*用户名不能为空');
            return
        }
        if(username.length<6){
            $('.usename_empty').text('*用户名长度小于6个字符');
        }else{
            $('.usename_empty').text('');
        }
        if(regularChina.test(username)){
            $('.usename_empty').text('*用户名不包括汉字');
            return
        }
    });
    $('.email').on('blur',function(){
        var regularEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
        var email = $('.email').val();
        if(!email){
            $('.email_empty').text('*邮箱不能为空');
            return
        };
        if(!regularEmail.test(email)){
            $('.email_empty').text('*你的邮箱格式格式不正确');
        };
        if(regularEmail.test(email)){
            $('.email_empty').text('');
        };
        $.ajax({
            url:'../userinfo.json',
            type:'get',
            success:function(msg){
                $.each(msg,function(i,n){
                    if(n.email==email){
                        console.log(n.email)
                        $('.email_empty').text('该邮箱已注册')
                        $('.email').css('background','#faffbd')
                    }
                })
            }})
    });

    $('.pass').on('blur',function(){
        var pass = $('.pass').val();
        var pass__empty= /^[a-zA-Z][A-Za-z0-9_]{5,19}$/;
        if(!pass){
            $('.pass_empty').text('*密码不能为空');
            return
        }
        if(!pass__empty.test(pass)){
            $('.pass_empty').text('*密码格式为：6-20位数字，字母组成');
        }
        if(pass__empty.test(pass)){
            $('.pass_empty').text('');
        }
    })
})
