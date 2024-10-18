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


const SinglePurchaseProductPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("purchaseProduct")
            .get(urlParams.singlePurchaseProductId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "PurchaseProduct", type: "error", message: error.message || "Failed get purchaseProduct" });
            });
    }, [props,urlParams.singlePurchaseProductId]);


    const goBack = () => {
        navigate("/purchaseProduct");
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
                    <h3 className="m-0">Purchase Product</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>purchaseProduct/{urlParams.singlePurchaseProductId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">purchase_id</label><p className="m-0 ml-3" >{Number(_entity?.purchaseId)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">product_id</label><p className="m-0 ml-3" >{Number(_entity?.productId)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">variation_id</label><p className="m-0 ml-3" >{Number(_entity?.variationId)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">quantity</label><p className="m-0 ml-3" >{Number(_entity?.quantity)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">price</label><p className="m-0 ml-3" >{Number(_entity?.price)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">tax</label><p className="m-0 ml-3" >{Number(_entity?.tax)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">discount</label><p className="m-0 ml-3" >{Number(_entity?.discount)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">created_at</label><p className="m-0 ml-3" >{Number(_entity?.createdAt)}</p></div>
<div className="col-12 md:col-6 lg:col-3 mb-10"><label className="text-sm text-gray-600">updated_at</label><p className="m-0 ml-3" >{Number(_entity?.updatedAt)}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        <div className="mt-2">
            <TabView>
                
            </TabView>
        </div>

      <CommentsSection
        recordId={urlParams.singlePurchaseProductId}
        user={props.user}
        alert={props.alert}
        serviceName="purchaseProduct"
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

export default connect(mapState, mapDispatch)(SinglePurchaseProductPage);
