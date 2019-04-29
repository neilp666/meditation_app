const app = () => {
const song = document.querySelector(".song");
const play = document.querySelector(".play");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".sound-picker button");
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
console.log(outlineLength);
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
};

app();