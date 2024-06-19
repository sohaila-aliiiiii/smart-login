
var button=document.querySelector('button')
 var Name=document.getElementById('Name')
 var email=document.getElementById('email')
 var pass=document.getElementById('pass')
 var massage=document.getElementById('massage')
 var alertname=document.querySelector('.alertname')
 var alertemail=document.querySelector('.alertemail')
 var regulername=/^[a-z]{3,}$/i
 
Name?.addEventListener('keyup',function(){
    if(regulername.test(Name.value))
        {
          alertname.classList.replace('d-block', 'd-none')

        }
    else
    {
       alertname.classList.replace('d-none', 'd-block')

    }
})
email?.addEventListener('keyup',function(){
    if(reguleremail.test(email.value))
        {
          alertemail.classList.replace('d-block', 'd-none')

        }
    else
    {
       alertemail.classList.replace('d-none', 'd-block')

    }
})





 var users=[];
 if(localStorage.getItem('userinfo') !=null)
    {
users=JSON.parse(localStorage.getItem('userinfo'))
    
    }
     
 function signup()
{
   
    if(Name.value==''||email.value==''||pass.value=='')
        {
            massage.innerHTML=` <p class="text-danger my-2 ">All elementt are requird</p>`

        }
        else
        {
            for(var i=0; i<users.length;i++)
                {
                    if(users[i].email.toLowerCase()==email.value.toLowerCase())
                        {
                            massage.innerHTML=` <p class="text-danger my-2 ">email already exist</p>`
                              return false;
                        }
                }
            add()
           massage.innerHTML=`<p class="text-success my-2 ">success</p>`
        }
       
}
    function add()
    {            

    var user={
        Name:Name.value,
        email:email.value,
        pass:pass.value
    }
users.push(user)
    localStorage.setItem("userinfo",JSON.stringify(users))  
    location.href='./index.html'
}
button?.addEventListener('click',function()
{
    signup()
})



////////////////////////////////////////

var signinemail=document.getElementById('email-in')
var signinpass=document.getElementById('pass-in')
var logbutton=document.getElementById('log')
var massage2=document.getElementById('massage2')
var alert=document.querySelector('.alert')
var reguleremail=/^[a-z]{3,}.@(yahoo||gmail).com$/i
var regulerpass=/^.{8}/
signinemail?.addEventListener('keyup',function(){
    if(reguleremail.test(signinemail.value))
        {
          alert.classList.replace('d-block', 'd-none')

        }
    else
    {
       alert.classList.replace('d-none', 'd-block')

    }
})

 function signin()
 {
for( var i=0;i<users.length;i++)
    {
        if(signinemail.value.toLowerCase()==users[i].email.toLowerCase() && signinpass.value.toLowerCase()==users[i].pass.toLowerCase())
            {
                massage2.innerHTML=` <p class="text-danger my-2 ">success</p>`
          
            localStorage.setItem("username",JSON.stringify(users[i].Name))  
            location.href='./home.html'
            return
            }

    }

    if(signinemail.value==''||signinpass.value=='')
        {
            massage2.innerHTML=` <p class="text-danger my-2 ">All elementt are requird</p>`

        }
        else
        {
            massage2.innerHTML=` <p class="text-danger my-2 ">incorrect email or password</p>`

        }
 }
 logbutton?.addEventListener('click',function(){
    signin()
 })

 /////////////////////////////////////////////////////


 var homepage=document.getElementById('home')
 var nameloge=JSON.parse( localStorage.getItem('username'))
 homepage.innerHTML=`<h1>welcome ${nameloge}</h1>`