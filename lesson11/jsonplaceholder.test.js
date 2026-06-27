const axios = require('axios');

describe('POSTs tests', () => {
    // test('Get all posts', async () =>{
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     //const posts = response.data;
    //     expect(response.status).toBe(200);
    // })
    // test('Verify that 100 posts are returned', async () =>{
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     const posts = response.data;
    //     expect(posts).toHaveLength(100);
    // })
    // test('Get first post', async () =>{
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    //     const post = response.data;
    //     expect(post.userId).toBe(1);
    //     expect(post.id).toBe(1);
    //     expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    //     expect(post.body).toBe('qui et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
    //})
    // test('Delete first post', async () =>{
    //     const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    //     const post = response.data;
    //     console.log(response.data);
    // })
    test('Create new post', async () =>{
            const newPost = {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            const createdPost = response.data;
            expect(newPost.title).toBe(createdPost.title);
            expect(newPost.body).toBe(createdPost.body);
            expect(newPost.userId).toBe(createdPost.userId);
            expect(createdPost.id).toBe(101);
            expect(response.status).toBe(201);
            console.log(response.data);
        })
})
