import "./index.css";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { t } = useTranslation();

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

  const handleRentItemsClick = ({ key }) => {
    const clickedItem = rent_items.find(item => item.key === key);
    console.log(clickedItem.label, "-----rent");
  };

  const handleCityItemsClick = ({ key }) => {
    const clickedItem = city_items.find(item => item.key === key);
    console.log(clickedItem.label, "-----city");
  };

  const handleDistrictItemsClick = ({ key }) => {
    const clickedItem = district_items.find(item => item.key === key);
    console.log(clickedItem.label, "-----district");
  };

  console.log(t("hero_heading"));

  return (
    <div className='home_section'>
      {/* <Navbar /> */}
      <div className='hero_section'>
        <div className='hero_bg_container'>
          <div className='hero_bg_dark'></div>
        </div>
        <div className='hero_content_container'>
          <p className='hero_content_heading'>{t("hero_heading")}</p>
          <p className='hero_content_paragraph'>{t("hero_subheading")}</p>
          <NavLink to='/' className='hero_content_btn'>
            Find a home
          </NavLink>
          <div className='hero_filter_container'>
            <Dropdown
              className='hero_filter_option'
              menu={{
                items: rent_items,
                onClick: handleRentItemsClick,
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
                onClick: handleCityItemsClick,
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
                onClick: handleDistrictItemsClick,
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
          </div>
        </div>
      </div>
    </div>
  );
};
