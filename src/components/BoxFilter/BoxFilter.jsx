import React from "react";
import search from "../../assets/images/search.png";
import Dropdown from "react-bootstrap/Dropdown";
import "./BoxFilter.css";

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
        <Dropdown.Toggle id="dropdown-button-dark-example1" className="space-svg-icon" variant="">
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
        <Dropdown.Toggle id="dropdown-button-dark-example1" className="space-svg-icon" variant="">
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
      <div className="slidecontainer">
        <div className="slider-range-content">
          <div className="progress"></div>
        </div>
        <div className="slide-range-input">
          <input
            type="range"
            max="20000"
            value="5000"
            step="1000"
            className="slider-range-right"
            dataRole="doubleslider"
            onInput="test(this,'simple-range')"
          />

          <input
            type="range"
            max="20000"
            value="15000"
            step="1000"
            className="slider-range-left"
            dataRole="doubleslider"
            onInput="test(this,'simple-range-left')"
          />
        </div>
        <div className="d-flex flex-row justify-content-around number1">
          <div>
            <span id="simple-range">1</span>
          </div>
          <div>
            <span id="simple-range-left">12</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default BoxFilter;
