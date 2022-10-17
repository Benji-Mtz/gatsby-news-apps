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

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type PostContent {
            title: String
            text: String
        }

        type PostJson {
            id: ID
            title: String
            body: String
            wordCount: Int
            isActive: Boolean
            rating: Float
            tags: [String!]!
            content: PostContent
        }

        input TitleFilter {
            eq: String
            in: String
        }
    `;

    createTypes(typeDefs);
}

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        Query: {
            allPost: {
                type: ["PostJson"],
                args: {
                    filter: `input PostFilterInput { title: TitleFilter }`,
                    limit: "Int"
                },
                resolve( source, args, context, info ) {
                    const { filter } = args;
                    const { title } = filter || {};
                    const { eq } = title || {};

                    const posts = [
                        {
                            id: "1",
                            title: "Hello World",
                            body: "my custom body",
                            wordCount: 200,
                            isActive: true,
                            rating: 4.23,
                            tags: ["Develop", "Gatsbyjs", "Electron.js"],
                            content: {
                                text: "My Text",
                                title: "My content",
                            },
                        },
                        {
                            id: "2",
                            title: "Hello World2",
                            wordCount: 300,
                            isActive: false,
                            rating: 2.23,
                            tags: ["Production", "Angular", "React"],
                            content: {
                                text: "My Text",
                                title: "My content",
                            },
                        },
                    ]

                    if(eq) {
                        return posts.filter( post => post.title === eq )
                    }

                    return posts;
                }
            }
        }
    }

    createResolvers(resolvers);
}