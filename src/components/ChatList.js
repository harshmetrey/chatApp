import Card from './Card'
export default function ChatList ({data}) {
    return (
        <div>
            {data.map((item, i) => {
                return (<Card item={item} key={i}/>)
            })}
        </div>
    )
}