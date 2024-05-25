import './App.css'; 
function App() {
  const handlechange=()=>{
    var fname=document.getElementById('fname');
    var lname=document.getElementById('lname');
    var email=document.getElementById('email');
    var message=document.getElementById('textarea');
    var checkbox=document.getElementById('terms');
    var radio1=document.getElementById('gender');
    var radio2=document.getElementById('support');
    var success=document.getElementById('success');
    var closebtn=document.getElementById('close');
    closebtn.addEventListener('click',()=>{
      success.classList.remove('active');
      success.classList.add('hidden');
    });
    if(!radio1.checked && !radio2.checked){
      document.getElementById('err-general').classList.remove('hidden')
    }else{
      document.getElementById('err-general').classList.add('hidden')
    }
    if(!checkbox.checked){
      document.getElementById('err-checkbox').classList.remove('hidden')
    }else{
      document.getElementById('err-checkbox').classList.add('hidden')
    }    
    if(fname.value==""){
      document.getElementById('err-fname').classList.remove('hidden')
    }else{
      document.getElementById('err-fname').classList.add('hidden')
    }
    if(lname.value==""){
      document.getElementById('err-lname').classList.remove('hidden')
    }else{
      document.getElementById('err-lname').classList.add('hidden')
    }
    if(email.value==""){
      document.getElementById('err-email').classList.remove('hidden')
    }else{
      document.getElementById('err-email').classList.add('hidden')
    }
    if(message.value==""){
      document.getElementById('err-message').classList.remove('hidden')
    }else{
      document.getElementById('err-message').classList.add('hidden')
    }
  }
  const handleSubmit=(e)=>{
    var fname=document.getElementById('fname');
    var lname=document.getElementById('lname');
    var email=document.getElementById('email');
    var message=document.getElementById('textarea');
    var checkbox=document.getElementById('terms');
    var success=document.getElementById('success');
    if(fname.value!=="" && lname.value!=="" && email.value!=="" && message.value!=="" && checkbox.checked){
      success.classList.remove('hidden');
      success.classList.add('active');
    }else{
      success.classList.remove('active');
      success.classList.add('hidden');
    }
   
    handlechange();
    e.preventDefault();
    
  }
 return (
  
<>
  <form onSubmit={handleSubmit}>
    <h1>Contact us</h1>
    <div className='Grid'>
      <div>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="fname" onChange={handlechange}/>
      <span id="err-fname" className='hidden'>This field is required</span>
      </div>
      <div>
      <label for="lname">Last Name</label>
 <input type="text" id="lname" name="lname" onChange={handlechange}/>
 <span id="err-lname" className='hidden'>This field is required</span>
      </div>
    </div>
    <div className='email'>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" onChange={handlechange}/>
    <span id="err-email" className='hidden'>Please enter a valid email address</span>
    </div>
    <label>Query Type</label>
  <div className='Grid'>
    <div className="radio">
      <input type="radio" id="gender" name="query" onChange={handlechange} />
      <label for="gender">General Enquiry</label>
      </div>
    <div className="radio">
      <input type="radio" id="support" name="query" onChange={handlechange}/>
      <label for="support">Support Request</label>
    </div>
    <span id="err-general" className="hidden">please select a query type</span>
</div>
<div className='message'>
<label> Message</label>
<textarea id='textarea' name="message" onChange={handlechange}/>
<span id="err-message" className='hidden'>This field is required</span>
</div>

<div className='flex'>
  <input type='checkbox' id='terms' name="term" onChange={handlechange}/>
  <label for='terms'>I consent to being cotacted by the team</label>
</div>
<span id="err-checkbox" className='hidden'>To submit this form, please consent to being contacted</span>
<button>Submit</button>
  </form>
  <div className='info hidden'  id='success'>
  <div className='success-tittle'>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/></svg>
  <b>Message Sent!</b>
  </div>
  <p>Thanks for completing the form. We'll be in touch soon!</p>
  <button id="close">X</button>
  </div>
    </>
);
}

export default App;
