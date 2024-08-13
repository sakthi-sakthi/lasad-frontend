import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "../components/API/Api";
import { ThreeDots } from "react-loader-spinner";
const MainLayout = () => {
  const [homedata, setHomedata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homesdata = localStorage.getItem('HomeData');
        if (homesdata) {
          setHomedata(JSON.parse(homesdata));
        }
        const response = await axios.get(`${ApiUrl}/get/homepagee/sections`);
        const newData = response?.data?.data;
        const exixtingdate = localStorage.getItem("HomeData");
        if (newData !== JSON.stringify(exixtingdate)) {
          localStorage.removeItem("HomeData");
          localStorage.setItem("HomeData", JSON.stringify(newData));
          setHomedata(newData);
        }
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
      <div style={{ minHeight: "66.5vh", padding: "10px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
