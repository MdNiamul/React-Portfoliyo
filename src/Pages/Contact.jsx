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
    .then(() => alert("Message Sent Successfully"))
    .catch(() => alert("Failed to send message"));
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
    <section id="contact" className="max-w-7xl mx-auto px-6 py-28">

      {/* Section Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
            bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          I'm open for work! Reach out via social media or send a direct message.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-16 justify-center items-start">

        {/* Social Media Links */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-6 justify-items-center md:justify-items-start">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center text-2xl 
                rounded-full bg-gradient-to-br from-blue-500 to-purple-500 
                text-white hover:scale-110 hover:shadow-xl transition transform duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:w-2/5 w-full bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-xl transition transform duration-300"
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