import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home";
import AboutUs from "./pages/Aboutus/About";
import DirectoryBrothers from "./pages/Aboutus/DirectoryBrothers";
import OurContent from "./pages/Whoweare/OurContent";
import BibleReflection from "./pages/Whoweare/BibleReflection";
import Newsletter from "./pages/Whoweare/Newsletter";
import Publications from "./pages/Whoweare/Publications";
import India from "./pages/Institutions/India";
import DetailsIndiaInstitution from "./pages/Institutions/MoreDetails/DetailsIndiaInstitution";
import SriLanka from "./pages/Institutions/SriLanka";
import Lasallians from "./pages/Ourlasallians/Lasallians";
import Members from "./pages/Ourgovernance/Members";
import Visitor from "./pages/Ourgovernance/Visitor";
import CouncilMembers from "./pages/Ourgovernance/CouncilMembers";
import Commission from "./pages/Ourgovernance/Commission";
import Administration from "./pages/Ourgovernance/Administration";
import CentralOffice from "./pages/Ourgovernance/CentralOffice";
import AuxilaryPresidents from "./pages/Ourgovernance/AuxilaryPresidents";
import IndianDelegation from "./pages/Ourgovernance/IndianDelegation";
import Vocation from "./pages/Vocation/Vocationform";
import ContactUs from "./pages/Contact/ContactUs";
import Gallery from "./pages/Gallery/Gallery";
import Leavningproject from "./pages/Whoweare/Allpublications/Leavningproject";
import Generalchapter from "./pages/Whoweare/Allpublications/Generalchapter";
import Bulletin from "./pages/Whoweare/Allpublications/Bulletin";
import Pastoral from "./pages/Whoweare/Allpublications/Pastoral";
import Governmentanimation from "./pages/Whoweare/Allpublications/Governmentanimation";
import Lasallianreflection from "./pages/Whoweare/Allpublications/Lasallianreflection";
import Allflashnews from "./pages/News/Allflashnews";
import Alllatestnews from "./pages/News/Alllatestnews";
import NotFoundPage from "./errors/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<MainLayout />}>
          {/* About Us Pages Routes */}
          <Route path="vission-mission" element={<AboutUs />} />
          <Route path="history-colombo" element={<AboutUs />} />
          <Route path="history-lasad" element={<AboutUs />} />
          <Route path="first-arrival" element={<AboutUs />} />
          <Route path="second-arrival" element={<AboutUs />} />
          <Route path="directory-brothers" element={<DirectoryBrothers />} />
          {/* Who We Are Pages Routes */}
          <Route path="our-spirituality" element={<OurContent />} />
          <Route path="our-founder" element={<OurContent />} />
          <Route path="our-mission" element={<OurContent />} />
          <Route path="our-formation" element={<OurContent />} />
          <Route path="bible-reflections" element={<BibleReflection />} />
          <Route path="newsletters" element={<Newsletter />} />
          <Route path="our-lasallian-publication" element={<Publications />} />
          {/* Our Institutions Pages Routes */}
          <Route path="india" element={<India />} />
          <Route path="details-india" element={<DetailsIndiaInstitution />} />
          <Route path="sri-lanka" element={<SriLanka />} />
          {/* Our Lasallians Pages Routes */}
          <Route path="international-mission" element={<Lasallians />} />
          <Route path="our-brothers" element={<Lasallians />} />
          <Route path="our-associates" element={<Lasallians />} />
          <Route path="lasad-saints" element={<Lasallians />} />
          {/* Our Governance Pages Routes */}
          <Route path="superior-general-council" element={<Members />} />
          <Route path="visitor-council" element={<Visitor />} />
          <Route path="council-members" element={<CouncilMembers />} />
          <Route path="our-commissions" element={<Commission />} />
          <Route path="director-administrator" element={<Administration />} />
          <Route path="central-office-administration" element={<CentralOffice />} />
          <Route path="former-visitor" element={<AuxilaryPresidents />} />
          <Route path="delegations" element={<IndianDelegation />} />

          {/* Vocation Form Pages Routes */}
          <Route path="vocation-form" element={<Vocation />} />

          {/* Contact Us Pages Routes */}
          <Route path="contact-us" element={<ContactUs />} />

          {/* Gallery Pages Routes */}
          <Route path="gallery" element={<Gallery />} />

          {/* Detailed Publications Pages Routes */}
          <Route path="leavning-project" element={<Leavningproject />} />
          <Route path="cahiers-lasalliens" element={<Leavningproject />} />
          <Route path="founders-writings" element={<Leavningproject />} />
          <Route path="lasallian-essais" element={<Leavningproject />} />
          <Route path="lasallian-themes" element={<Leavningproject />} />
          <Route path="general-chapter" element={<Generalchapter />} />
          <Route path="bulletin" element={<Bulletin />} />
          <Route path="pastoral" element={<Pastoral />} />
          <Route path="government-animation" element={<Governmentanimation />} />
          <Route path="lasallian-reflection" element={<Lasallianreflection />} />

          {/* News Section Pages Routes */}
          <Route path="all-flash-news" element={<Allflashnews />} />
          <Route path="all-latest-news" element={<Alllatestnews />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
