import React from 'react'
import Layout from '../components/Layout'

const Posts = ({pageContext}) => {
  const { post } = pageContext;
  return (
    <Layout>
        <h1>Post Detail Page</h1>
        <h1>id: { post.id }</h1>
        <h1>title: { post.title }</h1>
        <h1>body: { post.body }</h1>
    </Layout>
  )
}

export default Posts