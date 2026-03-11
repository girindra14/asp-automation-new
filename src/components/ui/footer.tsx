import {
    MapPin,
    Envelope,
    Phone,
    WhatsappLogo,
    PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
    const companyInfo = {
        address: "Jl Tuban II No.26, Surabaya",
        email: "sales@asp-automation.com",
        phone: "(+62) 31-3535656",
        whatsapp: "(+62) 821-3994-0054",
        whatsappNumber: "6282139940054",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3831358965845!2d112.73686707499758!3d-7.313652171832582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7c2e21f3bf%3A0x3c8e6e9c3e8c8e8e!2sJl.%20Tuban%20II%20No.26%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1234567890",
    };

    return (
        <footer className="bg-jmso-dark-blue py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Company Info Header */}
                <div className="text-center mb-10 lg:mb-12">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                        Abid Supportindo Pratama
                    </h3>
                    <p className="text-white/70 text-base lg:text-lg">
                        Your Industrial Automation Partner
                    </p>
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-10">
                    {/* Address */}
                    <div className="text-center group">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-jmso-tosca/20 rounded-full mb-4 group-hover:bg-jmso-tosca/30 transition-all duration-300">
                            <MapPin size={28} className="text-jmso-tosca" />
                        </div>
                        <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                            Address
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Jl Tuban II No.26<br />
                            Surabaya, Indonesia
                        </p>
                    </div>

                    {/* Email */}
                    <div className="text-center group">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-jmso-tosca/20 rounded-full mb-4 group-hover:bg-jmso-tosca/30 transition-all duration-300">
                            <Envelope size={28} className="text-jmso-tosca" />
                        </div>
                        <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                            Email
                        </h4>
                        <a
                            href={`mailto:${companyInfo.email}`}
                            className="text-white/70 hover:text-jmso-tosca transition-colors text-sm block break-words"
                        >
                            {companyInfo.email}
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="text-center group">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-jmso-tosca/20 rounded-full mb-4 group-hover:bg-jmso-tosca/30 transition-all duration-300">
                            <Phone size={28} className="text-jmso-tosca" />
                        </div>
                        <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                            Phone
                        </h4>
                        <a
                            href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                            className="text-white/70 hover:text-jmso-tosca transition-colors text-sm block"
                        >
                            {companyInfo.phone}
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="text-center group">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-full mb-4 group-hover:bg-green-500/30 transition-all duration-300">
                            <WhatsappLogo size={28} weight="fill" className="text-green-400" />
                        </div>
                        <h4 className="font-semibold text-white mb-3 text-sm tracking-wider">
                            WhatsApp
                        </h4>
                        <a
                            href={`https://wa.me/${companyInfo.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <WhatsappLogo size={18} weight="fill" />
                            <span className="whitespace-nowrap">{companyInfo.whatsapp}</span>
                        </a>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-white/10 my-8 lg:my-10"></div>

                {/* Bottom Copyright Section */}
                <div className="text-center space-y-2">
                    <p className="text-white/60 text-sm">© 2026 ASP Automation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}