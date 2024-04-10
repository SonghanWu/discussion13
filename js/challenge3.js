window.addEventListener("load", function() {
    // alert("hello!");
    let elements = document.querySelectorAll('figcaption');
    let caption = elements[1];
    console.log("caption");
    alert(caption.innerHTML);
});