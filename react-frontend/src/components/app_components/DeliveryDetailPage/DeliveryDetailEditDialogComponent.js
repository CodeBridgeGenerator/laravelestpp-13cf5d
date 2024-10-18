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

const DeliveryDetailCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            deliveryId: _entity?.deliveryId,
productId: _entity?.productId,
variationId: _entity?.variationId,
deliveredQty: _entity?.deliveredQty,
createdAt: _entity?.createdAt,
updatedAt: _entity?.updatedAt,
        };

        setLoading(true);
        try {
            
        const result = await client.service("deliveryDetail").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info deliveryDetail updated successfully" });
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
        <Dialog header="Edit Delivery Detail" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="deliveryDetail-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryId">delivery_id:</label>
                <InputNumber id="deliveryId" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryId} onChange={(e) => setValByKey("deliveryId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryId"]) && (
              <p className="m-0" key="error-deliveryId">
                {error["deliveryId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="productId">product_id:</label>
                <InputNumber id="productId" className="w-full mb-3 p-inputtext-sm" value={_entity?.productId} onChange={(e) => setValByKey("productId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["productId"]) && (
              <p className="m-0" key="error-productId">
                {error["productId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="variationId">variation_id:</label>
                <InputNumber id="variationId" className="w-full mb-3 p-inputtext-sm" value={_entity?.variationId} onChange={(e) => setValByKey("variationId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["variationId"]) && (
              <p className="m-0" key="error-variationId">
                {error["variationId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveredQty">delivered_qty:</label>
                <InputNumber id="deliveredQty" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveredQty} onChange={(e) => setValByKey("deliveredQty", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveredQty"]) && (
              <p className="m-0" key="error-deliveredQty">
                {error["deliveredQty"]}
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

export default connect(mapState, mapDispatch)(DeliveryDetailCreateDialogComponent);
