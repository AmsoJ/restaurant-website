function Dish({name, desc}) {
    return <div className="dish d-block d-md-flex my-3">
    <figure className="dish-image bg-light position-relative">
        {/* <img src={img} alt={desc}/> */}
    </figure>
    <article className="dish-details p-3 p-md-0 text-center">
        <h5 className="dish-title text-white my-3">{name}</h5>
        <p className="dish-emp text-white m-0">{desc}</p>
    </article>
</div>
}


export default Dish;