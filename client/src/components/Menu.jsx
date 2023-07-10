import React from 'react'

const Menu = () => {

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
        <div className="menu">
            <h1>OTHER POSTS U MAY LIKE</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>READ MORE</button>
                </div>
            ))}
        </div>
    )
}

export default Menu