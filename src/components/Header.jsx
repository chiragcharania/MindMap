import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
const Sidebar = ({ text, array, current, setCurrent, insert, data }) => {
  return (
    <div className="blue-bg">
      <Row>
        <Col md="2">
          <input
            className="next-node-input width-100"
            name="current"
            value={current}
            onChange={e => setCurrent(e.target.value)}
            placeholder="Enter the value"
          />
        </Col>
        <Col md="10">
          <Button variant="warning" onClick={() => { insert(current); setCurrent('') }}>
            Add Node
        </Button>
        </Col>
      </Row>



    </div>

  );
};

export default Sidebar;
