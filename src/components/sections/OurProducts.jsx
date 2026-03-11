import { useEffect, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { FadeSlider } from "../ui/swiper";
import { X } from "lucide-react";
import IPC1 from "../../assets/images/our-products/ipc/ipc_1.png";
import IPC2 from "../../assets/images/our-products/ipc/ipc_2.png";
import IPC3 from "../../assets/images/our-products/ipc/ipc_3.png";
import advantech_acp_4320 from "../../assets/images/our-products/ipc/advantech_acp_4320.png";
import advantech_ppc_6171c from "../../assets/images/our-products/ipc/advantech_ppc_6171c.png";
import advantech_uno_247 from "../../assets/images/our-products/ipc/advantech_uno_247.png";
import advantech_ipc_510 from "../../assets/images/our-products/ipc/advantech_ipc_510.png";
import advantech_mic_7700h from "../../assets/images/our-products/ipc/advantech_mic_7700h.png";
import UPS1 from "../../assets/images/our-products/ups/ups_1.png";
import UPS2 from "../../assets/images/our-products/ups/ups_2.png";
import UPS3 from "../../assets/images/our-products/ups/ups_3.png";
import abb_powerscale_33 from "../../assets/images/our-products/ups/abb_powerscale_33.png";
import abb_ztx_series from "../../assets/images/our-products/ups/abb_ztx_series.png";
import ablerex_kronos_40 from "../../assets/images/our-products/ups/ablerex_kronos_40.png";
import ablerex_ms_ii_ssax from "../../assets/images/our-products/ups/ablerex_ms_ii_ssax.png";
import CCTV1 from "../../assets/images/our-products/cctv/cctv_1.png";
import CCTV2 from "../../assets/images/our-products/cctv/cctv_2.png";
import CCTV3 from "../../assets/images/our-products/cctv/cctv_3.png";
import vivotek_ib9368ht from "../../assets/images/our-products/cctv/vivotek_ib9368ht.png";
import vivotek_ib9383_htv from "../../assets/images/our-products/cctv/vivotek_ib9383_htv.png";
import vivotek_tb9333e from "../../assets/images/our-products/cctv/vivotek_tb9333e.png";
import vivotek_it9380_hv_v2 from "../../assets/images/our-products/cctv/vivotek_it9380_hv_v2.png";
import vivotek_ib9387_lprv3 from "../../assets/images/our-products/cctv/vivotek_ib9387_lprv3.png";
import FO1 from "../../assets/images/our-products/fo/fo_1.png";
import FO2 from "../../assets/images/our-products/fo/fo_2.png";
import FO3 from "../../assets/images/our-products/fo/fo_3.png";
import fujikura_fsm41s from "../../assets/images/our-products/fo/fujikura_fsm41s.png";
import netviel_fo_cable from "../../assets/images/our-products/fo/netviel_fo_cable.png";
import netviel_nvl_mc from "../../assets/images/our-products/fo/netviel_nvl_mc.png";
import netviel_nvl_otb from "../../assets/images/our-products/fo/netviel_nvl_otb.png";
import netviel_sfp_transceiver from "../../assets/images/our-products/fo/netviel_sfp_transceiver.png";
import yokogawa_aq1000 from "../../assets/images/our-products/fo/yokogawa_aq1000.png";
import ISG1 from "../../assets/images/our-products/isg/isg_1.png";
import ISG2 from "../../assets/images/our-products/isg/isg_2.png";
import ISG3 from "../../assets/images/our-products/isg/isg_3.png";
import eki_7710g from "../../assets/images/our-products/isg/eki_7710g.png";
import eki_5729pi from "../../assets/images/our-products/isg/eki_5729pi.png";
import eki_5525i from "../../assets/images/our-products/isg/eki_5525i.png";
import moxa_eds_205 from "../../assets/images/our-products/isg/moxa_eds_205.png";
import IC1 from "../../assets/images/our-products/ic/ic_1.png";
import IC2 from "../../assets/images/our-products/ic/ic_2.png";
import IC3 from "../../assets/images/our-products/ic/ic_3.png";
import eki_1511 from "../../assets/images/our-products/ic/eki_1511.png";
import eki_1528i from "../../assets/images/our-products/ic/eki_1528i.png";
import eki_1361 from "../../assets/images/our-products/ic/eki_1361.png";
import ecu_1051tl from "../../assets/images/our-products/ic/ecu_1051tl.png";
import moxa_mgate_mb3180 from "../../assets/images/our-products/ic/moxa_mgate_mb3180.png";
import moxa_nport_5150a from "../../assets/images/our-products/ic/moxa_nport_5150a.png";
import SCADA1 from "../../assets/images/our-products/scada/scada_1.png";
import SCADA2 from "../../assets/images/our-products/scada/scada_2.png";
import SCADA3 from "../../assets/images/our-products/scada/scada_3.png";
import SCADA4 from "../../assets/images/our-products/scada/scada_4.png";

export default function OurProducts({
    headline,
}) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const applyStylesToStrongChildren = () => {
            const descriptions = document.querySelectorAll('.service-description strong');

            descriptions.forEach(element => {
                element.style.color = '#002a69';
            });

            const explanations = document.querySelectorAll('.service-explanation strong');

            explanations.forEach(element => {
                element.style.color = '#0759d4';
            });
        };
        applyStylesToStrongChildren();
    });

    const products = [
        {
            title: "Industrial PC",
            imgs: [IPC1, IPC2, IPC3],
            description: "High-performance industrial computing solutions designed for demanding manufacturing and automation environments.",
            keySpecs: [
                "Industrial-Grade Processor & Long Lifecycle",
                "Rugged Design & Operating Conditions",
                "Flexible I/O & Expandability",
                "Reliability & Industrial OS Support"
            ],
            detailedSpecs: [
                {
                    id: "advantech-acp-4320",
                    model: "Advantech ACP-4320",
                    img: advantech_acp_4320,
                },
                {
                    id: "advantech-ppc-6171c",
                    model: "Advantech PPC-6171C-RTAE",
                    img: advantech_ppc_6171c,
                },
                {
                    id: "advantech-uno-247",
                    model: "Advantech UNO-247",
                    img: advantech_uno_247,
                },
                {
                    id: "advantech-ipc-510",
                    model: "Advantech IPC-510",
                    img: advantech_ipc_510,
                },
                {
                    id: "advantech-mic-7700h",
                    model: "Advantech MIC-7700H-00A2",
                    img: advantech_mic_7700h,
                }
            ],
        },
        {
            title: "Uninterruptible Power Supply",
            imgs: [UPS1, UPS2, UPS3],
            description: "Reliable power protection systems ensuring continuous operation and equipment safety in critical industrial applications.",
            keySpecs: [
                "Isolation Transformer for Maximum Protection",
                "Dual Output Voltage Support",
                "High Reliability for Industrial Loads",
                "Clean & Stable Power Quality"
            ],
            detailedSpecs: [
                {
                    id: "ablerex-ms-ii-ssax",
                    model: "Ablerex MS II SSAX",
                    img: ablerex_ms_ii_ssax,
                },
                {
                    id: "ablerex-kronos-40",
                    model: "Ablerex Kronos 40 40KVA / 40KW",
                    img: ablerex_kronos_40,
                },
                {
                    id: "abb-powerscale-3-3",
                    model: "ABB Powerscale 3-3",
                    img: abb_powerscale_33,
                },
                {
                    id: "abb-ztx-series",
                    model: "ABB ZTx SERIES",
                    img: abb_ztx_series,
                }
            ],
        },
        {
            title: "AI-Powered CCTV",
            imgs: [CCTV1, CCTV2, CCTV3],
            description: "Advanced surveillance systems with AI analytics, thermal imaging, and intelligent monitoring for industrial security.",
            keySpecs: [
                "AI Video Analytics",
                "Thermal Imaging Capability",
                "High Accuracy & Early Warning",
                "Industrial-Grade Reliability & Integration"
            ],
            detailedSpecs: [
                {
                    id: "vivotek-ib9368ht",
                    model: "Vivotek IB9368HT Bullet Network Camera",
                    img: vivotek_ib9368ht,
                },
                {
                    id: "vivotek-ib9383-htv",
                    model: "Vivotek IB9383-HTV Bullet AI Camera",
                    img: vivotek_ib9383_htv,
                },
                {
                    id: "vivotek-tb9333e",
                    model: "Vivotek TB9333E Thermal Camera",
                    img: vivotek_tb9333e,

                },
                {
                    id: "vivotek-it9380-hv-v2",
                    model: "Vivotek IT9380-HV-V2 Turret AI Camera",
                    img: vivotek_it9380_hv_v2,
                },
                {
                    id: "vivotek-ib9387-lprv3",
                    model: "Vivotek IB9387-LPRV3 License Plate Recognition",
                    img: vivotek_ib9387_lprv3,
                }
            ],
        },
        {
            title: "Fiber Optic",
            imgs: [FO1, FO2, FO3],
            description: "High-speed fiber optic infrastructure for reliable, long-distance industrial data transmission and networking.",
            keySpecs: [
                "High Bandwidth & Long-Distance Transmission",
                "Immunity to EMI & Electrical Noise",
                "Industrial-Grade Cable & Connector Design",
                "High Reliability & Network Stability"
            ],
            detailedSpecs: [
                {
                    id: "netviel-fo-cable",
                    model: "Netviel Fiber Optic Cable",
                    img: netviel_fo_cable,
                },
                {
                    id: "netviel-sfp-transceiver",
                    model: "Netviel SFP Optical Transceiver",
                    img: netviel_sfp_transceiver,
                },
                {
                    id: "netviel-nvl-otb",
                    model: "Netviel NVL-OTB-WM-24/4-SM-SC-S",
                    img: netviel_nvl_otb,
                },
                {
                    id: "netviel-nvl-mc",
                    model: "Netviel NVL-MC-SM100-SC",
                    img: netviel_nvl_mc,
                },
                {
                    id: "yokogawa-aq1000",
                    model: "Yokogawa AQ1000 OTDR",
                    img: yokogawa_aq1000,
                },
                {
                    id: "fujikura-fsm41s",
                    model: "Fujikura Fusion Splicer FSM41S",
                    img: fujikura_fsm41s,
                }
            ],
        },
        {
            title: "Industrial Switch",
            imgs: [ISG1, ISG2, ISG3],
            description: "Rugged network switches designed for harsh industrial environments with advanced management and redundancy features.",
            keySpecs: [
                "Rugged Industrial Design",
                "High Reliability & Redundancy",
                "Flexible Port & PoE Options",
                "Industrial Network Management & Security"
            ],
            detailedSpecs: [
                {
                    id: "eki-7710g",
                    model: "Advantech EKI-7710G-2CPI-BE",
                    img: eki_7710g,
                },
                {
                    id: "eki-5729pi",
                    model: "Advantech EKI-5729PI-AE",
                    img: eki_5729pi,
                },
                {
                    id: "eki-5525i",
                    model: "Advantech EKI-5525I-AE",
                    img: eki_5525i,
                },
                {
                    id: "moxa-eds-205",
                    model: "Moxa EDS-205",
                    img: moxa_eds_205,
                }
            ],
        },
        {
            title: "Intelligent Connectivity",
            imgs: [IC1, IC2, IC3],
            description: "Advanced connectivity solutions for seamless industrial device communication and network integration.",
            keySpecs: [
                "Serial to Ethernet Conversion",
                "Wireless & Wired Communication",
                "Protocol Conversion & Gateway",
                "Remote Management & Monitoring"
            ],
            detailedSpecs: [
                {
                    id: "eki-1511",
                    model: "Advantech EKI-1511",
                    img: eki_1511,
                },
                {
                    id: "eki-1528i",
                    model: "Advantech EKI-1528I-DR-AE",
                    img: eki_1528i,
                },
                {
                    id: "eki-1361",
                    model: "Advantech EKI-1361",
                    img: eki_1361,
                },
                {
                    id: "ecu-1051tl",
                    model: "Advantech ECU-1051TL-R10AAE",
                    img: ecu_1051tl,
                },
                {
                    id: "moxa-mgate-mb3180",
                    model: "Moxa MGATE MB3180",
                    img: moxa_mgate_mb3180,
                },
                {
                    id: "moxa-nport-5150a",
                    model: "Moxa NPort 5150A",
                    img: moxa_nport_5150a,
                }
            ],
        },
        {
            title: "Supervisory Control and Data Acquisition",
            imgs: [SCADA1, SCADA2, SCADA3, SCADA4],
            description: "Comprehensive SCADA systems for real-time monitoring, control, and data acquisition in industrial operations.",
            keySpecs: [
                "Real-Time Monitoring & Control",
                "Reliable Communication Protocols",
                "High Availability & System Redundancy",
                "Scalability & Cybersecurity"
            ],
        },
    ];

    return (
        <section
            id="our-products"
            className="bg-jmso-light-blue relative py-8 md:py-12 lg:py-20"
        >
            <div className="relative container flex flex-col items-center z-10">
                <h2 className="jmso-heading text-jmso-dark-blue text-center mb-8 lg:mb-12" dangerouslySetInnerHTML={{ __html: headline }} />
                <div className="w-full max-w-7xl">
                    {/* Custom grid layout: 3 columns with last item centered */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {products.map((product, index) => (
                                <div
                                    key={product.title}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col last:lg:col-start-2"
                                >
                                    {/* Card Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                                        {product.title === 'Supervisory Control and Data Acquisition'
                                            ? <FadeSlider imgs={product.imgs} imgZoomType="zoom-out" client:load />
                                            : <FadeSlider imgs={product.imgs} imgZoomType="zoom-in" client:load />
                                        }
                                        <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/75 to-transparent"></div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-jmso-dark-blue mb-3">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Key Specs */}
                                            <div className="space-y-2">
                                                {product.keySpecs.map((spec, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <CheckCircle
                                                            size={24}
                                                            weight="fill"
                                                            className="text-jmso-tosca mt-1 flex-shrink-0"
                                                        />
                                                        <span className="text-sm text-gray-700">{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="mt-6 space-y-3">
                                            {product.title === 'Supervisory Control and Data Acquisition' ? (
                                                <a
                                                    href="https://wa.me/6282139940054"
                                                    className="block w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca/90 hover:to-jmso-dark-blue/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                                >
                                                    Consult Now
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="w-full bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-jmso-tosca/90 hover:to-jmso-dark-blue/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-center"
                                                >
                                                    Product Spec
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-jmso-dark-blue/10 to-transparent rounded-bl-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal - Photo Gallery Only */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-scaleIn shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-br from-jmso-tosca to-jmso-dark-blue text-white p-6 flex-shrink-0">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedProduct.title}</h3>
                                    <p className="text-blue-100 text-sm md:text-base">{selectedProduct.description}</p>
                                    <p className="text-blue-200 text-xs md:text-sm mt-3 italic">
                                        Click on any product to view detailed specifications
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors ml-4 flex-shrink-0"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content - Photo Grid */}
                        <div className="overflow-y-auto flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
                            <div className="p-6 md:p-8">
                                {/* Responsive Grid based on number of items */}
                                <div className={`grid gap-4 md:gap-6 ${
                                    selectedProduct.detailedSpecs?.length <= 2 
                                        ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                                        : selectedProduct.detailedSpecs?.length <= 4
                                        ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
                                        : selectedProduct.detailedSpecs?.length <= 6
                                        ? 'grid-cols-2 md:grid-cols-3'
                                        : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                                }`}>
                                    {selectedProduct.detailedSpecs?.map((spec, idx) => (
                                        <a
                                            key={idx}
                                            href={`/models/${spec.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                        >
                                            {/* Product Image */}
                                            <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0 bg-gray-100">
                                                <img 
                                                    src={spec.img.src}
                                                    alt={spec.model}
                                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {/* Overlay on Hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-jmso-dark-blue/90 via-jmso-dark-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="text-white text-center p-4">
                                                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        <p className="text-sm font-semibold">View Details</p>
                                                    </div>
                                                </div>
                                                {/* Badge */}
                                                <div className="absolute top-3 right-3 bg-jmso-tosca text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                                    NEW TAB
                                                </div>
                                            </div>

                                            {/* Product Name */}
                                            <div className="p-4 flex-1 flex items-center justify-center bg-white">
                                                <h4 className="text-sm md:text-base font-bold text-jmso-dark-blue text-center leading-tight group-hover:text-jmso-tosca transition-colors">
                                                    {spec.model}
                                                </h4>
                                            </div>

                                            {/* Click Indicator */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-jmso-tosca to-jmso-dark-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                        </a>
                                    ))}
                                </div>

                                {/* Contact Sales Button */}
                                <div className="mt-8 pt-6 border-t-2 border-gray-300">
                                    <a
                                        href="https://wa.me/6282139940054"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-auto md:mx-auto md:max-w-md bg-gradient-to-br from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        Contact Sales
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
        </section>
    );
}