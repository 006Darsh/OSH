import React, { useEffect, useState } from "react";
import "./Partners.css";
// import PartnersCard from "./PartnersCard";
import ImageCarousel from "./ImageCarousel";
import { hostname } from "../../hostname";

const Partners = () => {
  // const imageUrl = 'partner1.jpg';
  const [teamMembers, setTeamMembers] = useState([]);
  const [getspeakers, setgetSpeakers] = useState([]);
  const fetchSpeakers = async () => {
    try {
      const response = await fetch(`${hostname}/all-speaker`);
      if (response.ok) {
        const data = await response.json();
        console.log(data.speakers);
        setgetSpeakers(data.speakers);
      } else {
        console.error("Failed to fetch speakers");
      }
    } catch (error) {
      console.error("Error fetching speakers:", error);
    }
  };
  useEffect(() => {
    fetchSpeakers();
  }, []);
  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(`${hostname}/all-team-members`);
      if (!response.ok) {
        throw new Error("Failed to fetch team members");
      }
      const data = await response.json();
      console.log(data.teams);
      setTeamMembers(data.teams);
    } catch (error) {
      console.error("Error fetching team members:", error.message);
    }
  };
  useEffect(() => {
    fetchTeamMembers();
  }, []);
  return (
    <div className="partners-con">
      <div className="partners-content">
        <b>
          <p className="partners-head">
            OSW <span style={{ color: "#0E8388" }}>Family</span>
          </p>
        </b>
        <p>
          A very big thank you to all our partners for their continued
          partnership.
        </p>
        <p>
          If you're interested in being showcased throughout , contact
          opensourceweekend@gmail.com to discuss sponsorship opportunities.
        </p>
        <p className="general-partners">Teams</p>
        <div className="display-partners">
          {/* <PartnersCard/> */}
          <ImageCarousel item={teamMembers} prop={"team"} />
        </div>
        <p className="general-partners">Speakers</p>
        <div className="display-partners">
          {/* <PartnersCard/> */}
          <ImageCarousel item={getspeakers} prop={"speaker"} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
