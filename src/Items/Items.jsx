import { FaCheck } from 'react-icons/fa';
import Review from '../Review';

const Items = () => {
    return (
        <div className='md:max-w-full mx-auto'>
            
            <div className="grid md:grid-cols-2 gap-6 space-x-5 mb-16">
                <div className="card  bg-base-80 shadow-xl image-full">
                    <figure><img src="https://media.istockphoto.com/id/1190190300/photo/shrimp-and-beef-chow-mein.jpg?s=2048x2048&w=is&k=20&c=L1RpoiTLc-q4MIpbeY7Ohmn7O4331h8rvO9U8swNnsw=" alt="Shoes" /></figure>
                    <div className="card-body text center">
                        <h2 className="card-title text-5xl font-bold ">Special us</h2>
                        <ul>
                            <li className="my-2 flex align-items-center "><span className='mr-2 '><FaCheck></FaCheck>  </span> Great chefs are able to come up with unique and inventive dishes that showcase their culinary talents and creativity.</li>
                            <li className="my-2 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>We have a true passion for cooking and are constantly experimenting with new ingredients, techniques, and flavors.</li>
                            <li className="my-2 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>We pay close attention to the smallest details, from the quality of the ingredients they use to the presentation of the final dish</li>
                            <li className="my-2 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span> We have an extensive knowledge of food, ingredients, and cooking techniques. They understand how different flavors and textures work together to create a delicious dish.</li>
                            <li className="my-2 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span> Cooking in a busy restaurant kitchen can be intense and fast-paced, so the best chefs are able to work calmly and efficiently under pressure.</li>
                            <li className="my-2 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>We are committed to using only the best quality ingredients and ensuring that every dish they serve is of the highest quality.</li>
                        </ul>

                        <button className="btn btn-outlined mx-0">Hire Us</button>
                    </div>
                </div>
                <div className="mx-auto card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://media.istockphoto.com/id/1368038045/photo/aromatic-roast-sliced-pork-with-vegetables-in-hot-sauce-chinese-cuisine.jpg?s=2048x2048&w=is&k=20&c=hMgPZLR-LAq_DxmV0aZQX0DIxJLoTTuaoZVGAsiyXG0=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-5xl font-bold ">Feel A Taste</h2>
                        <ul>
                            <li className="my-3 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>Our Chef's have the ability to create new and exciting dishes that showcase their culinary talents and creativity. They can experiment with unique flavors and ingredients to create new taste experiences for diners.</li>
                            <li className="my-3 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>Our Chefs can help preserve culinary traditions and cultural heritage by showcasing traditional dishes and cooking techniques. By doing so, they can help preserve cultural diversity and promote understanding and appreciation for different cuisines and cultures.</li>
                            <li className="my-3 flex align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>Experienced chefs can mentor and train aspiring chefs, helping them develop their culinary skills and encouraging them to pursue their passion for food.

                                Advocacy for food-related issues: Chefs can use their platform and influence to raise </li>
                            <li className="my-3 flex justify-items-center align-items-center "><span className='mr-2'><FaCheck></FaCheck>  </span>The food industry is a major employer, and chefs can help create jobs and contribute to economic growth by opening new restaurants, catering businesses, or other food-related ventures.</li>
                        </ul>



                    </div>
                </div>
            </div>
<Review></Review>
        </div>
    );
};

export default Items;