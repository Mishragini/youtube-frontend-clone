import VideoCard from "./VideoCard";

//mocking backend response
let Videos = [
  {
    title: `This is Why You are Not Growing As A Software Developer | How To Fix It This is Why You are Not Growing As A Software Developer | How To Fix It This is Why You are Not Growing As A Software Developer | How To Fix It `,
    thumbnail: "thumbnail.png",
    channelImage: "pfp.png",
    channelName: "Harkirat Singh",
    views: "90k",
    timestamp: "2 weeks ago",
  },
];
for (let i = 0; i < 10; i++) {
  Videos.push(Videos[0]);
}
export default function VedioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Videos.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            thumbnail={video.thumbnail}
            channelImage={video.channelImage}
            channelName={video.channelName}
            views={video.views}
            timeStamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
}
