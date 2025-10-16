import Hero from "@/components/Hero";
import CulturalEvents from "@/components/CulturalEvents";
import PastEvents from "@/components/PastEvents";
import Notices from "@/components/Notices";
import KeyPeople from "@/components/KeyPeople";
import RulesRegulations from "@/components/Bylaws";
import GoverningBody from "@/components/Management";
import Elections from "@/components/Elections";
import FeedbackForm from "@/components/FeedbackForm";
import Membership from "@/components/Membership";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <CulturalEvents /> */}
      <PastEvents />
      <Notices />
      <KeyPeople />
      <RulesRegulations />
      <Membership />
      <GoverningBody />
      <Elections />
      <FeedbackForm />
    </div>
  );
};

export default Index;
