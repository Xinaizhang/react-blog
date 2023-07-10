import {
  Link,
} from "react-router-dom";
import React from 'react'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "1React learning",
      desc: "1React learningReact learningReact learningReact learning",
      img: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      id: 2,
      title: "2React learning",
      desc: "2React learningReact learningReact learningReact learning",
      img: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      id: 3,
      title: "3React learning",
      desc: "3React learningReact learningReact learningReact learning",
      img: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ]




  return (
    <div className='home'>
      <div className="posts">
        {
          posts.map(post => (
            <div className="post" key={post.id}>
              <div className='img'>
                <img src={post.img} alt="" />
              </div>
              <div className='content'>
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <Link className='link' to={`/post/${post.id}`}>
                  <button>Read more ={">"}</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home