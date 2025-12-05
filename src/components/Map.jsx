"use client";

import { motion } from "framer-motion";

export default function Map() {
    return (
        <section id="map" className="h-96 w-full">
            <motion.iframe
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163612.2445953066!2d8.482176277209655!3d50.12112776011714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sbd!4v1716300000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></motion.iframe>
        </section>
    );
}
