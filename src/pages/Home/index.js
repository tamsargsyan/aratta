import "./index.css";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const rent_items = [
    {
      label: "For Rent",
      key: "0",
    },
    {
      label: "For Purchase",
      key: "1",
    },
  ];

  const city_items = [
    {
      label: "Yerevan",
      key: "0",
    },
    {
      label: "Vanadzor",
      key: "1",
    },
    {
      label: "Gyumri",
      key: "2",
    },
    {
      label: "Artik",
      key: "3",
    },
    {
      label: "Goris",
      key: "4",
    },
  ];

  const district_items = [
    {
      label: "Yerevan",
      key: "0",
    },
    {
      label: "Vanadzor",
      key: "1",
    },
    {
      label: "Gyumri",
      key: "2",
    },
    {
      label: "Artik",
      key: "3",
    },
    {
      label: "Goris",
      key: "4",
    },
  ];

  return (
    <div className='home_section'>
      {/* <Navbar /> */}
      <div className='hero_section'>
        <div className='hero_bg_container'>
          <div className='hero_bg_dark'></div>
        </div>
        <div className='hero_content_container'>
          <p className='hero_content_heading'>
            Jobs for Unemployed Youth No Experience? No Problem
          </p>
          <p className='hero_content_paragraph'>
            Empowering Youth through No Experience Job Opportunities
          </p>
          <NavLink to='/' className='hero_content_btn'>
            Find a home
          </NavLink>
          <div className='hero_filter_container'>
            <Dropdown
              className='hero_filter_option'
              menu={{
                items: rent_items,
              }}
              trigger={["click"]}>
              <NavLink onClick={e => e.preventDefault()}>
                <Space>
                  Rent
                  <DownOutlined />
                </Space>
              </NavLink>
            </Dropdown>

            <Dropdown
              className='hero_filter_option'
              menu={{
                items: city_items,
              }}
              trigger={["click"]}>
              <NavLink onClick={e => e.preventDefault()}>
                <Space>
                  City
                  <DownOutlined />
                </Space>
              </NavLink>
            </Dropdown>

            <Dropdown
              className='hero_filter_option'
              menu={{
                items: district_items,
              }}
              trigger={["click"]}>
              <NavLink onClick={e => e.preventDefault()}>
                <Space>
                  District
                  <DownOutlined />
                </Space>
              </NavLink>
            </Dropdown>
            <NavLink className='hero_filter_search_btn'>
              <SearchOutlined />
            </NavLink>
            {/* <Dropdown
              className='hero_filter_option'
              menu={{
                items,
              }}
              trigger={["click"]}>
              <a onClick={e => e.preventDefault()}>
                <Space>
                  District
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown> */}
          </div>
        </div>
      </div>
    </div>
  );
};
