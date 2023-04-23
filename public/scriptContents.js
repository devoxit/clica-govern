//api/v1/latest in reading news


const titleDOM = document.querySelector('.title');
const urlDOM = document.querySelector('.url');
const contentDOM = document.querySelector('.content');
const params = window.location.search;
const id = new URLSearchParams(params).get("id");

const showContent = async() => {
    try{
const { data: contents } = await axios.get(`/api/v1/latest/contents/${id}`)
const {Title,URL,Content} = contents
    titleDOM.textContent = Title
    // urlDOM.textContent = URL;
    contentDOM.textContent = Content;

    const aTag = document.createElement('a');
    aTag.href = URL;
    aTag.textContent = URL;
    urlDOM.innerHTML = '';
    urlDOM.appendChild(aTag);

    }catch(err){
        console.log(err)
    }
    }
showContent()
