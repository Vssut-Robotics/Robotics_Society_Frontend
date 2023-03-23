import React, { useEffect } from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../actions/MemberAction";
import "../styles/TeamSectionStyle.css";
import { Link } from "react-router-dom";

function TeamSection() {
  return (
    <section id="TeamSection">
      <p className="section_title">COLLEGE DIGNATARIES</p>
      <SimpleGrid column={2} spacing={10} minChildWidth="250px">
        <Box className="dignitary">
          <div className="profileimg">
            <img src="https://www.vssut.ac.in/doc/vc-2022.jpg" alt="" />
          </div>
          <div className="designation">
            <p> Prof. Banshidhar Majhi</p>
            <p>Vice Chancellor, VSSUT</p>
          </div>
        </Box>
        <Box className="dignitary">
          <div className="profileimg">
            <img src="https://i.imgur.com/yN21RIX.jpg" alt="" />
          </div>
          <div className="designation">
            <p> Prof. Sanjaya Kumar Patro</p>
            <p>Dean, Students' Welfare VSSUT</p>
          </div>
        </Box>
        <Box className="dignitary">
          <div className="profileimg">
            <img src="https://i.imgur.com/5dNhi5U.jpg" alt="" />
          </div>
          <div className="designation">
            <p>Mr. Bidyadhar Rout</p>
            <p>Vice-President Technical Society</p>
          </div>
        </Box>
        <Box className="dignitary">
          <div className="profileimg">
            <img src=" https://i.imgur.com/dInKcjK.png" alt="" />
          </div>

          <div className="designation">
            <p>Dr. Santosh Kumar Sahu</p>
            <p>Faculty Advisor Robotics Society</p>
          </div>
        </Box>
      </SimpleGrid>
      <SimpleGrid spacing={10} minChildWidth="250px" className="student">
        <div className="student_dignitary">
          <div className="profileimg">
            <img src="https://i.imgur.com/pUf6yEj.jpg" alt="" />
          </div>
          <div className="designation">
            <p> Chirag Pradhan</p>
            <p>Co-ordinator</p>
          </div>
        </div>
        <Box className="student_dignitary">
          <div className="profileimg">
            <img src="https://i.imgur.com/wEZKqRo.jpg" alt="" />
          </div>
          <div className="designation">
            <p> Ashwati M</p>
            <p>Asst. Co-ordinator</p>
          </div>
        </Box>
        <Box className="student_dignitary">
          <Link to="/team">
            <button>Click Me</button>
          </Link>
        </Box>
      </SimpleGrid>
    </section>
  );
}
export default TeamSection;
