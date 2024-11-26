import "./index.css";

export const Home = () => {
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
          <button className='hero_content_btn'>Find a home</button>
        </div>
      </div>
    </div>
  );
};
