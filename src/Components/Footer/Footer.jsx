import React, { useEffect } from 'react';
import './footer.css';
import video2 from '../../Assets/Videos/video2.mp4'
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillYoutube, AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video
                    src={video2}
                    loop
                    autoPlay
                    muted
                    type='video/mp4'>
                </video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>LIÊN LẠC</small>
                        <h2>Du lịch cùng chúng tôi</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Nhập địa chỉ email' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            GỬI
                            <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="$" className="logo flex">
                                <MdOutlineTravelExplore className='icon' />
                                Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Travel. là nền tảng đặt vé trực tuyến hàng đầu dành cho du khách muốn khám phá
                            những điểm đến tuyệt vời khắp thế giới. Với giao diện thân thiện, dễ sử dụng
                            và dịch vụ hỗ trợ khách hàng 24/7, Travel. mang đến cho bạn trải nghiệm đặt
                            vé nhanh chóng và tiện lợi. Tại đây, bạn có thể tìm thấy hàng ngàn chuyến bay,
                            khách sạn, tour du lịch và dịch vụ cho thuê xe với giá cả cạnh tranh và các
                            ưu đãi hấp dẫn.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillFacebook className='icon' />
                            <AiFillInstagram className='icon' />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Nhóm 1 */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                VỀ CHÚNG TÔI
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Dịch vụ
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bảo hiểm
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Đại lý
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Du lịch
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Thanh toán
                            </li>
                        </div>

                        {/* Nhóm 2 */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                ĐỐI TÁC
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Traveloka
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>

                        {/* Nhóm 3 */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                PHÚT CUỐI
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TP.HCM
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Hà Nội
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Đà Lạt
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Đà Nẵng
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Cần Thơ
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>WEBSITE ĐẶT VÉ DU LỊCH TỐT NHẤT</small>
                        <small>COPYRIGHT BY TUANLINH - 2024</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
