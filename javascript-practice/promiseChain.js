function login() {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log("User fetched");
    resolve({userId: 101});
    },1000);
    });
}

function getProfile(user) {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log("Profile fetched");
    resolve({name: "Boss", userId: 101});  
    },1000);
    });
}

function getPosts(profile) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const success = Math.random() > 0.3;
    if(success)
    resolve([ {id:1}, {id:2}, {id:3} ]);
    else
    reject("Failed to fetch posts"); 
    },1000);
    });
}

function totalPosts(posts){
    return posts.length;
}

login()
  .then(user => getProfile(user))
  .then(profile => getPosts(profile))
  .then(posts => totalPosts(posts))
  .then(total => console.log(`Total posts are ${total}`))
  .catch(err => console.error(err));
