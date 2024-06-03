import React from "react";
import "./style.scss";
import Navigation from "./Navigation/Navigation";

export const Header = () => {
  return (
    <header>
      <div className="header-top gradient">
        <div className="container">
          <div className="flex flex-wrap -mx-[10px] items-center announcement__bar">
            <div className="announcement md:w-4/12 px-[10px] w-full text-lg-start text-center">
              <p className="announcement-bar__message ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1635_4597)">
                    <path
                      d="M9.89173 18.1041C10.6577 17.3901 10.7757 16.2716 10.1552 15.606C9.5347 14.9404 8.41074 14.9796 7.64475 15.6937C6.87877 16.4077 6.76082 17.5262 7.3813 18.1918C8.00179 18.8574 9.12574 18.8182 9.89173 18.1041Z"
                      fill="#FCB833"
                    ></path>
                    <path
                      d="M20.0275 18.1048C20.7935 17.3908 20.9114 16.2724 20.2909 15.6067C19.6704 14.9411 18.5465 14.9804 17.7805 15.6944C17.0145 16.4085 16.8966 17.5269 17.517 18.1925C18.1375 18.8581 19.2615 18.8189 20.0275 18.1048Z"
                      fill="#FCB833"
                    ></path>
                    <path
                      d="M1.85469 9.36494C1.85469 8.92289 1.49634 8.56454 1.0543 8.56454C0.612253 8.56454 0.253906 8.92289 0.253906 9.36494C0.253906 9.80698 0.612253 10.1653 1.0543 10.1653C1.49634 10.1653 1.85469 9.80698 1.85469 9.36494Z"
                      fill="#FCB833"
                    ></path>
                    <path
                      d="M16.2408 16.7316C16.5253 15.3253 17.8538 14.2078 19.2816 14.2078C20.6564 14.2078 21.6473 15.2442 21.6202 16.5769C23.107 16.6158 23.5209 14.6578 23.5209 14.6578C23.6461 14.1103 23.8331 13.043 23.9897 11.9953C24.041 11.6718 24.0016 11.3405 23.8758 11.0381C23.4871 10.1308 23.0174 9.26041 22.4723 8.43749C21.9567 7.66827 21.0919 7.21265 20.1047 7.19624C19.5159 7.18686 18.938 7.18124 18.5016 7.18124L18.4978 7.17749C18.4416 6.23624 17.7553 5.5153 16.792 5.42905C16.1653 5.37327 13.6828 5.33249 12.4912 5.33249C12.0178 5.33249 11.3386 5.33905 10.6514 5.3503V5.34749H10.6458H2.38359C2.27844 5.34743 2.1743 5.36809 2.07714 5.40831C1.97997 5.44852 1.89169 5.50749 1.81733 5.58185C1.74297 5.65621 1.684 5.74449 1.64379 5.84166C1.60357 5.93882 1.58291 6.04296 1.58297 6.14811V6.15186C1.58297 6.36321 1.66693 6.5659 1.81637 6.71534C1.96581 6.86478 2.1685 6.94874 2.37984 6.94874H4.04531C4.24586 6.96353 4.4334 7.05358 4.57032 7.20085C4.70724 7.34812 4.78343 7.54171 4.78359 7.7428V7.74702C4.7839 7.85228 4.76345 7.95656 4.72341 8.05391C4.68337 8.15126 4.62453 8.23975 4.55026 8.31433C4.47598 8.38891 4.38773 8.44812 4.29055 8.48855C4.19337 8.52899 4.08916 8.54987 3.98391 8.54999H3.12984C2.91763 8.54999 2.71411 8.63429 2.56405 8.78435C2.41399 8.93441 2.32969 9.13793 2.32969 9.35015C2.32963 9.45526 2.35028 9.55936 2.39046 9.6565C2.43065 9.75363 2.48957 9.84189 2.56388 9.91624C2.63819 9.9906 2.72642 10.0496 2.82353 10.0898C2.92064 10.1301 3.02473 10.1508 3.12984 10.1508H3.98391C4.19625 10.1508 4.39989 10.2351 4.55003 10.3853C4.70018 10.5354 4.78453 10.7391 4.78453 10.9514C4.78453 11.1637 4.70018 11.3674 4.55003 11.5175C4.39989 11.6677 4.19625 11.752 3.98391 11.752H0.788906C0.576648 11.752 0.373077 11.8363 0.222945 11.9864C0.0728117 12.1364 -0.0115945 12.3399 -0.0117188 12.5522C-0.0117187 12.7645 0.0726326 12.9682 0.222779 13.1183C0.372925 13.2685 0.576567 13.3528 0.788906 13.3528H3.98391C4.19625 13.3528 4.39989 13.4372 4.55003 13.5873C4.70018 13.7374 4.78453 13.9411 4.78453 14.1534C4.78428 14.3656 4.69982 14.569 4.5497 14.7189C4.39958 14.8689 4.19608 14.9531 3.98391 14.9531H2.99578C2.78357 14.9531 2.58004 15.0374 2.42999 15.1875C2.27993 15.3375 2.19563 15.5411 2.19563 15.7533C2.19563 15.9655 2.27991 16.1691 2.42996 16.3192C2.58 16.4694 2.78352 16.5538 2.99578 16.5539L6.14859 16.5516L6.41063 15.8986C6.94734 14.9086 8.01516 14.2073 9.14578 14.2073C10.5741 14.2073 11.5884 15.3258 11.4769 16.733H16.2403M8.29969 8.92265H7.22531C7.2243 8.92273 7.22334 8.92314 7.22258 8.92381C7.22181 8.92449 7.22129 8.9254 7.22109 8.9264L7.12219 9.62952C7.12204 9.63008 7.12203 9.63067 7.12215 9.63124C7.12227 9.63181 7.12253 9.63235 7.12289 9.6328C7.12325 9.63326 7.12372 9.63362 7.12425 9.63387C7.12478 9.63411 7.12536 9.63423 7.12594 9.63421H7.92562C7.96488 9.63309 8.00388 9.64075 8.0398 9.65662C8.07572 9.6725 8.10764 9.69619 8.13324 9.72596C8.15884 9.75574 8.17747 9.79085 8.18778 9.82874C8.19808 9.86663 8.1998 9.90635 8.19281 9.94499C8.17911 10.0299 8.13623 10.1074 8.07155 10.1641C8.00687 10.2209 7.92443 10.2533 7.83844 10.2558H7.03781C7.03684 10.2557 7.03589 10.2561 7.03512 10.2567C7.03435 10.2573 7.03381 10.2581 7.03359 10.2591L6.89016 11.2805C6.87645 11.3654 6.83357 11.4429 6.76889 11.4996C6.70421 11.5563 6.62178 11.5887 6.53578 11.5912C6.49654 11.5924 6.45755 11.5847 6.42165 11.5688C6.38575 11.553 6.35385 11.5293 6.32828 11.4995C6.30272 11.4697 6.28413 11.4346 6.27388 11.3967C6.26364 11.3588 6.26199 11.3191 6.26906 11.2805L6.64125 8.63108C6.656 8.54138 6.70147 8.4596 6.76988 8.39974C6.83829 8.33988 6.92539 8.30567 7.01625 8.30296H8.38641C8.42564 8.30183 8.46464 8.30948 8.50054 8.32536C8.53644 8.34123 8.56834 8.36493 8.59391 8.39472C8.61947 8.42451 8.63806 8.45963 8.6483 8.49753C8.65855 8.53542 8.6602 8.57513 8.65313 8.61374C8.63923 8.69825 8.59636 8.7753 8.53188 8.83166C8.46739 8.88802 8.3853 8.92019 8.29969 8.92265ZM11.1713 8.5139C11.2829 8.61292 11.3614 8.74381 11.3963 8.8889C11.4352 9.05325 11.4416 9.22365 11.415 9.39046C11.3824 9.65001 11.2762 9.89481 11.1089 10.0959C11.0068 10.2167 10.877 10.3111 10.7306 10.3711C10.73 10.3718 10.7296 10.3727 10.7296 10.3737C10.7296 10.3746 10.73 10.3755 10.7306 10.3762L10.9969 11.1445C11.0686 11.3508 10.8844 11.5912 10.6552 11.5912H10.6402C10.5845 11.5929 10.5299 11.5768 10.484 11.5452C10.4382 11.5137 10.4035 11.4684 10.3852 11.4159L10.0631 10.4784C10.0627 10.4777 10.062 10.4771 10.0613 10.4767C10.0606 10.4763 10.0597 10.4761 10.0589 10.4761H9.37453C9.37358 10.4761 9.37266 10.4765 9.37191 10.4771C9.37115 10.4776 9.3706 10.4785 9.37031 10.4794L9.25781 11.28C9.24411 11.3649 9.20123 11.4424 9.13655 11.4991C9.07187 11.5559 8.98943 11.5883 8.90344 11.5908C8.8642 11.5919 8.8252 11.5842 8.7893 11.5684C8.7534 11.5525 8.7215 11.5288 8.69594 11.499C8.67037 11.4692 8.65179 11.4341 8.64154 11.3962C8.6313 11.3583 8.62965 11.3186 8.63672 11.28L9.00891 8.63061C9.02365 8.54092 9.06913 8.45913 9.13754 8.39927C9.20595 8.33941 9.29304 8.3052 9.38391 8.30249H10.4433C10.4433 8.30249 10.9083 8.28796 11.1713 8.5139ZM14.0869 8.59171C14.0741 8.67104 14.0341 8.74344 13.9737 8.79641C13.9133 8.84938 13.8363 8.87961 13.7559 8.88186H12.5236C12.5226 8.88192 12.5217 8.88226 12.521 8.88284C12.5202 8.88343 12.5197 8.88423 12.5194 8.88515L12.4214 9.58077C12.4213 9.58133 12.4212 9.58192 12.4214 9.58249C12.4215 9.58306 12.4217 9.5836 12.4221 9.58405C12.4225 9.58451 12.4229 9.58487 12.4235 9.58511C12.424 9.58536 12.4246 9.58548 12.4252 9.58546H13.3823C13.419 9.58437 13.4554 9.5915 13.489 9.6063C13.5225 9.62111 13.5524 9.64323 13.5763 9.67104C13.6002 9.69885 13.6175 9.73166 13.6271 9.76705C13.6367 9.80244 13.6383 9.83954 13.6317 9.87561C13.619 9.95495 13.5789 10.0273 13.5185 10.0803C13.4581 10.1333 13.3811 10.1635 13.3008 10.1658H12.3431C12.3422 10.1658 12.3413 10.1662 12.3405 10.1668C12.3397 10.1673 12.3392 10.1681 12.3389 10.1691L12.2213 11.0062C12.2212 11.0074 12.2217 11.0085 12.2225 11.0094C12.2232 11.0103 12.2243 11.0108 12.2255 11.0109H13.4569C13.4935 11.0098 13.53 11.017 13.5635 11.0318C13.5971 11.0466 13.6269 11.0687 13.6508 11.0965C13.6747 11.1243 13.6921 11.1571 13.7017 11.1925C13.7113 11.2279 13.7128 11.265 13.7062 11.3011C13.6935 11.3804 13.6535 11.4528 13.5931 11.5058C13.5326 11.5588 13.4556 11.589 13.3753 11.5912H11.8472C11.806 11.5918 11.7651 11.5833 11.7275 11.5664C11.6899 11.5494 11.6565 11.5244 11.6297 11.4931C11.6029 11.4617 11.5832 11.4249 11.5722 11.3852C11.5612 11.3454 11.5591 11.3038 11.5659 11.2631L11.9358 8.63249C11.9505 8.54279 11.996 8.46101 12.0644 8.40115C12.1328 8.34129 12.2199 8.30707 12.3108 8.30436H13.8384C13.8747 8.3035 13.9108 8.31068 13.944 8.32539C13.9772 8.3401 14.0067 8.36197 14.0304 8.38943C14.0542 8.4169 14.0716 8.44928 14.0813 8.48425C14.0911 8.51922 14.093 8.55592 14.0869 8.59171ZM16.6467 8.59171C16.634 8.67104 16.5939 8.74344 16.5335 8.79641C16.4731 8.84938 16.3961 8.87961 16.3158 8.88186H15.0834C15.0825 8.88192 15.0816 8.88226 15.0808 8.88284C15.0801 8.88343 15.0795 8.88423 15.0792 8.88515L14.9817 9.58077C14.9816 9.58133 14.9816 9.58192 14.9817 9.58249C14.9818 9.58306 14.9821 9.5836 14.9824 9.58405C14.9828 9.58451 14.9832 9.58487 14.9838 9.58511C14.9843 9.58536 14.9849 9.58548 14.9855 9.58546H15.9427C15.9793 9.58437 16.0157 9.5915 16.0493 9.6063C16.0828 9.62111 16.1127 9.64323 16.1366 9.67104C16.1605 9.69885 16.1779 9.73166 16.1875 9.76705C16.1971 9.80244 16.1986 9.83954 16.192 9.87561C16.1793 9.95495 16.1393 10.0273 16.0788 10.0803C16.0184 10.1333 15.9414 10.1635 15.8611 10.1658H14.903C14.902 10.1658 14.9011 10.1662 14.9003 10.1668C14.8996 10.1673 14.899 10.1681 14.8988 10.1691L14.7811 11.0062C14.7811 11.0074 14.7815 11.0085 14.7823 11.0094C14.7831 11.0103 14.7842 11.0108 14.7853 11.0109H16.0167C16.0534 11.0098 16.0898 11.017 16.1234 11.0318C16.1569 11.0466 16.1867 11.0687 16.2106 11.0965C16.2345 11.1243 16.2519 11.1571 16.2615 11.1925C16.2711 11.2279 16.2727 11.265 16.2661 11.3011C16.2534 11.3804 16.2133 11.4528 16.1529 11.5058C16.0925 11.5588 16.0155 11.589 15.9352 11.5912H14.407C14.3658 11.5918 14.3249 11.5833 14.2874 11.5664C14.2498 11.5494 14.2164 11.5244 14.1896 11.4931C14.1627 11.4617 14.1431 11.4249 14.1321 11.3852C14.1211 11.3454 14.1189 11.3038 14.1258 11.2631L14.4956 8.63249C14.5104 8.54279 14.5558 8.46101 14.6243 8.40115C14.6927 8.34129 14.7798 8.30707 14.8706 8.30436H16.3983C16.4346 8.3035 16.4706 8.31068 16.5038 8.32539C16.537 8.3401 16.5665 8.36197 16.5903 8.38943C16.614 8.4169 16.6314 8.44928 16.6412 8.48425C16.6509 8.51922 16.6528 8.55592 16.6467 8.59171ZM18.428 8.29124C18.8466 8.29124 19.3884 8.29686 19.9322 8.30577C20.5912 8.31655 21.1678 8.61936 21.5138 9.13593C21.8833 9.69299 22.2154 10.274 22.508 10.875C22.6627 11.19 22.3781 11.6001 22.0055 11.6001H18.0094L18.428 8.29124Z"
                      fill="#FCB833"
                    ></path>
                    <path
                      d="M10.1928 9.89625H9.45215L9.59277 8.88187H10.3329C10.3329 8.88187 10.8762 8.84672 10.7871 9.38906C10.7895 9.38906 10.7271 9.89625 10.1928 9.89625Z"
                      fill="#FCB833"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1635_4597">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span>Miễn phí giao hàng đơn từ 500k</span>
              </p>
            </div>
            <div className="announcement md:w-4/12 px-[10px] w-full lg:text-center text-center">
              <p className="announcement-bar__message ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M3.89355 13.7625H3.88636C3.48367 13.7625 3.15723 14.089 3.15723 14.4917V14.4988C3.15723 14.9015 3.48367 15.228 3.88636 15.228H3.89355C4.29624 15.228 4.62269 14.9015 4.62269 14.4988V14.4917C4.62269 14.089 4.29624 13.7625 3.89355 13.7625Z"
                    fill="#FCB833"
                  ></path>
                  <path
                    d="M18.4618 13.5084C18.4418 12.6774 17.9723 11.8429 17.1863 11.4307C15.8928 10.7456 14.4726 10.16 13.1725 9.71179C12.647 9.53129 12.0763 9.53129 11.5507 9.71179C11.161 9.84711 10.7629 9.99307 10.3603 10.1493C12.0855 10.7153 14.1073 11.4798 16.0021 12.4158C16.1828 12.5048 16.3369 12.6396 16.4491 12.8067C16.5614 12.9739 16.6279 13.1676 16.6419 13.3684C16.6938 14.3101 16.7188 15.2814 16.7128 16.2503C16.7128 16.3537 16.6094 16.4203 16.5253 16.3703L16.0681 16.0971C16.0465 16.0843 16.0208 16.08 15.9962 16.0851C15.9716 16.0902 15.9497 16.1043 15.9349 16.1246C15.7358 16.3859 15.5316 16.6505 15.3224 16.9185C15.3055 16.9416 15.2817 16.9587 15.2544 16.9673C15.2271 16.9759 15.1977 16.9754 15.1707 16.9661C15.1436 16.9567 15.1203 16.9388 15.1042 16.9152C15.0881 16.8915 15.08 16.8633 15.0811 16.8347C15.0936 15.8627 15.0839 14.8773 15.0533 13.9247C15.0441 13.7173 14.9771 13.5165 14.8599 13.345C14.7428 13.1736 14.58 13.0383 14.3901 12.9543C12.4171 12.0708 10.4606 11.3604 8.78983 10.8185H8.78483H8.78233H4.26374C4.07041 10.8185 3.88503 10.8954 3.74836 11.0321C3.61169 11.1689 3.53491 11.3543 3.53491 11.5476V11.5551C3.53491 11.7484 3.6117 11.9338 3.74838 12.0705C3.88506 12.2071 4.07044 12.2839 4.26374 12.2839H6.62992V12.2861C6.81357 12.2995 6.98534 12.3819 7.11074 12.5168C7.23613 12.6516 7.30587 12.8289 7.30593 13.0131V13.0206C7.30597 13.1164 7.28711 13.2113 7.25043 13.2999C7.21374 13.3885 7.15996 13.4689 7.09215 13.5367C7.02434 13.6044 6.94383 13.6581 6.85524 13.6948C6.76665 13.7314 6.67171 13.7501 6.57585 13.75H5.78733C5.59417 13.75 5.4089 13.8267 5.2722 13.9631C5.13549 14.0996 5.05853 14.2847 5.0582 14.4779V14.4854C5.05828 14.6788 5.13512 14.8642 5.27185 15.0009C5.40857 15.1376 5.59398 15.2145 5.78733 15.2145H6.57585C6.67159 15.2145 6.76639 15.2334 6.85484 15.2701C6.94328 15.3067 7.02364 15.3604 7.09132 15.4281C7.159 15.4958 7.21268 15.5762 7.24929 15.6647C7.2859 15.7531 7.30472 15.8479 7.30468 15.9437V15.9509C7.30472 16.0466 7.2859 16.1414 7.24929 16.2299C7.21268 16.3183 7.159 16.3987 7.09132 16.4664C7.02364 16.5341 6.94328 16.5879 6.85484 16.6245C6.76639 16.6611 6.67159 16.68 6.57585 16.68H3.22426C3.03088 16.68 2.84542 16.7568 2.70868 16.8936C2.57194 17.0303 2.49512 17.2158 2.49512 17.4091V17.4163C2.49512 17.6097 2.57194 17.7952 2.70868 17.9319C2.84542 18.0687 3.03088 18.1455 3.22426 18.1455H6.57585C6.67166 18.1455 6.76651 18.1644 6.855 18.2012C6.94349 18.2379 7.02388 18.2917 7.09156 18.3595C7.15925 18.4273 7.21291 18.5078 7.24948 18.5963C7.28604 18.6849 7.3048 18.7797 7.30468 18.8756V18.8831C7.30468 19.0763 7.22789 19.2617 7.09121 19.3984C6.95453 19.5351 6.76915 19.6119 6.57585 19.6119H5.24447C5.05114 19.612 4.86576 19.6888 4.72909 19.8255C4.59242 19.9623 4.51564 20.1477 4.51564 20.341V20.3485C4.51564 20.5418 4.59242 20.7273 4.72909 20.864C4.86576 21.0007 5.05114 21.0776 5.24447 21.0777H8.55325C9.53022 21.5345 10.5308 21.9391 11.5507 22.2897C12.0763 22.4702 12.647 22.4702 13.1725 22.2897C14.4726 21.8415 15.8915 21.2558 17.1863 20.5707C17.9723 20.1585 18.4418 19.324 18.4618 18.493C18.513 16.8312 18.513 15.1696 18.4618 13.5084Z"
                    fill="#FCB833"
                  ></path>
                  <rect
                    x="11.5"
                    y="1"
                    width="12"
                    height="12"
                    rx="6"
                    fill="#CF102D"
                  ></rect>
                  <path
                    d="M15.1343 4.53812C15.2364 4.50224 15.3518 4.47235 15.4807 4.44843C15.6149 4.42451 15.7357 4.41256 15.8431 4.41256C15.9666 4.41256 16.0847 4.4275 16.1975 4.4574C16.3156 4.48132 16.4203 4.52616 16.5116 4.59193C16.6029 4.65172 16.6753 4.73543 16.729 4.84305C16.7827 4.95067 16.8096 5.0852 16.8096 5.24664V7.63229H17.5264C17.5586 7.69806 17.5908 7.78475 17.623 7.89238C17.6553 8 17.6714 8.1136 17.6714 8.23318C17.6714 8.46039 17.6257 8.62182 17.5345 8.71749C17.4432 8.81315 17.3277 8.86099 17.1881 8.86099H16.8096V9.91928C16.7505 9.93124 16.6619 9.94619 16.5438 9.96413C16.4257 9.98804 16.3129 10 16.2055 10C16.0874 10 15.9827 9.99402 15.8914 9.98206C15.8001 9.97011 15.7223 9.9432 15.6578 9.90135C15.5988 9.85351 15.5531 9.78774 15.5209 9.70404C15.4887 9.62033 15.4726 9.50673 15.4726 9.36323V8.86099H13.451C13.3275 8.78924 13.2201 8.6846 13.1289 8.54708C13.043 8.40359 13 8.23019 13 8.02691C13 7.9133 13.0134 7.78774 13.0403 7.65022C13.0671 7.51271 13.1128 7.39312 13.1772 7.29148L15.1343 4.53812ZM15.5451 5.94619H15.5209L14.4497 7.63229H15.5451V5.94619Z"
                    fill="white"
                  ></path>
                  <path
                    d="M22 9.91928C21.9463 9.93722 21.8604 9.95516 21.7423 9.97309C21.6295 9.99103 21.5114 10 21.3879 10C21.2698 10 21.1624 9.99103 21.0657 9.97309C20.9744 9.95516 20.8966 9.91928 20.8322 9.86547C20.7677 9.81166 20.7167 9.73991 20.6791 9.65022C20.6469 9.55456 20.6308 9.43199 20.6308 9.28251V7.29148C20.6308 7.04634 20.5744 6.87593 20.4617 6.78027C20.3543 6.67862 20.22 6.6278 20.059 6.6278C19.9516 6.6278 19.8496 6.64275 19.7529 6.67265C19.6563 6.70254 19.5784 6.73842 19.5193 6.78027V9.91928C19.4656 9.93722 19.3797 9.95516 19.2616 9.97309C19.1489 9.99103 19.0307 10 18.9072 10C18.7891 10 18.6817 9.99103 18.5851 9.97309C18.4938 9.95516 18.4159 9.91928 18.3515 9.86547C18.2871 9.81166 18.2361 9.73991 18.1985 9.65022C18.1663 9.55456 18.1501 9.43199 18.1501 9.28251V4.08072C18.2092 4.06876 18.2951 4.05381 18.4079 4.03587C18.526 4.01196 18.6441 4 18.7623 4C18.8804 4 18.9851 4.00897 19.0764 4.02691C19.173 4.04484 19.2536 4.08072 19.318 4.13453C19.3824 4.18834 19.4307 4.26308 19.463 4.35874C19.5005 4.44843 19.5193 4.56801 19.5193 4.71749V5.59641C19.5891 5.56652 19.6938 5.53363 19.8335 5.49776C19.9784 5.4559 20.1368 5.43498 20.3086 5.43498C20.8402 5.43498 21.2537 5.58445 21.549 5.88341C21.8497 6.17638 22 6.61584 22 7.20179V9.91928Z"
                    fill="white"
                  ></path>
                </svg>
                <span>Giao hàng hỏa tốc 4 tiếng</span>
              </p>
            </div>
            <div className="announcement md:w-4/12 px-[10px] w-full lg:text-lefft text-center">
              <p className="announcement-bar__message ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.40139 3.68479C3.5372 3.27593 3.9196 3 4.35041 3H19.6505C20.0814 3 20.4638 3.27593 20.5996 3.68479L21.8323 7.39621C22.2308 8.59591 21.8917 9.78235 21.1458 10.633C21.0989 10.6865 21.0505 10.7386 21.0005 10.7894V18C21.0005 19.6569 19.6574 21 18.0005 21H6.00046C4.34362 21 3.00047 19.6569 3.00047 18V10.7894C2.95049 10.7386 2.90204 10.6865 2.85519 10.633C2.10924 9.78236 1.77019 8.59591 2.16867 7.39622L3.40139 3.68479ZM16.0005 19V14C16.0005 13.4477 15.5528 13 15.0005 13H9.00046C8.44818 13 8.00046 13.4477 8.00046 14V19H6.00046C5.44818 19 5.00047 18.5523 5.00047 18V11.888C5.32072 11.9613 5.65611 12 6.00137 12C7.17664 12 8.31132 11.5235 9.06988 10.7225C9.80028 11.5083 10.843 12 12.0005 12C13.158 12 14.2007 11.5083 14.9311 10.7225C15.6896 11.5235 16.8243 12 17.9996 12C18.3448 12 18.6803 11.9613 19.0005 11.888V18C19.0005 18.5523 18.5528 19 18.0005 19H16.0005Z"
                    fill="#FCB833"
                  ></path>
                </svg>
                <span>Hệ thống 232 cửa hàng</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-sticky">
          <div className="container">
            <div className="flex flex-wrap justify-between -mx-[15px] items-center relative">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
