import React from 'react';
import { Button, Row, Col } from 'reactstrap';

const RatingButtons = ({ onRate }) => {
  const ratings = [
    { emoji: "😡", value: 1 },
    { emoji: "😕", value: 2 },
    { emoji: "😐", value: 3 },
    { emoji: "😊", value: 4 },
    { emoji: "😍", value: 5 },
  ];

  return (
    <Row className="justify-content-center">
      {ratings.map((item, i) => (
        <Col key={i} xs="auto">
          <Button
            color="non"
            onClick={() => onRate(item.value)}
            style={{ fontSize: '3rem' }}
          >
            {item.emoji}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default RatingButtons;