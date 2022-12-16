import React from "react";
import ItemsSidebar from "../ItemsSidebar/ItemsSidebar";
import "./Sidebar.css";
import Frame from "../../assets/images/Frame.png";
import students from "../../assets/images/students.png";
import sendMessage from "../../assets/images/sendMessage.png";
import map from "../../assets/images/map.png";
import advertise from "../../assets/images/advertise.png";
import logoUniversity from "../../assets/images/logoUniversity.png";
import BoxFilter from "../BoxFilter/BoxFilter";
import InformationUser from "../Table/InformationUser";

function Sidebar() {
  
  return (
    <>
      <div className="row m-0">
        <div className="col-xl-2 p-0 col-md-6" id="sidebar">
          <div className="sidebar">
            <div className="container-fluid">
              <div className="row">
                <div className="d-flex flex-column p-0">
                  <ItemsSidebar img={Frame} text="داشبورد" />
                  <ItemsSidebar img={students} text="لیست دانشجویان" />
                  <ItemsSidebar
                    img={sendMessage}
                    text="ارسال پیام در کارتابل"
                  />
                  <ItemsSidebar img={map} text="نقشه دانشگاه" />
                  <ItemsSidebar img={advertise} text="بنرها و تبلیغات" />
                </div>
              </div>
            </div>
            <div className="logo">
              <img src={logoUniversity} alt="logo" />
              <p>دانشگاه آزاد اسلامی</p>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-12 m-auto col-md-12 space-box">
          <div className="row">
            <div className="col-lg-4">
              <BoxFilter />
            </div>
            <div className="col-lg-8">
              <InformationUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
