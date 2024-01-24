import VedioCard from "./VedioCard"

//mocking backend response
const Vedios=[
    {
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },
    {
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },
    {
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },{
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },
    {
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },{
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },
    {
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        pfp:"pfp.png",
        thumbnail:"thumbnail.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },
    {
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },{
        title:"This is Why You are Not Growing As A Software Developer | How To Fix It",
        thumbnail:"thumbnail.png",
        pfp:"pfp.png",
        author:"Harkirat Singh",
        views:"90k",
        timestamp:"2 weeks ago"
    },
]
export default function VedioGrid(){
    return(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Vedios.map(vedio=><div>
            <VedioCard title={vedio.title} 
            thumbnail={vedio.thumbnail}
            pfp={vedio.pfp}
            author={vedio.author}
            views={vedio.views}
            timestamp={vedio.timestamp} />
        </div>)}

    </div>)
}