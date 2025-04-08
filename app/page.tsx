import Image from "next/image";
import "../style/style.css"
import FadeUpWhenVisible from "@/compronents/FadeUpWhenVisible";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const page = () => {
  return (
    <main className="mt-16">
      <section id="Home">
        <div className="relative w-full overflow-hidden mt-16 p-6" style={{ height: 'calc(100vh - 4rem)' }}>
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30">
            <img
              src="img/HomeImg.png"
              alt="Background"
              className="object-contain max-h-full"
            />
          </div>
          <div className="absolute inset-0 z-10 flex flex-col justify-between">
            <FadeUpWhenVisible>
              <div className="p-10 text-white text-xl font-bold">Tech Company</div>
            </FadeUpWhenVisible>

            <FadeUpWhenVisible>
              <div className="flex justify-center items-center flex-1 px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">
                  สินค้าคุณภาพ เพื่อชีวิตที่มีคุณภาพ
                </h1>
              </div>
            </FadeUpWhenVisible>

            <FadeUpWhenVisible>
              <div className="flex justify-end p-4 text-lg font-bold items-center">
                <a
                  href="#About"
                  className="flex items-center gap-x-2 bg-white text-gray-950 p-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-white"
                >
                  <FontAwesomeIcon icon={faBook} className="w-4 h-4" />
                  Learn more
                </a>
              </div>


            </FadeUpWhenVisible>
          </div>

          <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
        </div>
      </section>
      <section id="About">
        <div>
          {/*1*/}
          <div className="relative w-full flex flex-col p-10 0overflow-hidden " style={{ height: 'calc(100vh - 4rem)' }}>
            <video
              className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
              autoPlay
              loop
              muted
            >
              <source src="/img/Techvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="backdrop-blur-md bg-white/10 rounded-xl h-[100%] md:w-1/2 w-full">
              <div className="text-white z-10 p-10">
                <FadeUpWhenVisible>
                  <h1 className="text-5xl font-bold">Tech Company</h1>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                  <h1 className="text-2xl font-bold mt-1">สร้างผลิตภัณฑ์เทคโนโลยีที่สำคัญ</h1>
                </FadeUpWhenVisible>
                <FadeUpWhenVisible>
                  <p className="text-l mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, animi reprehenderit architecto harum ipsam rerum laborum cum molestiae necessitatibus laboriosam minus excepturi nisi nostrum modi est unde, sapiente maxime assumenda.</p>
                </FadeUpWhenVisible>
              </div>
            </div>

          </div>
          {/*2*/}
          <div className="relative w-full bg-gray-900 p-10" style={{ minHeight: 'calc(100vh - 4rem)' }}>
            <div className="text-white z-10 p-10">
              <FadeUpWhenVisible>
                <h1 className="text-5xl font-bold">เกี่ยวกับผลิตภัณฑ์ของเรา</h1>
              </FadeUpWhenVisible>
            </div>

            <div className="w-full py-10">
              <FadeUpWhenVisible>
                <div className="max-w-full mx-auto flex flex-col md:flex-row gap-6 px-4 sm:px-6 lg:px-8">
                  <div className="flex-1 rounded-xl p-6 sm:p-8 text-white text-xl font-semibold bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg">
                    <h1 className="text-3xl font-bold">เฉพาะที่มีคุณภาพสูงสุดเท่านั้น</h1>
                    <p className="text-base mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quae commodi aliquam quibusdam architecto ipsum tempore, eius eos autem perferendis perspiciatis nostrum, fugiat harum nobis animi earum cum pariatur laudantium.
                    </p>
                  </div>
                  <div className="flex-1 rounded-xl p-6 sm:p-8 text-white text-xl font-semibold bg-gradient-to-br from-purple-400 to-blue-400 shadow-lg">
                    <h1 className="text-3xl font-bold">เฉพาะที่มีคุณภาพสูงสุดเท่านั้น</h1>
                    <p className="text-base mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quae commodi aliquam quibusdam architecto ipsum tempore, eius eos autem perferendis perspiciatis nostrum, fugiat harum nobis animi earum cum pariatur laudantium.
                    </p>
                  </div>
                  <div className="flex-1 rounded-xl p-6 sm:p-8 text-white text-xl font-semibold bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg">
                    <h1 className="text-3xl font-bold">เฉพาะที่มีคุณภาพสูงสุดเท่านั้น</h1>
                    <p className="text-base mt-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quae commodi aliquam quibusdam architecto ipsum tempore, eius eos autem perferendis perspiciatis nostrum, fugiat harum nobis animi earum cum pariatur laudantium.
                    </p>
                  </div>
                </div>
              </FadeUpWhenVisible>
            </div>
          </div>
          {/*3*/}
          <div
            className="bg-gradient-to-br from-blue-400 to-purple-400 p-10 relative w-full overflow-hidden"
            style={{ minHeight: 'calc(100vh - 4rem)' }}
          >
            {/* รูปด้านหลังฝั่งซ้าย */}
            <Image
              src="/img/about3img.png"
              alt=""
              width={400}
              height={400}
              className="absolute left-0 bottom-0 md:left-10 md:bottom-10 w-[300px] opacity-30 rotate-[22deg] z-0 pointer-events-none"
            />

            {/* head */}
            <FadeUpWhenVisible>
              <h1 className="text-5xl font-bold text-white relative z-10 text-center md:text-left">สิ่งที่เราได้ทำ</h1>
            </FadeUpWhenVisible>

            {/* content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 space-y-4 p-5 mt-6 text-white">
                {/* 1 */}
                <FadeUpWhenVisible>
                  <div className="min-w-[300px] bg-gray-950 bg-opacity-20 rounded-xl p-4 shadow-md relative flex flex-col justify-end items-start text-white">
                    <div className="absolute top-4 right-4 text-lg">
                      <FontAwesomeIcon icon={faArrowUpRightDots} className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-semibold mt-15">927</h1>
                    <p>ให้บริการแก่ลูกค้า</p>
                  </div>
                </FadeUpWhenVisible>
                {/* 2 */}
                <FadeUpWhenVisible>
                  <div className="bg-gray-950 bg-opacity-20 rounded-xl p-4 shadow-md relative flex flex-col justify-end items-start text-white">
                    <div className="absolute top-4 right-4 text-lg">
                      <FontAwesomeIcon icon={faArrowUpRightDots} className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-semibold mt-15">10,403</h1>
                    <p>สินค้าที่จำหน่าย</p>
                  </div>
                </FadeUpWhenVisible>
                {/* 3 */}
                <FadeUpWhenVisible>
                  <div className="bg-gray-950 bg-opacity-20 rounded-xl p-4 shadow-md relative flex flex-col justify-end items-start text-white">
                    <div className="absolute top-4 right-4 text-lg">
                      <FontAwesomeIcon icon={faArrowUpRightDots} className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-semibold mt-15">658</h1>
                    <p>บ้านปรับปรุงใหม่</p>
                  </div>
                </FadeUpWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className="relative w-full bg-gray-900 p-10" style={{ minHeight: 'calc(100vh - 4rem)' }}>
          <Image
            src="/img/contact.png"
            alt=""
            width={400}
            height={400}
            className="absolute right-15 top-30 w-[300px] opacity-30 rotate-[22deg] z-0 pointer-events-none"
          />
          <div className="text-white z-10 p-10">
            <FadeUpWhenVisible>
              <h1 className="text-5xl font-bold">พร้อมร่วมงานกับเราหรือยัง?</h1>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <h1 className="text-3xl font-bold pt-3">ส่งข้อความถึงเราและมาพูดคุยกัน</h1>
            </FadeUpWhenVisible>

          </div>

          <div className="w-full py-10">
            <FadeUpWhenVisible>
              <h1 className="text-xl font-bold px-10 py-5 z-10">ติดต่อเรา</h1>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <div className="z-10 max-w-full mx-auto flex flex-col md:flex-row gap-6 px-4 sm:px-6 lg:px-8">
                <div className="flex-1 rounded-xl p-6 sm:p-8 text-black text-xl font-semibold bg-purple-300 shadow-lg">
                  <h1 className="text-3xl font-bold">โทรศัพท์</h1>
                  <p className="text-base mt-6">
                    0xx-xxx-xxxx
                  </p>
                </div>
                <div className="z-10 flex-1 rounded-xl p-6 sm:p-8 text-black text-xl font-semibold bg-purple-300 shadow-lg">
                  <h1 className="text-3xl font-bold">อีเมล</h1>
                  <p className="text-base mt-6">
                    123456@Portfolio.com
                  </p>
                </div>
                <div className="z-10 flex-1 rounded-xl p-6 sm:p-8 text-black text-xl font-semibold bg-purple-300 shadow-lg">
                  <h1 className="text-3xl font-bold">โซเชียล</h1>
                  <div className="flex space-x-4 items-center mt-6">
                    {/* Facebook */}
                    <div className="relative group">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white bg-gray-500 p-2 rounded-full hover:bg-blue-600 transition"
                      >
                        <FaFacebookF />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        Facebook
                      </span>
                    </div>

                    {/* Instagram */}
                    <div className="relative group">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white bg-gray-500 p-2 rounded-full hover:bg-pink-600 transition"
                      >
                        <FaInstagram />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        Instagram
                      </span>
                    </div>

                    {/* X / Twitter */}
                    <div className="relative group">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white bg-gray-500 p-2 rounded-full hover:bg-sky-600 transition"
                      >
                        <FaXTwitter />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        X (Twitter)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUpWhenVisible>
          </div>
        </div>
      </section>
    </main>
  )
}
export default page