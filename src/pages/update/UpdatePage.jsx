import React from "react";
import { Link } from "react-router-dom";

const UpdatePage = () => {
  return (
    <>
      <div className="update-page">
        <div className="container">
          <div className="content-wrapper">
            <h1>Trang Đang Cập Nhật</h1>
            <p>
              Chúng tôi đang làm việc chăm chỉ để mang đến cho bạn những chương
              trình khuyến mãi tuyệt vời nhất. Vui lòng quay lại sau!
            </p>
            <img
              src="https://dichvuquantriweb.com/wp-content/uploads/2017/03/dichvuquantriweb-4-cach-xay-dung-hinh-anh-dep-trong-thiet-ke-website.jpg"
              alt="Trang đang được cập nhật"
            />
            <p>
              Trong thời gian chờ đợi, bạn có thể
              <Link to="/product/new">khám phá các sản phẩm mới nhất</Link> hoặc
              <Link to="/product/guides">
                xem các bài viết trên blog của chúng tôi
              </Link>
              .
            </p>
            <p>Xin lỗi vì sự bất tiện này. Cảm ơn bạn đã thông cảm!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
