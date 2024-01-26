type VideoCardProps = {
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
  views: string;
  timeStamp: string;
};
export default function VedioCard({
  thumbnail,
  title,
  channelImage,
  channelName,
  views,
  timeStamp,
}: VideoCardProps) {
  return (
    <div className="p-4 cursor-pointer space-y-2 ">
      <img className="rounded-xl aspect-video w-full" src={thumbnail} />
      <div className="flex items-start gap-2">
        <img
          src={channelImage}
          alt="authorImage"
          className="size-10 rounded-full"
        />
        <div className="space-y-2">
          <p className="line-clamp-2 leading-5">{title}</p>
          <div className="text-sm text-muted-foreground">
            <span>{channelName}</span>
            <div className="space-x-1">
              <span>{views}</span>
              <span>&#183;</span>
              <span>{timeStamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
