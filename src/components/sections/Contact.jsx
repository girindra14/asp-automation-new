import { useState } from "react";
import {
    MapPin,
    Envelope,
    Phone,
    WhatsappLogo,
    PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

export default function ContactWithFooter() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
            setStatus("success");
            setFormData({ name: "", email: "", company: "", message: "" });
            } else {
            setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const companyInfo = {
        address: "Jl Tuban II No.26, Surabaya",
        email: "sales@asp-automation.com",
        phone: "(+62) 31-3535656",
        whatsapp: "(+62) 821-3994-0054",
        whatsappNumber: "6282139940054",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3831358965845!2d112.73686707499758!3d-7.313652171832582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7c2e21f3bf%3A0x3c8e6e9c3e8c8e8e!2sJl.%20Tuban%20II%20No.26%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1234567890",
    };

    return (
        <>
            {/* Contact Section */}
            <section
                id="contact-us"
                className="relative py-8 md:py-12 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white"
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-8 lg:mb-16">
                        <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-10">Get In Touch</h2>
                        <p className="text-jmso-dark-blue/80 text-lg max-w-2xl mx-auto">
                            Let us discuss your automation needs and how we can support your industrial projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-6 md:p-8 rounded-lg border border-jmso-dark-blue/10 shadow-sm">
                            <h3 className="text-2xl font-semibold text-jmso-dark-blue mb-6">
                                Consult With Us
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all"
                                        placeholder="your.email@company.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-jmso-dark-blue mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-jmso-dark-blue/20 rounded-md focus:outline-none focus:ring-2 focus:ring-jmso-tosca focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-jmso-tosca hover:bg-jmso-tosca/90 text-jmso-dark-blue font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                                    <PaperPlaneTilt
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>

                                {status === "success" && (
                                    <p className="text-green-600 text-sm text-center">
                                        ✅ Message sent! We'll be in touch soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-500 text-sm text-center">
                                        ❌ Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-white p-4 rounded-lg border border-jmso-dark-blue/10 shadow-sm overflow-hidden h-fit">
                            <h3 className="text-xl font-semibold text-jmso-dark-blue mb-4">
                                Our Location
                            </h3>
                            <div className="aspect-video rounded-md overflow-hidden">
                                <iframe
                                    src={companyInfo.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title="ASP Automation Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}