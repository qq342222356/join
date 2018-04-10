
//    表单验证
      var cont=false;

function reg_name(val) {
reg = /^[\u4E00-\u9FA5]{2,4}$/;

if(!reg.test(val)){

    $("#t").html( '请输入正确的姓名！');

}else{

     $("#t").html( '');

 }
}
function reg_danwei(val) {
reg = /^[\u4E00-\u9FA5]{5,20}$/;

if(!reg.test(val)){

    $("#w").html('请输入正确单位名称！');

}else{

     $("#w").html('');

 }
}
function reg_job(val) {
reg = /^[\u4E00-\u9FA5]{2,10}$/;

if(!reg.test(val)){

    $("#q").html('请输入正确职位！');

}else{

     $("#q").html('');

 }
}
function reg_phone(val) {
reg = /^([1]{1})+([3]|[5]|[7]|[8])\d{9}$/;

if(!reg.test(val)){

    $("#e").html('请输入正确手机号码！');

}else{

     $("#e").html('');

 }
}
function reg_email(val) {
reg =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(!reg.test(val)){

    $("#r").html('请输入正确邮箱！');

}else{

     $("#r").html('');

 }
}
function reg_vxin(val) {
reg =  /^[0-9]{11}|[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;

if(!reg.test(val)){

    $("#y").html('请输入正确微信号！');

}else{

     $("#y").html('');


 }
}
//    提交表单
$("#but").click(function() {
$.ajax({
url: "",//要请求的服务器url
//这是一个对象，表示请求的参数，两个参数：method=ajax&val=xxx，服务器可以通过request.getParameter()来获取
//data:{method:"ajaxTest",val:value},
data: {
    name: $("#name").val(),
sex: $("#man").val()?$("#man").val():$("#woman").val(),
danwei: $("#danwei").val(),
job: $("#job").val(),
phone: $("#phone").val(),
email: $("#email").val(),
vxin: $("#vxin").val()

},
async: true,   //是否为异步请求
                 cache: false,  //是否缓存结果
                                  type: "POST", //请求方式为POST
                                                  dataType: "json",   //服务器返回的数据是什么类型
                                                                        success: function(result){  //这个方法会在服务器执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型)
if(result){
alert("true");
}else{
 alert("false");
 }
}
});
});

//    获取性别
    $("#man").click(function () {
    $("#woman").html("");
    $("#man").html("男");
    console.log($("#man").text());
    console.log($("#woman").text());
})
$("#woman").click(function () {
    $("#man").html("");
    $("#woman").html("女");
    console.log($("#man").text());
    console.log($("#woman").text());
})