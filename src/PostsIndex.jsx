
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <img src={post.image} alt="" />
            <button onClick={props.onShowPost}>Click</button>
          </div>
        ))}
      </div>
    </div>
  );
}
