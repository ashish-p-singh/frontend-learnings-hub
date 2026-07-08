     
    function card(title,views ,months){
    let html=document.querySelector('.container')
    html.innerHTML= html.innerHTML +`<div class="box">
            <div class="img">
            <div class="time">33:43</div>
        </div>
        <div class="title"><b>${title}</b>
        <div class="chann"><p>Code With Harry . ${views} views . ${months} months ago</p></div></div></div>`
        
}
card("history","10",2)