// import React from 'react';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import LinkedIn from 'react-linkedin-login-oauth2';
// import { useNavigate } from 'react-router-dom';

// const SocialSingIn = () => {
//   const navigate = useNavigate();

//   const responseFacebook = (response) => {
//     console.log(response);
//     if (response.status !== 'unknown') {
//       // Xử lý đăng nhập Facebook thành công
//       navigate('/dashboard');
//     } else {
//       // Xử lý lỗi
//     }
//   };

//   const responseGoogle = (response) => {
//     console.log(response);
//     if (response.profileObj) {
//       // Xử lý đăng nhập Google thành công
//       navigate('/dashboard');
//     } else {
//       // Xử lý lỗi
//     }
//   };

//   const handleLinkedInSuccess = (response) => {
//     console.log(response);
//     // Xử lý đăng nhập LinkedIn thành công
//     navigate('/dashboard');
//   };

//   const handleLinkedInFailure = (error) => {
//     console.error(error);
//     // Xử lý lỗi
//   };

//   return (
//     <div className="social-container">
//       <FacebookLogin
//         appId="YOUR_FACEBOOK_APP_ID"
//         autoLoad={false}
//         fields="name,email,picture"
//         callback={responseFacebook}
//         render={({ onClick }) => (
//           <button className="social" onClick={onClick}>
//             <i className="fab fa-facebook-f"></i>
//           </button>
//         )}
//       />
//       <GoogleLogin
//         clientId="YOUR_GOOGLE_CLIENT_ID"
//         buttonText="Login with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//         render={(renderProps) => (
//           <button className="social" onClick={renderProps.onClick}>
//             <i className="fab fa-google-plus-g"></i>
//           </button>
//         )}
//       />
//       <LinkedIn
//         clientId="YOUR_LINKEDIN_CLIENT_ID"
//         onFailure={handleLinkedInFailure}
//         onSuccess={handleLinkedInSuccess}
//         redirectUri="YOUR_REDIRECT_URI"
//         render={({ onClick }) => (
//           <button className="social" onClick={onClick}>
//             <i className="fab fa-linkedin-in"></i>
//           </button>
//         )}
//       />
//     </div>
//   );
// };

// export default SocialSingIn;
