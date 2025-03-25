function Food(){
    const food1 = "Chapati"
    const food2 = "Cake"


    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}   

export default Food