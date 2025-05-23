document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-right form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const data = { name, email, message };

    fetch("https://hook.eu2.make.com/xjlx3122zqtay2hhl7zkdbpdgd2ut848", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        alert("An error occurred. Please try again later.");
      });
  });
});
