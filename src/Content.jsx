import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
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
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
