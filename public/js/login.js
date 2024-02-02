const blogLoginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": 'application/json' },
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert('Failed to login');
        }
    }
};

const blogLoginForm = document.querySelector(".blog-login-form");
if (blogLoginForm) {
    blogLoginForm.addEventListener('submit', blogLoginFormHandler);
}