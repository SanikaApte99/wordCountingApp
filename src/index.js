let TextArea = document.getElementById("TextArea");
let words = document.getElementById("words");
let sentences = document.getElementById("sentences");
let paragraphs = document.getElementById("paragraphs");
TextArea.addEventListener("input",()=>{
   
    let text=TextArea.value.trim();
    words.textContent = text.split(/\s+/).filter((item)=> item).length;
    sentences.textContent = text.split(/[.|!|?]+/g).length-1;
    paragraphs.textContent = text.replace(/\n$/gm, '').split(/\n/).length;
})