import React from "react";
import '../../assets/sass/config/_variable.scss'

const GuidesPage = () => {
  return (
    <div className="guides-page">
      <div className="container">
        <div className="header">
          <h1>Cẩm Nang Cho Phụ Huynh</h1>
          <p>
            Cung cấp thông tin và hướng dẫn hữu ích về đồ chơi cho trẻ em, giúp phụ huynh đưa ra quyết định thông minh và đảm bảo sự phát triển tốt nhất cho trẻ.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Lời Khuyên Mua Sắm Đồ Chơi</h2>
          <div className="section-content">
            <p>Những yếu tố cần xem xét khi chọn đồ chơi cho trẻ, bao gồm độ tuổi, sự an toàn và chất lượng sản phẩm.</p>
            <img src="https://file.hstatic.net/200000067568/file/1_a62e51a9be53453ca01055c8378ed13f_grande.png" alt="Lời Khuyên Mua Sắm Đồ Chơi" />
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Hướng Dẫn Lựa Chọn Đồ Chơi Theo Độ Tuổi</h2>
          <div className="section-content">
            <p>Hướng dẫn chi tiết về các loại đồ chơi phù hợp với từng độ tuổi và giai đoạn phát triển của trẻ.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQuWA0TWnIt4hjwWqN6Rcul2x6-ARY8lytA&s" alt="Hướng Dẫn Lựa Chọn Đồ Chơi" />
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Kinh Nghiệm Sử Dụng Đồ Chơi</h2>
          <div className="section-content">
            <p>Các mẹo và hướng dẫn về cách sử dụng đồ chơi để đảm bảo an toàn và hiệu quả.</p>
            <img src="https://cissnewsletter.ca/wp-content/uploads/2021/01/cause-and-effect-images.jpg" alt="Kinh Nghiệm Sử Dụng Đồ Chơi" />
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Các Loại Đồ Chơi Phát Triển Kỹ Năng</h2>
          <div className="section-content">
            <p>Các loại đồ chơi giúp phát triển kỹ năng và khả năng của trẻ, như đồ chơi giáo dục, đồ chơi sáng tạo, và đồ chơi vận động.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-m30rtUA80irFsh-kCtt3MgJ-3FOF6VCmDw&s" alt="Các Loại Đồ Chơi Phát Triển Kỹ Năng" />
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">An Toàn Khi Sử Dụng Đồ Chơi</h2>
          <div className="section-content">
            <p>Hướng dẫn về cách đảm bảo an toàn khi sử dụng đồ chơi, bao gồm kiểm tra chất lượng và theo dõi trẻ khi chơi.</p>
            <img src="https://www.cpsc.gov/s3fs-public/11173152536_241301e4b6_b.jpg" alt="An Toàn Khi Sử Dụng Đồ Chơi" />
          </div>
        </div>

        {/* <div className="latest-articles">
          <h2>Bài Viết Mới Nhất</h2>
          <div className="article-item">
            <p>Tóm tắt về các bài viết mới nhất và xu hướng đồ chơi.</p>
          </div>
        </div>

        <div className="contact-expert">
          <h2>Liên Hệ Chuyên Gia</h2>
          <p>Thông tin liên hệ với các chuyên gia tư vấn về đồ chơi và sự phát triển của trẻ.</p>
        </div>

        <div className="newsletter-signup">
          <h2>Nhận Cẩm Nang Cập Nhật Mới</h2>
          <form>
            <input type="email" placeholder="Nhập email của bạn" />
            <button type="submit">Đăng ký</button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default GuidesPage;
