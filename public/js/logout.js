const blogLogout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application?json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('logout failed.');
    }
};

const blogLogoutButton = document.querySelector('#blog-logout');
if (blogLogoutButton) {
    blogLogoutButton.addEventListener('click', blogLogout);
}