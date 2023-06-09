document
  .getElementById("airtable-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const githubRepoUrl = document.getElementById("githubRepoUrl").value;

    const formData = {
      email: email,
      githubRepoUrl: githubRepoUrl,
    };

    fetch(
      "https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully!");
        } else {
          console.log("Form submission failed!");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });
