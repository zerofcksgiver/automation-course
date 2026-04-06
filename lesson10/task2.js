export function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1');
}

export function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
}


fetchPost()
    .then(response => response.json())
    .then(post => {
        console.log('Post info:');
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
    });


fetchComments()
    .then(response => response.json())
    .then(comments => {
        console.log('Comments: ');
        comments.forEach(comment => {
            console.log(`Name: ${comment.name}`);
            console.log(`Email: ${comment.email}`);
            console.log(`Body: ${comment.body}`);
        });
    })