const newBlogPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-post').value.trim();
    const content = document.querySelector('#content-new-post').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to post');
        }
    }
};

const newBlogPostForm = document.querySelector('.new-post-form');
if (newBlogPostForm) {
    newBlogPostForm.addEventListener('submit', newBlogPostFormHandler);
}