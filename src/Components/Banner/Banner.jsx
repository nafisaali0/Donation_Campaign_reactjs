// import PropTypes from 'prop-types';
// import banner from  './banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-white-200">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-xl font-bold md:text-2xl lg:text-5xl">I Grow By Helping People In Neede</h1>
                        <div className="felx mt-10">
                            <input type="text" placeholder="Category Name" className="input input-bordered w-full max-w-xs" />
                            <button className="px-5 py-3 bg-[#FF444A] text-white rounded-md">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Banner.propTypes = {

// };

export default Banner;