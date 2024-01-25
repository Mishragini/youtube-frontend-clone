export default function VedioCard(props:any){
    return(
        <div className="p-4 cursor-pointer w-90 ">
            <img className="rounded-xl" src={props.thumbnail} />
            <div className="grid grid-cols-12 mt-4">
            <div className="col-span-1">
            <img className="rounded-full w-10 h-10 "src={props.pfp} />
            </div>
            <div className="col-span-11 text-lg">{props.title}</div>
            </div>
            <div className="grid grid-cols-12">
            <div className="col-span-1" />
            <div className="col-span-11">
                <div className="text-gray-400">{props.author}</div>
                <div className="text-gray-400">{props.views} views | {props.timestamp}</div>
            </div>
            </div>
        </div>
    )
}