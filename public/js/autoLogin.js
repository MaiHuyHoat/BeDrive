function login(user){
  
    fetch('./auth/login',{
        method:'post',
        headers:{
            'accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            remember: true,
            email: user.email,
            password: user.password
        })
    }).then(res=>{
        if(res.status==200){
          
            var currentDomain = window.location.hostname;
            window.parent.postMessage('login success',`http://${currentDomain}/Bedrive/autoLogin.php`)
        }
    }).catch(err=>{
        console.log(err)
    })
}

login(user)