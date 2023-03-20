var qoute = document.querySelector(".qoute")
qouteBtn = document.querySelector("button")
autour = document.querySelector(".name")
btn1 = document.querySelector(".sound")
btn2 = document.querySelector(".copy")
btn3 = document.querySelector(".twitter")
synth = speechSynthesis;
function randomQoute(){
    // yeh qoute key timerr ke tarha hai jese upar loading or jab pura hojye toh new qoute ajyega
    qouteBtn .innerHTML="loading Qoute..."
    fetch("http://api.quotable.io/random").then(res=> res.json().then(result=>{
        qoute.innerText=result.content
        autour.innerText=result.author
        qouteBtn.innerText=("New Quote")
    }) )
}
// yeh jab banda click karlega toh loading wale awaz ayegi
btn1.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance(`${qoute.innerText} by ${autour.innerText}`);
        synth.speak(utterance);
})
// yeh jab banda click karlega toh copyy hojyega
btn2.addEventListener("click", ()=>{
    navigator.clipboard.writeText(qoute.innerText);
});
// yeh jab banda click karlega toh twitter pe chale jayega
btn3.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${qoute.innerText}`;
    window.open(tweetUrl, "_blank");
});

qouteBtn.addEventListener("click",randomQoute)
