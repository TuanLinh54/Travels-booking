import React, { useEffect, useState } from 'react';
import './home.css';
import video from '../../Assets/Videos/video.mp4';
import { IoLocationOutline } from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram, FiGithub, FiList } from "react-icons/fi";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [price, setPrice] = useState(20000000);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handlePriceChange = (event) => {
        setPrice(event.target.value * 1000000);
    };

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video
                src={video}
                muted
                autoPlay
                loop
                type='video/mp4'>
            </video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Các gói dịch vụ của chúng tôi
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Tìm kiếm kỳ nghỉ của bạn
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Tìm kiếm điểm đến của bạn</label>
                        <div className="input flex">
                            <input type="text" placeholder='Nhập tên tại đây...' />
                            <IoLocationOutline className='icon' />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="city">Chọn ngày:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Giá tối đa:</label>
                            <h3 className="total">{price.toLocaleString()} VND</h3>
                        </div>
                        <div className="input flex">
                            <input
                                type="range"
                                max={20}
                                min={3}
                                value={price / 1000000}
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon' />
                        <span>THÊM BỘ LỌC</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon' />
                        <FiInstagram className='icon' />
                        <FiGithub className='icon' />
                    </div>

                    <div className="leftIcons">
                        <FiList className='icon' />
                        <TbApps className='icon' />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;
