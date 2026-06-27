const axios = require('axios');

describe('GET requests test', () => {
    
    test('Get post with id 1', async () => {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const post = response.data;
        

        expect(response.status).toBe(200);
        expect(post.id).toBe(1);
        expect(post.userId).toBe(1);
        expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        expect(post.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
    });   
    test('Get all posts', async () => {
        const response = await axios.get ('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        expect(response.status).toBe(200);
        expect(posts).toHaveLength(100);
    });
});

describe('POST requests tests', () => {

    test('Create new post', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar'
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        const createdPost = response.data;

        expect(newPost.title).toBe(createdPost.title);
        expect(newPost.body).toBe(createdPost.body);
        expect(createdPost.id).toBe(101);
        expect(response.status).toBe(201);
        console.log(response.data);
    })
    test('Create empty post', async () => {
        const newPost = {};
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        const createdPost = response.data;
        
        expect(createdPost.title).toBeUndefined();
        expect(createdPost.body).toBeUndefined();
        expect(createdPost.id).toBe(101);
        expect(response.status).toBe(201);
        console.log(response.data);
    })
});

describe('PUT requests tests', () => {

    test('Update post with id 1', async() => {
        const updatedPost = {
            title: 'new title',
            body: 'new body'
        }
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
        const post = response.data;

        expect(post.title).toBe(updatedPost.title);
        expect(post.body).toBe(updatedPost.body);
        expect(post.id).toBe(1);
        expect(response.status).toBe(200);
        console.log(response.data);
    })
});

describe('DELETE requests tests', () => {
    
    test('Delete post with id 15', async() => {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/15');
        console.log(response.data);
        expect(response.status).toBe(200);
    })
})