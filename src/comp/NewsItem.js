import React from "react";

const NewsItem = (props) => {

    let { title, description,imageUrl,newsUrl,source } = props;

    return (
        <div className='flex items-center m-2 mt-5 space-x-4  rounded-xl 
        hover:bg-gray-100 hover:scale-95 transition transform duration-250 ease-out  w-auto border-2'>
        <div className=" relative h-96 w-80 ">
          <div className="img01 ">
            <img
                className=' rounded-t-md h-44 w-full '
              src={!imageUrl?"https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80":imageUrl}
              alt=""
            />
          </div>
          <div className='px-2'>
            <h3 className="text-xl mt-3">{title}</h3>
            <span className="absolute top-0 right-0  transform -translate-y-5 translate-x-2 p-1 rounded-r-lg rounded-tl-lg font-semibold bg-red-600 text-white z-50">
              {source}
              
            </span>
            <p>{description}</p>
            <div className='pl-1 h-11 w-20 rounded-md m-2 p-2 items-center shadow-none  bg-black text-white '>
            <a rel="noreferrer" href={newsUrl} target="_blank" className=" p-2   ">
              Explore!
            </a></div>
            
          </div>
        </div>
      </div>
    );

}

export default NewsItem;