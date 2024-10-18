import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const DeliveryCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            branchId: _entity?.branchId,
modelType: _entity?.modelType,
modelId: _entity?.modelId,
deliveryAddress: _entity?.deliveryAddress,
receiverName: _entity?.receiverName,
receiverPhone: _entity?.receiverPhone,
attachmentPath: _entity?.attachmentPath,
deliveryMethod: _entity?.deliveryMethod,
deliveryNote: _entity?.deliveryNote,
deliveryStatus: _entity?.deliveryStatus,
consignmentNo: _entity?.consignmentNo,
consignmentBy: _entity?.consignmentBy,
deliveryDate: _entity?.deliveryDate,
createdAt: _entity?.createdAt,
updatedAt: _entity?.updatedAt,
        };

        setLoading(true);
        try {
            
        const result = await client.service("delivery").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info delivery updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Delivery" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="delivery-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="branchId">branch_id:</label>
                <InputNumber id="branchId" className="w-full mb-3 p-inputtext-sm" value={_entity?.branchId} onChange={(e) => setValByKey("branchId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["branchId"]) && (
              <p className="m-0" key="error-branchId">
                {error["branchId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="modelType">model_type:</label>
                <InputText id="modelType" className="w-full mb-3 p-inputtext-sm" value={_entity?.modelType} onChange={(e) => setValByKey("modelType", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["modelType"]) && (
              <p className="m-0" key="error-modelType">
                {error["modelType"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="modelId">model_id:</label>
                <InputNumber id="modelId" className="w-full mb-3 p-inputtext-sm" value={_entity?.modelId} onChange={(e) => setValByKey("modelId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["modelId"]) && (
              <p className="m-0" key="error-modelId">
                {error["modelId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryAddress">delivery_address:</label>
                <InputText id="deliveryAddress" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryAddress} onChange={(e) => setValByKey("deliveryAddress", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryAddress"]) && (
              <p className="m-0" key="error-deliveryAddress">
                {error["deliveryAddress"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="receiverName">receiver_name:</label>
                <InputText id="receiverName" className="w-full mb-3 p-inputtext-sm" value={_entity?.receiverName} onChange={(e) => setValByKey("receiverName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["receiverName"]) && (
              <p className="m-0" key="error-receiverName">
                {error["receiverName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="receiverPhone">receiver_phone:</label>
                <InputText id="receiverPhone" className="w-full mb-3 p-inputtext-sm" value={_entity?.receiverPhone} onChange={(e) => setValByKey("receiverPhone", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["receiverPhone"]) && (
              <p className="m-0" key="error-receiverPhone">
                {error["receiverPhone"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="attachmentPath">attachment_path:</label>
                <InputText id="attachmentPath" className="w-full mb-3 p-inputtext-sm" value={_entity?.attachmentPath} onChange={(e) => setValByKey("attachmentPath", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["attachmentPath"]) && (
              <p className="m-0" key="error-attachmentPath">
                {error["attachmentPath"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryMethod">delivery_method:</label>
                <InputText id="deliveryMethod" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryMethod} onChange={(e) => setValByKey("deliveryMethod", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryMethod"]) && (
              <p className="m-0" key="error-deliveryMethod">
                {error["deliveryMethod"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryNote">delivery_note:</label>
                <InputText id="deliveryNote" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryNote} onChange={(e) => setValByKey("deliveryNote", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryNote"]) && (
              <p className="m-0" key="error-deliveryNote">
                {error["deliveryNote"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryStatus">delivery_status:</label>
                <InputText id="deliveryStatus" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryStatus} onChange={(e) => setValByKey("deliveryStatus", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryStatus"]) && (
              <p className="m-0" key="error-deliveryStatus">
                {error["deliveryStatus"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="consignmentNo">consignment_no:</label>
                <InputText id="consignmentNo" className="w-full mb-3 p-inputtext-sm" value={_entity?.consignmentNo} onChange={(e) => setValByKey("consignmentNo", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["consignmentNo"]) && (
              <p className="m-0" key="error-consignmentNo">
                {error["consignmentNo"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="consignmentBy">consignment_by:</label>
                <InputText id="consignmentBy" className="w-full mb-3 p-inputtext-sm" value={_entity?.consignmentBy} onChange={(e) => setValByKey("consignmentBy", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["consignmentBy"]) && (
              <p className="m-0" key="error-consignmentBy">
                {error["consignmentBy"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryDate">delivery_date:</label>
                <InputNumber id="deliveryDate" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryDate} onChange={(e) => setValByKey("deliveryDate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryDate"]) && (
              <p className="m-0" key="error-deliveryDate">
                {error["deliveryDate"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="createdAt">created_at:</label>
                <InputNumber id="createdAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.createdAt} onChange={(e) => setValByKey("createdAt", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["createdAt"]) && (
              <p className="m-0" key="error-createdAt">
                {error["createdAt"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="updatedAt">updated_at:</label>
                <InputNumber id="updatedAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.updatedAt} onChange={(e) => setValByKey("updatedAt", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["updatedAt"]) && (
              <p className="m-0" key="error-updatedAt">
                {error["updatedAt"]}
              </p>
            )}
          </small>
            </div>
                <div className="col-12">&nbsp;</div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(DeliveryCreateDialogComponent);
