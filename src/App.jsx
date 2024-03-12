function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All Animals</a> | <a href="#posts-new">New Animals</a>
      </header>
    </div>
  );
}

function Content() {
  let posts = [{
    id: 1,
    title: " Ukranian man uses beard, neck and teeth to break world records",
    body: "Dmytro Hrunskyi uses all his might to break three records in one day, starting with pulling a 5,687-pound mini-bus by his beard.",
    image: "https://cdnph.upi.com/ph/st/th/7291710175402/2024/i/17101755638202/v1.5/Ukrainian-strongman-uses-beard-neck-and-teeth-to-break-world-records.jpg"
  },
  {
    id: 2,
    title: "news tmr",
    body: "blah tmr horse blah",
    image: "https://dims.apnews.com/dims4/default/905f749/2147483647/strip/true/crop/2950x1964+25+0/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe0%2F2e%2F1989aa72209bdec3b45943ac491c%2F06a401eda68948f494920072ce007925"
  },
  {
    id: 3,
    title: "news yesterday",
    body: "blah yesterday k9 blah",
    image: "https://dims.apnews.com/dims4/default/45bf7ec/2147483647/strip/true/crop/4032x2684+0+170/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7f%2F7b%2F70040a599fd6ae1ffe868a7654fc%2F86539009c2ea4477bdf485fa52e7abac"
  }
  ];
  return(
    <div>
      <PostsNew/>
      <PostsIndex posts={posts} />  
    </div>
  );
}

function PostsIndex(props) {
  console.log(props)
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

function PostsNew() {
  return (
  <div id="posts-new">
    <h1>ODDO - News of the day</h1>
    <h1>~ 0DD0 ~</h1>
    <img src="https://dims.apnews.com/dims4/default/babd853/2147483647/strip/true/crop/3600x2397+0+103/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5b%2F17%2F0467d030b73e845d355ba016c73c%2F0f76b927f6eb406dbdd49d2622c1da0b" alt="" />
  </div>
  );
}

function Footer() {
  return ( 
  <div>
    <footer>
      <p>Copyright 2024</p>
    </footer>
  </div>
  );
}
export default App;
