import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const BookForAllBooks = ({book}) => {
    const {image,name,author_name,category,rating} = book
    return (
        <div className="card flex flex-col card-side bg-base-100 shadow-xl">
        <div className='flex flex-grow flex-col md:flex-row'>
       
       <figure className='w-[95%] md:w-[55%] lg:w-[45%] mx-auto rounded'><img className=' lg:object-cover object-contain h-[170px] lg:h-[270px] ' src={image} /></figure>
    
       <div className="card-body flex-grow  pl-2">
      
            <h1><span className="text-sm md:text-base font-medium">Title: </span>{name}</h1>
           <hr />
           <h1><span className="text-sm md:text-base font-medium">Author: </span>{author_name}</h1>
           <h1><span className="text-sm md:text-base font-medium">Category: </span>{category}</h1>

           
           <Rating style={{ maxWidth: 150 }}  readOnly size={30} value={rating}  />
       </div>
        </div>
        <div className=' w-[100%] text-center '>

        </div>
        
        <div className=' w-[100%] text-center'>
        <button className='w-[60%] text-white  font-medium bg-red-300 rounded my-3 '>Update</button>
        </div>
        
</div>
    );
};

export default BookForAllBooks;