import { Linkedin } from "lucide-react";

export default function Leadership() {
  const team = [
    {
      name: "Raja Singh",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "#15BDFF",
    },
    {
      name: "Rahul",
      role: "Chief Technology Officer",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      color: "#77efab",
    },
    {
      name: "Priya Verma",
      role: "Head of Product",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "#816fff",
    },
    {
      name: "Amit Sharma",
      role: "Engineering Director",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      color: "#4b96ff",
    },
  ];

  return (
    <div className="bg-[#f5f7fb] pb-28">
      {/* HERO CARD */}

      <div className="custom-container mx-auto pt-20 px-6">
        <div className="relative bg-gradient-to-r from-[#0b1d4d] to-[#142e8c] rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            {/* TEXT */}

            <div className="p-12 text-white">
              <h1 className="text-5xl font-semibold mb-4">Meet Our Team</h1>

              <h3 className="text-xl mb-6 text-[#b7d3ff]">
                Innovating. Building. Leading.
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Our leadership team drives Revergent Technologies with a vision
                to create powerful software products and transformative digital
                solutions. By combining technical excellence, innovation, and
                strategic thinking, we help organizations build smarter, faster,
                and more scalable technology platforms.
              </p>
            </div>

            {/* IMAGE */}

            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEAM GRID */}

      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-16">
          {team.map((member, index) => (
            <div key={index} className="text-center relative">
              {/* IMAGE CIRCLE */}

              <div
                className="w-40 h-40 rounded-full mx-auto flex items-center justify-center"
                style={{ background: member.color }}
              >
                <img
                  src={member.img}
                  className="w-36 h-36 rounded-full object-cover border-4 border-white"
                />
              </div>

              {/* CARD */}

              <div className="bg-white rounded-2xl shadow-md pt-20 pb-8 px-6 -mt-16">
                <h4 className="font-semibold text-lg text-[#0b1d4d]">
                  {member.name}
                </h4>

                <p className="text-gray-500 text-sm mb-3">{member.role}</p>

                <a className="flex justify-center text-gray-400 hover:text-[#2cc5d5]">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
