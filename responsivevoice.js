function get() {
const utterance = new SpeechSynthesisUtterance();

// Utterance properties
var x ="नमस्ते. मेरा नाम jarvis है. मुझे मेरे डेवलपर्स ने बनाया हैं,. कैसे हैं आप लोग ?";
var y ="Hello everyone. My name is jarvis. And I was made by my developers. How are you all ?";

utterance.text = x;
utterance.pitch = 0.5;
utterance.rate = 1;
utterance.volume = 1;
utterance.lang = "hi-US";

 
window.speechSynthesis.speak(utterance);
}						


























function clos(){
if(window.hasOwnProperty('webkitSpeechRecognition')){
var recognition = new webkitSpeechRecognition();
recognition.continuous = false; recognition.interimResults = false; recognition.lang = "en-US"; 
recognition.start(); 
recognition.onresult = function(e) { 
document.getElementById('int-main').value = e.results[0][0].transcript;
 recognition.stop();
}; 
recognition.onerror = function(e){ 
recognition.stop(); 
} 
}
} 
