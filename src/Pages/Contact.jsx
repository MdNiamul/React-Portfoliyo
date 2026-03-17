// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

// const Contact = () => {

//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm(
//             "service_o8wytaj",   // service id
//             "template_4eiq2c1",  // template id
//             form.current,
//             "hkjzhCbZkDhhg2onG"     // public key
//         )
//             .then(() => {
//                 alert("Message Sent Successfully");
//             })
//             .catch(() => {
//                 alert("Failed to send message");
//             });
//     };

//     const socialLinks = [
//         { id: 1, icon: <FaFacebookF />, link: "https://web.facebook.com/niamul.islam.480597/" },
//         { id: 2, icon: <FaTwitter />, link: "#" },
//         { id: 3, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/niamul-hossain-948554240/" },
//         { id: 4, icon: <FaGithub />, link: "https://github.com/MdNiamul" },
//         { id: 5, icon: <FaInstagram />, link: "#" },
//         { id: 6, icon: <FaWhatsapp />, link: "https://call.whatsapp.com/" }
//     ];

//     return (
//         <section id="contact" className="max-w-7xl mx-auto px-6 py-20">

//             <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
// //                           bg-[length:200%_100%] bg-clip-text text-transparent
// //                           animate-[shine_3s_linear_infinite]">
//                 Contact Me
//             </h1>

//             <div className="flex justify-around md:flex-row gap-10">

//                 {/* Social Icons */}
//                 <div className="md:w-1/5 grid grid-cols-2 gap-4 justify-items-center md:justify-items-start">
//                     {socialLinks.map((social) => (
//                         <a
//                             key={social.id}
//                             href={social.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-gray-500 hover:bg-blue-600 hover:text-white transition"
//                         >
//                             {social.icon}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Contact Form */}
//                 <div className="md:w-2/5">

//                     <p className="text-gray-600 mb-6 bg-gradient-to-r from-red-500 via-blue-500 to-green-500
// //                           bg-[length:200%_100%] bg-clip-text text-transparent
// //                           animate-[shine_3s_linear_infinite]">
//                         I'm open for work! Feel free to reach out via social media or send a message directly.
//                     </p>

//                     <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">

//                         <input
//                             type="text"
//                             name="user_name"  // change from 'name' to 'user_name'
//                             placeholder="Your Name"
//                             className="border border-gray-500 rounded-md p-2.5 text-sm"
//                         />

//                         <input
//                             type="email"
//                             name="user_email"  // change from 'email' to 'user_email'
//                             placeholder="Your Email"
//                             className="border border-gray-400 rounded-md p-2.5 text-sm"
//                         />

//                         <textarea
//                             name="message"
//                             placeholder="Your Message"
//                             rows="4"
//                             className="border border-gray-500 rounded-md p-2.5 text-sm"
//                         ></textarea>

//                         <button
//                             type="submit"
//                             className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm hover:bg-blue-700 transition"
//                         >
//                             Send Message
//                         </button>

//                     </form>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_o8wytaj",
      "template_4eiq2c1",
      form.current,
      "hkjzhCbZkDhhg2onG"
    )
      .then(() => {
        alert("Message Sent Successfully");
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, link: "https://web.facebook.com/niamul.islam.480597/" },
    { id: 2, icon: <FaTwitter />, link: "#" },
    { id: 3, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/niamul-hossain-948554240/" },
    { id: 4, icon: <FaGithub />, link: "https://github.com/MdNiamul" },
    { id: 5, icon: <FaInstagram />, link: "#" },
    { id: 6, icon: <FaWhatsapp />, link: "https://call.whatsapp.com/" }
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row gap-10">

        {/* Social Icons */}
        <div className="md:w-1/4 flex flex-wrap gap-4 justify-center md:justify-start">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 text-white transition-all duration-300 shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:w-3/4 bg-gray-800 p-8 rounded-2xl shadow-xl">
          <p className="text-gray-300 mb-6 text-lg bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
            I'm open for work! Feel free to reach out via social media or send a message directly.
          </p>

          <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="border border-gray-600 rounded-lg p-3 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="border border-gray-600 rounded-lg p-3 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="border border-gray-600 rounded-lg p-3 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r cursor-pointer from-blue-500 to-green-400 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;