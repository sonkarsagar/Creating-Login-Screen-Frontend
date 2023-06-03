const email=document.getElementById('email')
const password=document.getElementById('password')
const submit=document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    axios.get('http://127.0.0.1:3000/').then((result) => {
        for(let i of result.data){
            if(i.email==email.value){
                if(i.password==password.value){
                    alert('Successfully Logged in')
                    return
                }else{
                    alert('Wrong Credentials')
                    return
                }
            }
        }
        alert("USER DOESN'T EXIST. CREATE ACCOUNT")
    }).catch((err) => {
        console.log(err);
    });
})