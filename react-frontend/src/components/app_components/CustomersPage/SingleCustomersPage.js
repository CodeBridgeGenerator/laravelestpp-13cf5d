import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import client from "../../../services/restClient";
import CommentsSection from "../../common/CommentsSection";
import ProjectLayout from "../../Layouts/ProjectLayout";

import AddressesPage from "../AddressesPage/AddressesPage";

const SingleCustomersPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    const [userId, setUserId] = useState([]);
const [branchId, setBranchId] = useState([]);
const [customerType, setCustomerType] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("customers")
            .get(urlParams.singleCustomersId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"userId","branchId","customerType"] }})
            .then((res) => {
                set_entity(res || {});
                const userId = Array.isArray(res.userId)
            ? res.userId.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.userId
                ? [{ _id: res.userId._id, name: res.userId.name }]
                : [];
        setUserId(userId);
const branchId = Array.isArray(res.branchId)
            ? res.branchId.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.branchId
                ? [{ _id: res.branchId._id, name: res.branchId.name }]
                : [];
        setBranchId(branchId);
const customerType = Array.isArray(res.customerType)
            ? res.customerType.map((elem) => ({ _id: elem._id, type: elem.type }))
            : res.customerType
                ? [{ _id: res.customerType._id, type: res.customerType.type }]
                : [];
        setCustomerType(customerType);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Customers", type: "error", message: error.message || "Failed get customers" });
            });
    }, [props,urlParams.singleCustomersId]);


    const goBack = () => {
        navigate("/customers");
    };

      const toggleHelpSidebar = () => {
    setHelpSidebarVisible(!isHelpSidebarVisible);
  };

  const copyPageLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        props.alert({
          title: "Link Copied",
          type: "success",
          message: "Page link copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        props.alert({
          title: "Error",
          type: "error",
          message: "Failed to copy page link.",
        });
      });
  };

    const menuItems = [
        {
            label: "Copy link",
            icon: "pi pi-copy",
            command: () => copyPageLink(),
        },
        {
            label: "Help",
            icon: "pi pi-question-circle",
            command: () => toggleHelpSidebar(),
        },
    ];

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-12">
                <div className="flex align-items-center justify-content-between">
                <div className="flex align-items-center">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Customers</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>customers/{urlParams.singleCustomersId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">name</label><p className="m-0 ml-3" >{_entity?.name}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">email</label><p className="m-0 ml-3" >{_entity?.email}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">phone_number</label><p className="m-0 ml-3" >{Number(_entity?.phoneNumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">ic_no</label><p className="m-0 ml-3" >{Number(_entity?.icNo)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">dob</label><p className="m-0 ml-3" >{Number(_entity?.dob)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">balance</label><p className="m-0 ml-3" >{Number(_entity?.balance)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">tax_no</label><p className="m-0 ml-3" >{_entity?.taxNo}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">other_info</label><p className="m-0 ml-3" >{_entity?.otherInfo}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">remember_token</label><p className="m-0 ml-3" >{_entity?.rememberToken}</p></div>
            <div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">User Name</label>
                    {userId.map((elem) => (
                        <Link key={elem._id} to={`/users/${elem._id}`}>
                        <div>
                  {" "}
                            <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">Branch</label>
                    {branchId.map((elem) => (
                        <Link key={elem._id} to={`/branches/${elem._id}`}>
                        <div>
                  {" "}
                            <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">Customer Type</label>
                    {customerType.map((elem) => (
                        <Link key={elem._id} to={`/customerTypes/${elem._id}`}>
                        <div>
                  {" "}
                            <p className="text-xl text-primary">{elem.type}</p>
                            </div>
                        </Link>
                    ))}</div>

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        <div className="mt-2">
            <TabView>
                <div className="mt-2">
                <TabView>
                
                    <TabPanel header="true" leftIcon="pi pi-building-columns mr-2">
                    <AddressesPage/>
                    </TabPanel>
                    
                </TabView></div>
            </TabView>
        </div>

      <CommentsSection
        recordId={urlParams.singleCustomersId}
        user={props.user}
        alert={props.alert}
        serviceName="customers"
      />
      <div
        id="rightsidebar"
        className={classNames("overlay-auto z-1 surface-overlay shadow-2 absolute right-0 w-20rem animation-duration-150 animation-ease-in-out", { "hidden" : !isHelpSidebarVisible })}
        style={{ top: "60px", height: "calc(100% - 60px)" }}
      >
        <div className="flex flex-column h-full p-4">
          <span className="text-xl font-medium text-900 mb-3">Help bar</span>
          <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
        </div>
      </div>
      </div>
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

export default connect(mapState, mapDispatch)(SingleCustomersPage);
