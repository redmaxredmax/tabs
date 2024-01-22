const tabs_btn2=document.querySelector(".tabs_btn2")
const tabs_btn1=document.querySelector(".tabs_btn1")
const contents=document.querySelectorAll(".content")
const users=document.querySelector(".content_space_users")
const titles=document.querySelector(".content_space_titles")
const content_users=document.querySelector(".content_users")
const content_posts=document.querySelector(".content_posts")


tabs_btn1.addEventListener(("click"),(e)=>{
    e.preventDefault()
    content_users.classList.add("active")
    content_posts.classList.remove("active")
})
tabs_btn2.addEventListener(("click"),(e)=>{
    e.preventDefault()
    content_users.classList.remove("active")
    content_posts.classList.add("active")
})

const renderUsers=(data)=>{
    users.innerHTML=data.map((item)=>`
    <div class="user__box">
    <p class="user__id">${item.id}</p>
    <p class="user__name">${item.name}</p>
    </div>
    `).join(" ")
}

const renderPosts=(data)=>{
    titles.innerHTML=data.map((item)=>`
    <div class = "all_post__box">
     <div class = "post__box user__box">
      <p class = "users__name">${item.title}</p>
     </div>

     </div>
    `).join(" ")
}

const getUsers=()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        return res.json();
    }).then((data)=>{
        renderUsers(data)
    })
}

const getPosts=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        return res.json()
    }).then((inf)=>{
        renderPosts(inf)
    })
}

getUsers()
getPosts()