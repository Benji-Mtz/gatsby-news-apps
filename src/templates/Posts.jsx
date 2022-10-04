import { Link } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout'

const Posts = ({pageContext}) => {
  const { posts } = pageContext;
  return (
    <Layout>
        <h1>Posts Page</h1>
        <ul>
          {
            posts.map( post => 
            <li key={post.id}>
              <Link to={`/posts/${ post.id }`}>{ post.title }</Link>
            </li>
            )
          }
        </ul>
    </Layout>
  )
}

export default Posts