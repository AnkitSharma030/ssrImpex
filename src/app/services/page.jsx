
import { FaTruck, FaWarehouse, FaProjectDiagram, FaShip, FaPlane, FaLock } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-black mb-4" />,
      title: "Freight Shipping",
      description:
        "Comprehensive freight solutions including air, sea, and land transportation with real-time tracking.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-black mb-4" />,
      title: "Warehousing",
      description:
        "Secure storage solutions with inventory management and distribution services.",
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-black mb-4" />,
      title: "Supply Chain Management",
      description:
        "End-to-end supply chain solutions to optimize your logistics operations and reduce costs.",
    },
    {
      icon: <FaShip className="text-4xl text-black mb-4" />,
      title: "Ocean Freight",
      description:
        "Cost-effective and reliable ocean freight solutions for global trade with port-to-port delivery.",
    },
    {
      icon: <FaPlane className="text-4xl text-black mb-4" />,
      title: "Air Cargo",
      description:
        "Fast and efficient air cargo services to ensure timely delivery of urgent and valuable shipments.",
    },
    {
      icon: <FaLock className="text-4xl text-black mb-4" />,
      title: "Customs Clearance",
      description:
        "Hassle-free customs clearance and documentation support to ensure smooth international trade.",
    },
  ];

  return (
    <section className="py-12 bg-white h-[100vh]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center rounded-lg">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
