import { useEffect, useState } from "react";
import useAxios from "../../../Components/Hooks/useAxios";
import Category from "./Category/Category";


const Categories = () => {
    const axiosBasic = useAxios()
    const [categories,setCategories] = useState([])
    console.log(categories);
    useEffect(()=>{
        axiosBasic.get('http://localhost:5000/categories').then(res=>setCategories(res.data))
    },[axiosBasic])
    return (
        <div className="w-[70%] md:w-[80%] lg:w-[85%] mx-auto my-7">
            <h1 className="text-center text-3xl font-semibold my-7">Book Categories</h1>
            <div className="grid md:grid-cols-2 gap-3 md:gap-5 lg:gap-7">
                {
                    categories?.map(category=><Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;