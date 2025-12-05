"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
    return (
        <section id="services" className="py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">
                    My Services
                </h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2 max-w-2xl mx-auto">
                    Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
                    Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
                </p>
            </motion.div>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-12"
            >
                <SwiperSlide>
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow h-full">
                        <Image
                            alt="Web development icon"
                            className="mx-auto mb-4"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96NAEN5dtRnCR-mzh9HJ7erd7aVdMA7G6-5y9OE8s3gEcT7LtR9mJ258BakOUHZMrUKYKOP__DgKP0jg7PUHcXLrO8zmXOE06K5izhhiCfazkT-I7qaBt-1u_Xi30j6NTQtSviz0tDe8F_T0zpq9fJ4PiDNkeelkqQ6zeFTcxoQTzbYLSBczq_sl9sl8iw23AuB3yCNLh1hIf-un-ee7D6VgH-UqMiF9D5Y52dvcaw_lMyOxNMCrIgn74-bGIS5OLWe7SX3vGuoo"
                            width={64}
                            height={64}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                            Web Development
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                            Blog, E-Commerce
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow h-full">
                        <Image
                            alt="UI/UX design icon"
                            className="mx-auto mb-4"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhK2r_YQk4A24PTb3z3OiJ7v9fA6BlolID71cGEa1SD8LvUa4gZ-IF_op-FIj9vkaFYxPGcVDwy9UyzNOgT4heeWD42-fkFQpQWXcl2MHmCdd4g_8FwSGA-XnBk7rrlAmV2_F5oT990KFCOjtYo2pNLCyCYISX764RexCqSAQlWbI7-M6ketjpr3-1RlF3m_jvE34smiETnwm7qbStA4ChMSEI3kNA0JFEbmYl3qe2aLLNxZWTtDXwo3xiPttYPhyfhg8--Jh-rUo"
                            width={64}
                            height={64}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                            UI/UX Design
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                            Mobile App, Website Design
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow h-full">
                        <Image
                            alt="Sound design icon"
                            className="mx-auto mb-4"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY57wO71DnK6ZwBn8dGeQn5RyOQfj7hMwTH18qjWhm-cobpuMNMaZSITBceKkF2r3Ftnw7gjrFf5Szicjd_ORQZOWFrgW04hd4_cLJ-5ON2pdPXID30WZdjohL5EgzUA2AyepU5Ap6PSR7goreHXGW-ZIvsAtFrxr0mCJWk7u4YSb39nEZ7X1HV9iF4Z1o2wY0Vf7bsUoy6xn3-M_8r-P-Yr0zN6vXkQylNB9F9k3SC7PX7yWws26DieRcvpHqODMtqNLSxRFMu_Y"
                            width={64}
                            height={64}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                            Sound Design
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                            Voice Over, Beat Making
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow h-full">
                        <Image
                            alt="Game design icon"
                            className="mx-auto mb-4"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITsJ1e8daam4WKbmKV3bBCfTrH4ZsvAXDh9GUojL66rjWVfOdFgV2oZjHsjqPGoRP0AJeStfp74pOoXiJvvnU0N8Jek5981ebUFrf8NR_ugJl3qJhptHwBWf1RHiVxqY6MiuG9QEnqv02t88Xh3ZaaXDnVoc2bcfRuWiaZb1Ryzu3Lwlnqzryp-hbSeyFZ63IF9i_q1PN4DZX61vc6NErYFQ8zTNaBy3zO_Fa09LKqDAxQjsI6tNHra2IIyhXe9kK3hPUU6iZ3tg"
                            width={64}
                            height={64}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                            Game Design
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                            Character Design, Props &amp; Objects
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow h-full">
                        <Image
                            alt="Photography icon"
                            className="mx-auto mb-4"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAonQ3RMg45_FLDSEfLLFHPQJrO5LYnitY8WOvunMXt8QMBa3Qyynz7UvbFXTxSzCFtUXB37mptouQdmBRTBEOS57xHoTnNPGskzp3tjKgUUTktKcaryrgD9iOsX2nNgTFkHJu53xQrRcrQMV0ctd7nQRg0yWYmyj_a0Jkmvaq9Vp68KfpqoCrQ9hvwzcQz7_pg6laGlKW6zf9Nt1OuSj0d1044qeMGjXiHevI7KJ2VfwZ2JPSL2nwDQrAKJypyJVNEnMyw4knfbaM"
                            width={64}
                            height={64}
                        />
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                            Photography
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                            Portrait, Product Photography
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg text-center border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow h-full">
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                            Advertising
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla
                            Diam In Ac Dictum A Urna Viverra Morbi.
                        </p>
                        <a className="text-primary font-semibold text-sm" href="#">
                            ORDER NOW →
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
