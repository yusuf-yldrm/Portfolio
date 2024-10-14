import type { NextPage } from "next";

const SectionContainer: NextPage = () => {
  const technologies = [
    { name: "React Native", src: "/tech/react.svg" },
    { name: "Firebase", src: "/tech/firebase.svg" },
    { name: "Swift", src: "/tech/swift.svg" },
    { name: "App Store", src: "/tech/apple.svg" },
    { name: "Play Store", src: "/tech/play.svg" },
    { name: "TypeScript", src: "/tech/typescript.svg" },
  ];

  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Technologies I use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img
                className="h-12 w-auto object-contain"
                src={tech.src}
                alt={tech.name}
              />
              <span className="mt-2 text-sm text-gray-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
