
const familyData = [
    {
        id: 1,
        title: "Family Gathering",
        desc: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all",
    },
    {
        id: 2,
        title: "Special Events",
        desc: "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal."
    },
    {
        id: 3,
        title: "Social Events",
        desc: "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone."
    }
]

function Familia() {
    return <section className="family position-relative overflow-hidden container-fluid p-0">
        <svg className="f-icon position-absolute" xmlns="http://www.w3.org/2000/svg" width="895" height="320"><path fill="#5C6779" fill-rule="evenodd" d="M795 0H0v320h895V100C895 44.772 850.228 0 795 0z" opacity=".077"/></svg>
        
        <div className="f-wrap container d-lg-flex d-block">
            <figure className="pictogram mx-auto mx-md-0 position-relative">
                {familyData.map(data => {
                    return  <div className="img shadow-lg position-absolute" key={data.id}></div>
                })}
            </figure>

            <div className="f-detail d-flex flex-lg-column flex-column-reverse px-5 pt-lg-4 pt-0 border">
                <div className="header border border-primary mx-lg-0 mx-auto d-flex flex-column justify-content-lg-between justify-content-start">
                    <div className="head position-relative">
                        {familyData.map(data => {
                            return <h2 className="title position-absolute" key={data.id}>{data.title}</h2>
                        })}
                    </div>

                    <div className="paragraphs border border-info position-relative">
                        {familyData.map(data => {
                            return <p key={data.id} className="position-absolute text-lg-start text-center border">{data.desc}</p>
                        })}
                    </div>

                    <a href="#jakj" className="btn btn-dark mx-auto mx-lg-0 rounded-0 w-50 text-uppercase">
                        Book a table
                    </a>
                </div>
                <div className="indicate mt-lg-5 my-3 text-center text-md-start d-flex flex-lg-column flex-md-row flex-column justify-content-around justify-content-md-between">
                    {familyData.map(data => <p className="text-uppercase position-relative" key={data.id}>{data.title}</p>)}
                </div>
            </div>
        </div>
    </section>
}

export default Familia;