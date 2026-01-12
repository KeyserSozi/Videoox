function pickVideo(id){
  localStorage.setItem("video_id", id);
  window.location.href = "locker.html";
}

document.addEventListener("DOMContentLoaded", ()=>{
  const id = localStorage.getItem("video_id");
  const title = document.getElementById("videoTitle");
  if(title && id){
    title.innerText = "Private Video #" + id;
  }
});
