import "./item.css"
const List=({people})=>{
    return(
        <>
        {people.map(item=>(
            <div key={item.id} className="item">
                <img src={item.image} alt={item.id}></img>
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.age+" "}years</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default List