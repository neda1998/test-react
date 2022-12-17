import React from "react";
import search from "../../assets/images/search.png";
import Dropdown from "react-bootstrap/Dropdown";
import "./BoxFilter.css";
import MultiRangeSlider from "../MultiRange/MultiRangeSlider";

function BoxFilter() {
  return (
    <div className="filter">
      <div className="text-filter">
        <span>جستجو و فیلترها</span>
      </div>
      <div className="input-filter">
        <input
          type="text"
          placeholder="جستجو با نام و نام‌خانوادگی، کدملی، کد دانشجویی و..."
        />
        <img src={search} alt="" />
      </div>
      <div className="d-flex flex-column dropdown-filter">
        <p>رشته تحصیلی</p>
        <div class="d-flex line-bottom dropdown-strech">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              className="space-svg-icon"
              variant=""
            >
              همه موارد
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                همه موارد
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">همه موارد</Dropdown.Item>
              <Dropdown.Item href="#/action-3">همه موارد</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex flex-column dropdown-filter">
        <p>مقطع تحصیلی</p>
        <div class="d-flex line-bottom dropdown-strech">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              className="space-svg-icon"
              variant=""
            >
              همه موارد
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                همه موارد
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">همه موارد</Dropdown.Item>
              <Dropdown.Item href="#/action-3">همه موارد</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
       <MultiRangeSlider
      min={1}
      max={12}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
    </div>
  );
}

export default BoxFilter;
