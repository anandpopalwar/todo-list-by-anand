var tasks = []
let no = 0
  
function submit(){
  var discription = document.getElementById('discription').value;
  
  var task = {
    userDisc  : discription,
  };

  var alertContainer = document.getElementById('alert');
  var  alertMsg = document.getElementById('alertMsg');
  
  
  if(discription.length>2){
    no = no +1
    tasks.push(task);
    console.log(task,no);
    alertContainer.classList.remove('d-none')
    alertContainer.classList.remove('alert-danger')
    alertContainer.classList.add('alert-success')
    alertMsg.innerHTML='task added successfully✅!!'


    // var yourtasks= document.getElementById('yourtasks')
    // var task_details=document.getElementById('task_details')
    // tasks.map((task)=>{
    //     yourtasks.innerHTML="all tasks shown below"
    //     task_details=document.createElement('div')
    //     div.innerHTML=userDisc.discription

        
    // })


    let container = document.getElementById('userContainer');
    container.innerHTML=''
    tasks.map((task)=>{
      let div = document.createElement('div');
      div.classList.add('user-card');
      let task_disc = document.createElement('h5');
      // let email = document.createElement('p');
      task_disc.innerHTML=task.discription;
      // email.innerHTML = user.email;
      container.appendChild(div)
      div.appendChild(task_disc);
      // div.appendChild(email)
    })




    setTimeout(()=>{
      alertContainer.classList.add('d-none')
  },1500)
  }
 else{
    alertContainer.classList.remove('d-none')
    alertContainer.classList.remove('alert-success')
    alertContainer.classList.add('alert-danger')
    alertMsg.innerHTML='task is not added 🚨!!'
   setTimeout(()=>{
    alertContainer.classList.add('d-none')
  },1700) 
   } 

  



}