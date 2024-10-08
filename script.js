var arr = [
    {dp:"https://images.unsplash.com/photo-1707119269306-f4ee0564ba29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" ,story:"https://images.unsplash.com/photo-1529367397865-4014c2fd41b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsJTIwY2FyfGVufDB8fDB8fHww"},
    {dp:"https://media.istockphoto.com/id/1024549286/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.webp?a=1&b=1&s=612x612&w=0&k=20&c=AoKqZW8qgrSdrAEjy18jY5OjrI_JwL-JXv8pexON_e4=",story:"https://images.unsplash.com/photo-1675062521103-2163d664643d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1674824835422-1447f5901086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphcGFufGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1669750817526-6bbdb0c20bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1664874602639-977e8c682917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1663099908294-e235675ca558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1692862419231-04470103dc7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmJpZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://media.istockphoto.com/id/1693546401/photo/full-length-photo-of-cheerful-pretty-girl-dressed-sexy-outfit-driving-moped-delivering.webp?a=1&b=1&s=612x612&w=0&k=20&c=nGlO5XNSpQkIlVWHz5ICm4zQvcIEfIPDZ2s5AdKjiI4="},
    {dp:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnRvb258ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1515041219749-89347f83291a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"},


];
var stories = document.querySelector("#stories")
var clutter =""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}"alt="">
    </div>`
})

stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
         document.querySelector("#full-screen").style.display = "none"

    },3000)
     
   



});
