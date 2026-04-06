import { fetchPost, fetchComments } from './task2.js';

async function getPostAndComments() {
    const responsePost = await fetchPost();
    const responseComments = await fetchComments();
    const post = await responsePost.json();
    const comments = await responseComments.json();
    console.log('Post info:');
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log('Comments: ');
    comments.slice(0, 3).forEach(comment => {
        console.log(`Name: ${comment.name}`);
        console.log(`Email: ${comment.email}`);
        console.log(`Body: ${comment.body}`);
    });
}

getPostAndComments();