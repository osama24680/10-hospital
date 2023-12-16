let Details = document.querySelectorAll(".details");

console.log(Array.from(Details));
for (let i = 0; i < Details.length; i++) {
  Details[i].addEventListener("click", function () {
    window.open('https://thingspeak.com/channels/2382138', '_blank', 'width=1000,height=800');
  });
}
