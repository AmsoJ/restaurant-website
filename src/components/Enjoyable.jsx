import Article from "./Article";

function Enjoyable() {
    return <section className="enjoyable-place container-fluid position-relative">
        <svg class="icon position-absolute" xmlns="http://www.w3.org/2000/svg" width="993" height="320"><path fill="#5C6779" fill-rule="evenodd" d="M893 320H0V0h993v220c0 55.228-44.772 100-100 100z" opacity=".077"/></svg>
        
        <div className="food-gallery d-flex flex-lg-row flex-column align-items-center justify-content-center px-0 px-md-5 container mx-auto position-relative">
            <div className="f-left position-static position-lg-absolute"></div>

            <Article 
                classesMain = "f-right ms-auto p-lg-5 p-0 text-center text-lg-start d-flex flex-column justify-content-lg-between justify-content-around align-items-center align-items-lg-start"
                title="Enjoyable place for all the family"
                more = "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
            />
        </div>
    </section>
}

export default Enjoyable;