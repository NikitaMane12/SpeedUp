const signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        const response = await fetch('https://cw-js-8.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const data = await response.json();
            alert("Account created successfully!");
            // Optionally, you can redirect the user to the login page after successful signup
            window.location.href = "./login.html";
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to sign up'); // Throw error with message from server or generic message
        }
    } catch (error) {
        alert(error.message);
        console.error("Error:", error);
    }
});
