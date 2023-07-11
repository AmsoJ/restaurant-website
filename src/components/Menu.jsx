import Article from "./Article";
import Dish from "./Dish";
import dish1 from './../assets/images/homepage/salmon-desktop-tablet.jpg';
import dish2 from "./../assets/images/homepage/beef-desktop-tablet.jpg";
import dish3 from "./../assets/images/homepage/chocolate-desktop-tablet.jpg";

const menuList = [
    {
        id: 1,
        img: dish1,
        name: "Seared Salmon Fillet",
        desc: "Our locally sourced salmon served with a refreshing buckwheat summer salad"
    },
    {
        id: 2,
        img: dish2,
        name: "Rosemary Filet Mignon",
        desc: "Our prime beef served to your taste with a delicious choice of seasonal sides."
    },
    {
        id: 3,
        img: dish3,
        name: "Summer Fruit Chocolate Mousse",
        desc: "Creamy mousse combined with summer fruits and dark chocolate shavings"
    }
]


function Menu () {
    return <section className="menu container-fluid">
        <div className="menu-wrapper container p-0">
            <div className="wrap d-lg-flex d-block align-items-center">
                <Article
                    title="A few highlights from out menu"
                    more= "We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
                    classesMain= "article d-flex flex-column align-items-lg-start align-items-center text-center text-lg-start p-4 justify-content-start"
                    titleClasses = 'text-white'
                />
                <section className="menu-main pt-lg-5 mt-5">
                    {
                        menuList.map(list => {
                            return <Dish
                                key={list.id}
                                {...list}
                            />
                        })
                    }
                </section>
            </div>
        </div>
    </section>
}

export default Menu;