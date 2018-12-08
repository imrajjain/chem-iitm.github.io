function postContactToGoogle() {
    var rqst=$('#rqst').val();
    
    $.ajax({
    url:"https://docs.google.com/forms/d/e/1FAIpQLSfEZXpSmTbps38ODxLMzHFPy8PZpbE87icHND6wmjSlGQDv-w/formResponse", data:{"entry_259469016":rqst},type:"POST",dataType:"xml",statusCode: {0:function() { window.location.replace("index.html");},200:function(){window.location.replace("index.html");}}
    });
    }