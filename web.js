document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value.trim();
      let earnings = document.querySelector("input[type='number']").value.trim();
      let telegramId = document.querySelector("input[type='text']:nth-of-type(2)").value.trim();
      let isJoined = document.querySelector("input[type='radio']:checked");

      if (name === "" || earnings === "" || telegramId === "" || !isJoined) {
          alert("Please fill out all fields before submitting the form.");
          return;
      }
      alert("Form submitted successfully!");
      this.reset();
  });

  // Dynamic text effect on heading
  let heading = document.querySelector("h1");
  let text = heading.textContent;
  heading.innerHTML = "";
  let index = 0;
  function typeEffect() {
      if (index < text.length) {
          heading.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeEffect, 150);
      }
  }
  typeEffect();

  // Button hover effects
  let buttons = document.querySelectorAll("input[type='submit'], input[type='reset']");
  buttons.forEach(button => {
      button.addEventListener("mouseover", function () {
          this.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseout", function () {
          this.style.transform = "scale(1)";
      });
  });
});
