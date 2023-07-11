import Article from "./Article";

function Locally() {
    return <section className="locally container-fluid position-relative pt-0">
        <svg className="icon position-absolute" xmlns="http://www.w3.org/2000/svg" width="895" height="320"><path fill="#5C6779" fill-rule="evenodd" d="M100 0h795v320H0V100C0 44.772 44.772 0 100 0z" opacity=".077"/></svg>

        <div className="food-gallery d-block d-lg-flex flex-lg-row-reverse align-items-center justify-content-center px-md-5 px-0 container mx-auto position-relative">
            <div className="f-left position-relative">
                <svg className="position-absolute icon" xmlns="http://www.w3.org/2000/svg" width="160" height="76"><g fill="#9E7F66" fill-rule="evenodd"><path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z"/></g></svg>
            </div>

            <Article 
              classesMain = "f-right ms-auto ms-lg-0 me-lg-auto p-lg-5 p-0 text-center text-lg-start d-flex flex-column justify-content-lg-between justify-content-around align-items-center align-items-lg-start"
              title = "The most locally sourced food"
              more = "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
            />
        </div>
    </section>
}

export default Locally;