const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

const updateBlogPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-update-blog-post").ariaValueMax.trim();
    const content = document
        .querySelector("content-update-blog-post")
        .value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("failed to update post");
        }
    }
};

const deleteBlogPostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to delete post");
    }
};

const updateBlogPostButton = document.querySelector("update-blog-post");

if (updateBlogPostButton) {
    updateBlogPostButton.addEventListener("click", updateBlogPostFormHandler);
}

const deleteBlogPostButton = document.querySelector("delete-blog-post");

if (updateBlogPostButton) {
    deleteBlogPostButton.addEventListener("click", deleteBlogPostFormHandler);
}