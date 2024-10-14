import type { NextPage } from "next";
import KnowLedgeContainer from "./ux-container";

const CollaborateContainer: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
          Mobile Application Development Expertise
        </h2>
        <p className="text-xl text-gray-600">
          Discover our comprehensive knowledge in creating powerful and
          efficient mobile applications.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <KnowLedgeContainer
          icon="mobile"
          title="Cross-Platform Development"
          description="Building efficient apps for multiple platforms using React Native, Flutter, or other cross-platform frameworks."
        />
        <KnowLedgeContainer
          icon="ux"
          title="UI/UX Design"
          description="Crafting intuitive and engaging user interfaces for exceptional mobile experiences."
        />
        <KnowLedgeContainer
          icon="integration"
          title="Integrations"
          description="Seamlessly connecting mobile apps with third-party services, APIs, and backend systems."
        />
        <KnowLedgeContainer
          icon="analytics"
          title="Analytics"
          description="Implementing robust analytics to track user behavior and improve app performance."
        />
      </div>
    </div>
  );
};

export default CollaborateContainer;
