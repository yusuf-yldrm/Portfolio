import type { NextPage } from "next";
import CollaborateContainer from "../components/collaborate-container";
import DigitalContainer from "../components/digital-container";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionContainer from "../components/section-container";
import StoryContainer from "../components/story-container";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#021526] flex flex-col items-center justify-center gap-[35px] text-left text-sm text-white font-outfit py-[100px]">
      <Header />
      <DigitalContainer />
      <SectionContainer />
      <CollaborateContainer />
      <StoryContainer />
      <Footer />
    </div>
  );
};

export default Home;
