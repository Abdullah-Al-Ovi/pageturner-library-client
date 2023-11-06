import { Link } from "react-router-dom";


const Category = ({category}) => {
    const {image,name} = category
    return (
        <div className="">
             <div className="border-2 rounded-md p-3 flex flex-col bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 ">
                <div className="flex-grow "><img className="rounded-full border-[2px] h-24  w-24 md:h-32 md:w-32 lg:h-64 lg:w-64 mx-auto" src={image} /></div>
                <div ><h1 className="text-lg md:text-2xl font-medium md:font-semibold text-center">{name}</h1></div>
                <div className="text-center my-3">
                    <Link to={`/category/${name}`}><button className="btn">See Books</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Category;