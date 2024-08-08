import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ActionsItem } from "@assets/images/icon/ActionItem";

const Action = () => {
  const [actions] = useState([
    {
      svg: (
        <svg
          className="icon icon-account"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 19.8642 3.27532 21.4306 5.00111 21.8743C5.32039 21.9563 5.6551 22 6 22H18C18.3449 22 18.6796 21.9563 18.9989 21.8743C20.7247 21.4306 22 19.8642 22 18V6C22 3.79086 20.2091 2 18 2ZM12 13C14.4617 13 16.5783 14.6062 17.5115 16.9071C17.9491 17.986 17.0067 19 15.8425 19H8.15752C6.99332 19 6.05092 17.986 6.48849 16.9071C7.42174 14.6062 9.53834 13 12 13ZM12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "account",
      description: "Đăng nhập",
      slug: "user",
    },
    {
      svg: (
        <svg
          className="icon icon-cart-empty"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_1635_4470)">
            <path
              d="M23.1463 10.2984C21.8432 10.0106 20.5124 9.77016 19.1915 9.58454H19.1863L19.1394 9.57797C18.9852 9.55735 18.83 9.53766 18.6749 9.51797C18.657 9.43529 18.6293 9.35503 18.5924 9.27891L14.8255 1.47844C14.7675 1.34751 14.6838 1.22958 14.5793 1.13166C14.4748 1.03375 14.3516 0.957859 14.2172 0.908504C14.0828 0.859148 13.9398 0.837336 13.7968 0.844366C13.6537 0.851396 13.5136 0.887125 13.3846 0.949426C13.2557 1.01173 13.1406 1.09933 13.0462 1.20702C12.9518 1.3147 12.88 1.44028 12.8352 1.57627C12.7903 1.71226 12.7732 1.85589 12.785 1.99861C12.7968 2.14133 12.8371 2.28023 12.9036 2.40704L16.2111 9.255C13.4089 9.02649 10.5927 9.02649 7.79052 9.255L11.0971 2.40704C11.2203 2.15205 11.2371 1.85858 11.1439 1.59117C11.0508 1.32376 10.8552 1.10431 10.6002 0.981098C10.4739 0.92012 10.3369 0.884613 10.1969 0.876606C10.0569 0.868598 9.91664 0.888247 9.78423 0.93443C9.65181 0.980614 9.5298 1.05243 9.42514 1.14577C9.32048 1.23911 9.23524 1.35215 9.17427 1.47844L5.40692 9.27844C5.37001 9.35456 5.34231 9.43482 5.32442 9.5175C5.16927 9.53719 5.01411 9.55641 4.85989 9.5775H4.85474C3.51739 9.765 2.17114 10.0069 0.853018 10.298C0.591417 10.356 0.360415 10.5084 0.20428 10.7262C0.0481457 10.944 -0.0221383 11.2117 0.00689731 11.4781C0.0359329 11.7444 0.162246 11.9907 0.361629 12.1697C0.561013 12.3487 0.819443 12.4479 1.08739 12.4481C1.16622 12.448 1.24479 12.4393 1.32177 12.4223L1.40333 12.4045C1.48489 13.3223 1.66817 14.5702 2.01271 16.2928C2.35724 18.0155 2.67177 19.2961 2.93708 20.228C3.39271 21.7748 4.81583 22.9772 6.3388 23.0738C7.25942 23.1234 10.2711 23.1164 11.9999 23.1253C13.7286 23.1164 16.7404 23.1253 17.661 23.0738C19.1835 22.9772 20.6071 21.7739 21.0622 20.228C21.3266 19.2961 21.6416 18.0202 21.9866 16.2933C22.3316 14.5664 22.514 13.3228 22.596 12.405L22.6775 12.4228C22.8182 12.4569 22.9643 12.4626 23.1072 12.4395C23.2501 12.4164 23.387 12.3651 23.5098 12.2884C23.6326 12.2118 23.7389 12.1114 23.8224 11.9932C23.9059 11.875 23.965 11.7412 23.9962 11.5999C24.0274 11.4585 24.0301 11.3124 24.0041 11.17C23.9781 11.0276 23.9239 10.8918 23.8447 10.7706C23.7656 10.6494 23.663 10.5452 23.5431 10.4641C23.4232 10.383 23.2883 10.3267 23.1463 10.2984ZM5.56817 14.0733C5.36686 14.0734 5.17004 14.0138 5.00262 13.902C4.83519 13.7902 4.70469 13.6313 4.6276 13.4453C4.55052 13.2593 4.53033 13.0547 4.56958 12.8572C4.60883 12.6598 4.70576 12.4784 4.84811 12.336C4.99046 12.1937 5.17184 12.0968 5.36929 12.0575C5.56674 12.0183 5.77139 12.0384 5.95736 12.1155C6.14333 12.1926 6.30227 12.3231 6.41405 12.4905C6.52584 12.658 6.58545 12.8548 6.58536 13.0561C6.5853 13.1898 6.55889 13.3222 6.50763 13.4457C6.45637 13.5692 6.38128 13.6814 6.28663 13.7759C6.19199 13.8704 6.07966 13.9452 5.95606 13.9963C5.83246 14.0473 5.70002 14.0735 5.5663 14.0733H5.56817ZM18.4354 14.0733C18.2341 14.0733 18.0373 14.0136 17.8699 13.9017C17.7026 13.7899 17.5721 13.6309 17.4951 13.445C17.4181 13.259 17.398 13.0543 17.4373 12.8569C17.4766 12.6595 17.5736 12.4782 17.7159 12.3359C17.8583 12.1936 18.0397 12.0967 18.2371 12.0575C18.4346 12.0183 18.6392 12.0385 18.8251 12.1156C19.0111 12.1927 19.17 12.3232 19.2817 12.4906C19.3935 12.658 19.4531 12.8548 19.453 13.0561C19.453 13.1899 19.4266 13.3223 19.3754 13.4459C19.3241 13.5695 19.249 13.6817 19.1543 13.7762C19.0596 13.8707 18.9471 13.9455 18.8235 13.9965C18.6998 14.0475 18.5673 14.0736 18.4335 14.0733H18.4354Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1635_4470">
              <rect width="24" height="24" fill="currentColor"></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      name: "cart",
      description: "Giỏ hàng",
      slug: "cart",
    },
  ]);

  const actionList = actions.map((action, index) => (
    <ActionsItem
      key={index}
      name={action.name}
      icon={action.svg}
      slug={action.slug}
      description={action.description}
    />
  ));

  return (
    <>
      {actionList}
      <Link to="" className="actions-btn actions-btn-menu d-block d-lg-none ">
        <GiHamburgerMenu />
      </Link>
    </>
  );
};

export default Action;
