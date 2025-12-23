function validateForm() {

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var userType = document.getElementById("userType").value;

    // Clear all previous messages
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("userTypeError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    let isValid = true;

    // First Name
    if (fname === "") {
        document.getElementById("fnameError").innerHTML = "First name is required";
        isValid = false;
    }

    // Last Name
    if (lname === "") {
        document.getElementById("lnameError").innerHTML = "Last name is required";
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        isValid = false;
    }

    // Phone Validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Phone must be 10 digits";
        isValid = false;
    }

    // Password Validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Minimum 8 characters, 1 capital letter & 1 special symbol required";
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Confirm password";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    // User Type
    if (userType === "") {
        document.getElementById("userTypeError").innerHTML = "Select user type";
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById("successMsg").innerHTML =
            "Registration Successful!";
    }

    return false; // Prevent form submission
}

// Show / Hide Password
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Password Strength Meter
function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthMsg = document.getElementById("strengthMsg");

    if (password.length === 0) {
        strengthMsg.innerHTML = "";
        return;
    }

    const strong = /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*\d).{8,}$/;
    const medium = /^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

    if (strong.test(password)) {
        strengthMsg.style.color = "green";
        strengthMsg.innerHTML = "Strong Password";
    } else if (medium.test(password)) {
        strengthMsg.style.color = "orange";
        strengthMsg.innerHTML = "Medium Password";
    } else {
        strengthMsg.style.color = "red";
        strengthMsg.innerHTML = "Weak Password";
    }
}
