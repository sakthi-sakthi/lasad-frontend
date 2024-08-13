import { useEffect, useState } from "react";
import { ApiUrl } from "./components/API/Api";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Ourstatic from "./components/ourstatic";
import Scrollbar from "./components/scrollbar";
import Members from "./components/Members";
import Slider from "./components/slider";
import axios from "axios";
import News from "./components/News";
import { ThreeDots } from "react-loader-spinner";

function Home() {
  const [loading, setLoading] = useState(true);
  const [homedata, setHomedata] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/homepagee/sections`);
        localStorage.setItem("HomeData", JSON.stringify(response?.data?.data));
        setHomedata(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ThreeDots
          visible={true}
          height="60"
          width="60"
          color="#001c38"
          radius="9"
          ariaLabel="lasalle-india-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />

      </div>
    );
  }

  return (
    <>
      <Header menuData={homedata?.headermenudata} />
      <Slider sliderdata={homedata?.SlidesData} />
      <Scrollbar scrollbardata={homedata?.newsdata} />
      <About />
      <Ourstatic />
      <br />
      <Members />
      <br />
      <News upcomedata={homedata?.newsdata} />
      <br />
      <Footer />
    </>
  );
}

export default Home;
