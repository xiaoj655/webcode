$(function(){
    getUserInfo()
})
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        headers:{Aurhorization:localStorage.getItem('token') ||''},
        success:function(res){
            if(res.status !== 0){
                return layui.msg('获取用户信息失败')
            }
            renderAvatar(res.data)
        }
    })
}
function renderAvatar(user){
    let name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp&nbsp'+name)
}