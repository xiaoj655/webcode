$(function(){
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    $('#link_login').on('click',function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })
    let form = layui.form
    form.verify({
        pwd:[/^[\S]{6,12}$/,'密码必须6-12位,且不能出现空格'],
        repwd: function(value){
            if($('.reg-box [name=password]').val()!==value)return '两次密码不一致'

        }
    })
    
})

