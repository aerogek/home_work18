const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

const baseUrl = "https://jsonplaceholder.typicode.com";

// for(let i=0; i<100; i++) {
//     fetch(`${baseUrl}/comments?postId=${i+1}`)
// .then(res => res.json())
// .then((json) => console.log(json[0].postId))
// .catch(e => console.log(e));
// }

// fetch(`${baseUrl}/posts`, {
//     method: "post",
//     headers:{'Content-type': 'application/json; charset=UTF-8',
//     userName: "Yuri"},
//     body: JSON.stringify(newPost),})
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(e => console.log(e));

// fetch(`${baseUrl}/posts/1`, {method: "delete"})
// .then(res => {
//     if(res.ok) {
//         alert("It was deleted")
//     };
// });

// const getAllData = async () => {
//     for(let i=0; i<100; i++) {
//       await fetch(`${baseUrl}/comments?postId=${i+1}`)
//     .then(res => res.json())
//     .then((json) => console.log(json[0].postId, json))
//     .catch(e => console.log(e));
//     };
// };
// getAllData();

// fetch(`${baseUrl}/posts`).then(res => res.json()).then(arr => {
//     const _userID = arr[45].userId;
//     // дописать
// });

// const getUserPosts = async () => {
//     const posts = await fetch(`${baseUrl}/posts`).then(res => res.json());
//     const userPosts = await fetch(`${baseUrl}/posts?userId=${posts[45].userId}`)
//     .then(res => res.json());
//     console.log(userPosts);
//     return userPosts;
// };
// getUserPosts();

// const requests = [];
// for(let i=0; i<100; i++) {
//     requests.push(fetch(`${baseUrl}/comments?postId=${i+1}`));
// };

// Promise.all(requests)
// .then(responses => responses.map(r => r.json()
//     .then(json =>console.log(json))));

let albums;

fetch(`${baseUrl}/albums`)
.then(res => res.json())
.then(al => {
    albums = [...al];
    renderItems();
});

const renderItems = () => {
    let html = '';
    albums.forEach(({id, title, userId}) => {
        html = `<div class='item'>
        <h3>Album id: ${id}</h3>
        <h4>Album id: ${userId}</h3>
        <p>${title}</p>
        </div>`
    });
    document.getElementById('wrapper').innerHTML = html;
};

