import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import QrMastersPage from "./QrMastersPage";

const QrMasterProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <QrMastersPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(QrMasterProjectLayoutPage);