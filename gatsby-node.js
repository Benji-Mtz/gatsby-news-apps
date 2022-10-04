const axios = require('axios');

exports.createPages = async ({actions}) => {

    const { createPage } = actions;

    const res  = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;

    posts.forEach(post => {
        createPage({
            path: `/posts/${post.id}`,
            component: require.resolve('./src/templates/Post.jsx'),
            context: { post }
        })
    });


    createPage({
        path: `/posts`,
        component: require.resolve('./src/templates/Posts.jsx'),
        // context: { testingData: 'We are text fake from context node' }
        context: { posts }
    });

}