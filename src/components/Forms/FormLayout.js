import React from "react";
import {Col, Row} from "antd";

export const FormLayout = ({children}) => {
    return (
        <Row justify={'center'}>
            <Col span={12}>{children}</Col>
        </Row>
    )
}