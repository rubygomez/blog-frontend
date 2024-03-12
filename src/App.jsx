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
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function Content() {
  return(
    <div>
      <PostsNew/>
      <PostsIndex/>  
    </div>
  );
}

function PostsIndex() {
  return (
  <div id="posts-index">
    <h3>March 13, 2024</h3>
    <h4>Ukranian man uses beard, neck and teeth to break world records!</h4>
    <p>Dmytro Hrunskyi uses all his might to break three records in one day, starting with pulling a 5,687-pound mini-bus by his beard.</p>
    <img src="https://cdnph.upi.com/ph/st/th/7291710175402/2024/i/17101755638202/v1.5/Ukrainian-strongman-uses-beard-neck-and-teeth-to-break-world-records.jpg" alt="" />
  </div>
  );
}

function PostsNew() {
  return (
  <div id="posts-new">
    <h1>ODDO - News of the day</h1>
    <h2>~ Oddo, where you get the weirdest, ODDest, funniest, dumbest news ~</h2>
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
