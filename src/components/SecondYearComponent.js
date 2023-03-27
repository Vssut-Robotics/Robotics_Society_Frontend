import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../actions/MemberAction";
import Member from "../components/Member";
import { Grid, Box } from "@mui/material";
import "../styles/TeamScreenStyle.css";

function SecondYearComponent({ year }) {
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.memberlist);
  const { error, loading, members } = memberList;

  useEffect(() => {
    dispatch(listMembers(year));
    console.log(members);

  }, [dispatch]);

  return (
    <div>
      <Grid container className="memberContainer" spacing={2}>
        {members && Array.isArray(members)
          ? members.map((member) => (
              <Member member={member} profileImg={member.profile} />
            ))
          : null}
      </Grid>
    </div>
  );
}

export default SecondYearComponent;
