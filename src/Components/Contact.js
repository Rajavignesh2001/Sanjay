// import React, { useState } from "react";
// import "../css/Contact.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import contact from "../Assets/contact.jpg";
// import bannerBtm from "../Assets/banner-btm.png";
// import contactLeft from "../Assets/contact-left.png";

// function Contact() {
//  // window.scrollTo(0, 0);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { firstName, lastName, email, phoneNumber, message } = formData;

//     if (!firstName || !lastName || !email || !phoneNumber || !message) {
//       toast.error('All fields are mandatory');
//       return;
//     }

//     toast.success('Submitted successfully. We will contact you shortly.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phoneNumber: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="contact">
//       <div className="contact-top">
//         <img className="img-one" src={contact} alt="Contact"></img>
//       </div>
//       <img className="banner-btm" src={bannerBtm} alt="Banner Bottom"></img>
//       <div className="contact-section">
//         <div className="section-left">
//           <img src={contactLeft} alt="Contact Left"></img>
//         </div>
//         <div className="section-right">
//           <div
//             style={{
//               display: "flex",
//               gap: "10px",
//               alignItems: "center",
//               marginBottom: "2rem",
//             }}
//           >
//             <h2 className="title-one">We Love To</h2>
//             <h3 className="title-two">Hear From You</h3>
//           </div>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="number"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
            // <input
            //   type="text"
            //   name="message"
            //   placeholder="Message"
            //   value={formData.message}
            //   onChange={handleChange}
            //   required
            // />
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <button type="submit" className="submit-btn">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import "../css/Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from "../Assets/contact.jpg";
import bannerBtm from "../Assets/banner-btm.png";
import contactLeft from "../Assets/contact-left.png";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = formData;

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      toast.error('All fields are mandatory');
      return;
    }

    toast.success('Thank You. We will contact you shortly!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <div className="contact-top">
        <img className="img-one" src={contact} alt="Contact"></img>
      </div>
      <img className="banner-btm" src={bannerBtm} alt="Banner Bottom"></img>
      <div className="contact-section">
        <div className="section-left">
          <img src={contactLeft} alt="Contact Left"></img>
        </div>
        <div className="section-right">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 className="title-one">We Love To</h2>
            <h3 className="title-two">Hear From You</h3>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
             <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
