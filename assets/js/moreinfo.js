"use strict";

let MoreInfoWrapper = $('#moreInfo');
let idMoreInfo = JSON.parse(localStorage.getItem('moreInfoId'));
console.log(idMoreInfo);








function renderData(data){
    console.log(data.volumeInfo);
    let str = "";
    if(data.volumeInfo.description.length > 300){
        str = data.volumeInfo.description.slice(0, 300) + '...';
    }else{
        str = data.volumeInfo.description;
    }
    MoreInfoWrapper.innerHTML = `
        <div class="info-left">
            <img src="${data.volumeInfo.imageLinks.thumbnail}" alt="IMG">
        </div>
        <div class="info-right">
            <h2>${data.volumeInfo.title}</h2>
            <p><strong>Subtitle:</strong> ${data.volumeInfo.subtitle}</p>
            <p><strong>Year:</strong> ${data.volumeInfo.publishedDate}</p>
            <p><strong>Publisher:</strong> ${data.volumeInfo.publisher}</p>
            <p><strong>Authors:</strong> ${data.volumeInfo.authors}</p>
            <p><strong>Categories:</strong> ${data.volumeInfo.categories}</p>
            <p><strong>Discreption:</strong> ${str}</p>
            <p><strong>Language:</strong> ${data.volumeInfo.language}</p>
            <p><strong>rating Count:</strong> ${data.volumeInfo.ratingsCount}</p>
            <a href="${data.volumeInfo.previewLink}" target="_blank">Read book click here -></a>
        </div>
    `
};



async function GetData(url){
    const response = await fetch(url);
    const data = await response.json();
    renderData(data.items[0]);
}


function getSearchBook(value){
    let url = `https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=0&maxResults=20`
    GetData(url);
}

getSearchBook(idMoreInfo.info);

