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

const CalendarCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            title: _entity?.title,
startDate: _entity?.startDate,
endDate: _entity?.endDate,
description: _entity?.description,
branchId: _entity?.branchId,
createdAt: _entity?.createdAt,
updatedAt: _entity?.updatedAt,
        };

        setLoading(true);
        try {
            
        const result = await client.service("calendar").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info calendar updated successfully" });
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
        <Dialog header="Edit Calendar" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="calendar-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="title">title:</label>
                <InputText id="title" className="w-full mb-3 p-inputtext-sm" value={_entity?.title} onChange={(e) => setValByKey("title", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["title"]) && (
              <p className="m-0" key="error-title">
                {error["title"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="startDate">start_date:</label>
                <InputNumber id="startDate" className="w-full mb-3 p-inputtext-sm" value={_entity?.startDate} onChange={(e) => setValByKey("startDate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["startDate"]) && (
              <p className="m-0" key="error-startDate">
                {error["startDate"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="endDate">end_date:</label>
                <InputNumber id="endDate" className="w-full mb-3 p-inputtext-sm" value={_entity?.endDate} onChange={(e) => setValByKey("endDate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["endDate"]) && (
              <p className="m-0" key="error-endDate">
                {error["endDate"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="description">description:</label>
                <InputText id="description" className="w-full mb-3 p-inputtext-sm" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["description"]) && (
              <p className="m-0" key="error-description">
                {error["description"]}
              </p>
            )}
          </small>
            </div>
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

export default connect(mapState, mapDispatch)(CalendarCreateDialogComponent);
