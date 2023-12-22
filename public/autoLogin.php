<?php
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Login</title>
  <link rel="icon" type="image/x-icon" href="https://cloud.edusoft.vn/favicon/icon-144x144.png" data-keep="true">
        <link rel="apple-touch-icon" href="https://cloud.edusoft.vn/favicon/icon-192x192.png" data-keep="true">
     
  <style>
    body{
      padding: 0;
      margin: 0;
    }
    #bedrive{
      height: 100vh;
       width: 100%;
       border:none;
       padding: 0;
       display: none;
    }
    #loading{
      height: 100vh;
      display: block;
    }
    #loading #onLoadingImage{
       display: inline-block;
     margin:20% 48% 0;
    }
    #loading #onLoadingImage img{
      width: 80px;

    }
    #loading > figure > figcaption .text{
      font-size: 20px;
      font-weight: bold;
      color: #3281e7;
      display: inline;
      position: relative;
    }
    #loading > figure > figcaption > div > div{
     
      display: inline;
      position: absolute;
      top: -6px;
      left: 110%;
    }
  </style>
  
</head>

<body>
<div id="loading"   >
    <figure style="height: 100%;">
      <div id="onLoadingImage">
       
       <img  src="./images/gif/onLoading.gif" alt="Loading..." >
      
      </div>

      <figcaption style="text-align: center;">
      
        <div class="text">   Đang tải dữ liệu

        <div class="icon-dot-loading"><img src="./images/gif/blue-dot-loading.gif" alt="Dot loading"></div>
        </div> 
       
    </figcaption>
    </figure>
   

  </div>
  <iframe id="bedrive" src="./login"  ></iframe>

  <script>
// Trên trang A và trang B
    document.domain = "localhost";//edusoft.vn
    var iframe = document.getElementById('bedrive');
    var onLoadingDiv= document.querySelector("#loading");
    if(getCookie("logined")===null){
     iframeLogin();
    }else{
      iframe.style.display="block"
          onLoadingDiv.style.display="none";
    }

    
    function iframeLogin(){
      var user={
               email:"<?php echo $email; ?>",
               password:"<?php echo $password; ?>"
    }

    
      // Chờ cho iframe hoàn thành tải trang
       iframe.onload = function() {
    
      if (iframe.src.includes("login")) {
        
        // Lấy tham chiếu đến contentWindow của iframe
        var iframeWindow = iframe.contentWindow;
        var iframeDocument = iframeWindow.document
        // Chèn đoạn script vào tài liệu của iframe
         // Chèn thông tin người dùng .
        var scriptUser = iframeDocument.createElement('script');
        scriptUser.type = 'text/javascript';
       
        scriptUser.innerHTML=`var user={
                              email:"${user.email}",
                              password:"${user.password}"
                               }`;
        iframeWindow.document.body.appendChild(scriptUser);
       

        // script autologin cho người dùng
        var scriptLogin = iframeDocument.createElement('script');
        scriptLogin.type = 'text/javascript';
        scriptLogin.src = "./js/autoLogin.js"
        // Thêm script vào body của tài liệu của iframe
   
        iframeWindow.document.body.appendChild(scriptLogin);
      }
  
      window.addEventListener('message', (event) => {
        
      
      if (event.data === 'login success' ) {
        
       
        iframe.src = './drive';
        iframe.onload=()=>{
  
          iframe.style.display="block"
          onLoadingDiv.style.display="none";
          setCookie("logined",true,30);
        }
      }
    });
     
    };
    }
    function setCookie(name, value, daysToExpire) {
    var expires = "";
    
    if (daysToExpire) {
        var date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    
    return null;
}

    
    // document.addEventListener('DOMContentLoaded',()=>{
    //   if(iframe.src.includes("drive")){
    //     iframe.style.display="block"
    //       onLoadingDiv.style.display="none";
    //   }
    // })
 




  </script>
</body>

</html>