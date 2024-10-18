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

const VariationsCreateDialogComponent = (props) => {
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
productId: _entity?.productId,
name: _entity?.name,
subSku: _entity?.subSku,
purchasePrice: _entity?.purchasePrice,
sellPrice: _entity?.sellPrice,
imagePath: _entity?.imagePath,
        };

        setLoading(true);
        try {
            
        const result = await client.service("variations").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info variations updated successfully" });
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
        <Dialog header="Edit Variations" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="variations-edit-dialog-component">
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
                <label htmlFor="name">name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) && (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="subSku">sub_sku:</label>
                <InputText id="subSku" className="w-full mb-3 p-inputtext-sm" value={_entity?.subSku} onChange={(e) => setValByKey("subSku", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["subSku"]) && (
              <p className="m-0" key="error-subSku">
                {error["subSku"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="purchasePrice">purchase_price:</label>
                <InputText id="purchasePrice" className="w-full mb-3 p-inputtext-sm" value={_entity?.purchasePrice} onChange={(e) => setValByKey("purchasePrice", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["purchasePrice"]) && (
              <p className="m-0" key="error-purchasePrice">
                {error["purchasePrice"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="sellPrice">sell_price:</label>
                <InputNumber id="sellPrice" className="w-full mb-3 p-inputtext-sm" value={_entity?.sellPrice} onChange={(e) => setValByKey("sellPrice", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["sellPrice"]) && (
              <p className="m-0" key="error-sellPrice">
                {error["sellPrice"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="imagePath">image_path:</label>
                <InputText id="imagePath" className="w-full mb-3 p-inputtext-sm" value={_entity?.imagePath} onChange={(e) => setValByKey("imagePath", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["imagePath"]) && (
              <p className="m-0" key="error-imagePath">
                {error["imagePath"]}
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

export default connect(mapState, mapDispatch)(VariationsCreateDialogComponent);
