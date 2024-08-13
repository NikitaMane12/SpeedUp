const baseServerURL="https://cw-js-8.onrender.com"

const loginUserButton = document.getElementById("login");
const email = document.getElementById('email');
const password = document.getElementById('password');


  loginUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value.trim() === '' || password.value.trim() === '') {
      alert("Please enter both email and password.");
      return;
  }
    logIn();
  });

  async function logIn() {
    try {
      const credentials = {
        email: email.value,
        password: password.value,
      };
      const response = await fetch(
        `https://cw-js-8.onrender.com/Admin`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      const data = await response.json();
      localStorage.setItem(
        "localAccessToken",
        JSON.stringify(data.accessToken)
      );
      localStorage.setItem("userId", JSON.stringify(data.user));
      console.log(data);
      alert("Successfully logged in");
      window.location.href='./admin.html'
    
    } catch (error) {
      alert(error.message);
      console.error("Error:", error);
    }
  }