function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}

function createElement(tagName, className, content){
    var element = document.createElement(tagName);
    if(className){
        element.className = className;
    }
    if(content){
        element.innerHTML = content;
    }
    return element;
}