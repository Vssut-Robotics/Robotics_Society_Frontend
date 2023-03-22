import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../actions/MemberAction";
import Member from "../components/Member";
import "../styles/TeamScreenStyle.css";

function TeamScreen() {
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.memberlist);
  const { error, loading, members } = memberList;

  useEffect(() => {
    dispatch(listMembers());
  }, [dispatch]);
  // console.log(members);
  return (
    <div className="TeamScreen">
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

export default TeamScreen;
