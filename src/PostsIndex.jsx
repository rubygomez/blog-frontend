
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h2>March 12, 2024</h2>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
        </div>
      ))}
    </div>
  );
}
