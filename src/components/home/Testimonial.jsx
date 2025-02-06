import React from "react";
import { useState, useEffect } from "react";
import Randomsvg from "./Randomsvg";
import RandomImage from "./RandomImage";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [svgIcons, setSvgIcons] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((Response) => {
        if (!Response.ok) {
          throw new error("network response was not ok");
        }
        return Response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // const svgIcon = `<svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  //                             viewBox="0 0 47.94 47.94" xml:space="preserve">
  //                           <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
  //                             c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
  //                             c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
  //                             c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
  //                             c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
  //                             C22.602,0.567,25.338,0.567,26.285,2.486z"/>
  //                           </svg>`;
                          
  // const generatnumber = () => {
  //   let randomNum = Math.floor(Math.random() * 5) + 1;
  //   let divsvg = "";
  //   for (let index = 0; index < randomNum; index++) {
  //     divsvg+=svgIcon;
  //   }
  //   setSvgIcons(divsvg);
  // };
  //     generatnumber();



  return (
    <>
      {data.slice(0, 10).map((post) => (
        <div key={post.id} className="testi-card w-1/5 p-4">
          <div className=" border rounded-xl border-gray-300 p-5 h-full">
          <div className="testi-header flex gap-5 items-center mb-3">
            <RandomImage />
            <div className="title-name">
              <h3 className="w-32 h-5 overflow-hidden capitalize font-bold mb-2">{post.title}</h3>
              <div className="star-rating flex gap-2">
          <Randomsvg/>
          {/* <div dangerouslySetInnerHTML={{ __html: svgIcon }} /> */}
          </div>
            </div>
          </div>
          
          <div className="text-para">
            <p>{post.body}</p>
          </div>
        </div>
        </div>
      ))}
     
    </>
  );
};

export default Testimonial;
