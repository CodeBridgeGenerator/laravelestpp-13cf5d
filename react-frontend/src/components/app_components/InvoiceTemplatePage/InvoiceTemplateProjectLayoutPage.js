import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import InvoiceTemplatePage from "./InvoiceTemplatePage";

const InvoiceTemplateProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <InvoiceTemplatePage />
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

export default connect(mapState, mapDispatch)(InvoiceTemplateProjectLayoutPage);