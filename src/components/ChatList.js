import Card from './Card'
export default function ChatList ({data, handleSelect, isSelected}) {
    return (
        <div>
            {data && data.map((item, i) => {
                return (
                    <Card isSelected={isSelected} handleSelection={handleSelect} item={item} key={i}/>
                )
            })}
        </div>
    )
}