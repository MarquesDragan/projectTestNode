const PATH ="./data.json";
const fs = require('fs');

class Posts {
    
    get() {
        // get Post
        return this.readData();
    }

    getIndividualBlog(postId) {
        const post = this.readData();
        const foundPost = post.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) {
        // Add new Post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts;
    }

    storeData(rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }

}

module.exports = Posts;