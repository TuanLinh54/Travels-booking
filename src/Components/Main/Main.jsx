import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import img1 from '../../Assets/images/ninhbinh.jpg'
import img2 from '../../Assets/images/cantho.jpg'
import img3 from '../../Assets/images/dalat.jpg'
import img4 from '../../Assets/images/danang.jpg'
import img5 from '../../Assets/images/hagiang.jpg'
import img6 from '../../Assets/images/hoian.jpg'
import img7 from '../../Assets/images/phuquoc.jpg'
import img8 from '../../Assets/images/vinhalong.jpg'
import img9 from '../../Assets/images/vungtau.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
    {
        id: 1,
        imgSrc: img1,
        desTitle: 'Ninh Bình',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "12.000.000",
        destination: 'Ninh Bình, nằm ở phía Bắc Việt Nam, là một điểm đến du lịch hấp dẫn với cảnh quan thiên nhiên hùng vĩ, những ngôi chùa cổ kính, và hệ thống hang động kỳ bí, nổi tiếng với Tràng An, Tam Cốc - Bích Động và chùa Bái Đính.'
    },
    {
        id: 2,
        imgSrc: img2,
        desTitle: 'Cần Thơ',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "5.000.000",
        destination: 'Vốn được mệnh danh là Tây Đô - Thủ phủ của miền Tây Nam bộ từ hơn trăm năm trước, Cần Thơ là một trong những điểm đến hấp dẫn bậc nhất phía Nam. Cần Thơ nằm ở trung tâm của đồng bằng sông Cửu Long, thuộc vùng hạ lưu sông Mekong.'
    },
    {
        id: 3,
        imgSrc: img3,
        desTitle: 'Đà Lạt',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "8.000.000",
        destination: 'Nhắc đến Đà Lạt, chắc chắn ai cũng xuýt xoa trước vẻ đẹp có một không hai của thành phố ngàn hoa này. Với tiết trời quanh năm dịu dàng, cuộc sống bình yên với con người hiền hòa, Đà Lạt luôn là lựa chọn số một cho những chuyến đi phượt ngắn ngày hay nghỉ dưỡng dài ngày.'
    },
    {
        id: 4,
        imgSrc: img4,
        desTitle: 'Đà Nẵng',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "10.000.000",
        destination: 'Toạ lạc ở vùng duyên hải Nam Trung Bộ, Đà Nẵng được đông đảo bạn bè quốc tế biết đến với hình ảnh đô thị năng động và rực rỡ sắc màu. Hơn cả Cầu Vàng ẩn hiện sau màn sương sớm hay tượng Cá Chép Hoá Rồng lập loè dưới ánh sáng pháo hoa.'
    },
    {
        id: 5,
        imgSrc: img5,
        desTitle: 'Hà Giang',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "15.000.000",
        destination: 'Sở hữu vẻ đẹp hoang sơ, Hà Giang từ lâu đã thu hút những tín đồ du lịch yêu thích khám phá thiên nhiên hùng vĩ. Không chỉ được biết đến là vùng đất địa đầu Tổ quốc, Hà Giang còn nổi tiếng tập trung nhiều địa danh lịch sử và những khu phố đậm nét văn hóa của các đồng bào dân tộc.'
    },
    {
        id: 6,
        imgSrc: img6,
        desTitle: 'Hội An',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "9.000.000",
        destination: 'Nằm bên bờ bắc hạ lưu sông Thu Bồn, Hội An mang trong mình vẻ đẹp của một đô thị cổ. Du lịch Hội An là phải kể tới các dãy nhà cổ màu vàng nghệ, dòng sông lung linh hoa đăng khi đêm xuống. Hay những món ăn đậm chất xứ Quảng làm nhung nhớ thực khách.'
    },
    {
        id: 7,
        imgSrc: img7,
        desTitle: 'Phú Quốc',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "18.000.000",
        destination: 'Không phải tự nhiên mà Phú Quốc được mệnh danh là “đảo ngọc” của Việt Nam. Nơi đây sở hữu những bãi biển quyến rũ nhất thế giới, có cả thiên nhiên đa dạng và những điểm dừng chân đậm chất văn hóa địa phương.'
    },
    {
        id: 8,
        imgSrc: img8,
        desTitle: 'Vịnh Hạ Long',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "14.000.000",
        destination: 'Vịnh Hạ Long là địa điểm du lịch nổi tiếng của Việt Nam. Nằm ở phần bờ Tây vịnh Bắc Bộ tại khu vực biển Đông Bắc Việt Nam. Với hàng nghìn hòn đảo kỳ vĩ, thành quả kì diệu của tạo hóa, vịnh Hạ Long được UNESCO nhiều lần công nhận là di sản thiên nhiên của thế giới.'
    },
    {
        id: 9,
        imgSrc: img9,
        desTitle: 'Vũng Tàu',
        location: 'Việt Nam',
        grade: 'THƯ GIÃN VÀ KHÁM PHÁ',
        fees: "6.000.000",
        destination: 'Vũng Tàu từ lâu đã được xem là một điểm đến du lịch hấp dẫn, bởi những vẻ đẹp tự nhiên của mình. Dù đến bất cứ đâu trong chuyến du lịch Vũng Tàu, du khách cũng sẽ bị cuốn hút bởi phong cảnh của nơi đây.'
    },
]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <section className='main container section'>
            <div data-aos="fade-up" className="secTitle">
                <h3 className="title">
                    Most visited destination
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, desTitle, location, grade, fees, destination }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imgDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">{desTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} <small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        {destination}
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <LuClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main
