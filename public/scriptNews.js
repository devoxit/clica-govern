//api/v1/latest in reading news

const newsDOM = document.querySelector(".news");

const showNews = async() => {
try{
const {data : news} = await axios.get("api/v1/latest/")

const allNews = news.map((oneNews) =>{
const {Title,URL,_id} = oneNews

return `<div class="title">  
<div class="news-links">
    <a href="contents.html?id=${_id}" class="news-link">
    <span>${Title}</span>
    </a>
</div>
</div>`

})
.join("")
newsDOM.innerHTML = allNews
}catch(err){
console.log(err);
}
}


showNews()
