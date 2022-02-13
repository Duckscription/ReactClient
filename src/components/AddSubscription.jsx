import React from 'react';
import styled from 'styled-components';
// import { addNewSub } from '../data/mockData';
import { addNewSub } from '../api/network';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Row,
  Col,
} from 'antd';
const { RangePicker } = DatePicker;

const MyForm = styled(Form)`
  font-family: Montserrat;
  margin: auto;
  padding: 50px;
  width: 60%;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 10px;
`;

const MyInput = styled(Input)
` d
  font-size:20px;
  border: none;
  background-color: #fff9e7;
  border-radius: 15px;
`;

const Submit = styled(Button)`
  font-size: 15px;
  font-family: Poppins;
  background-color: #71a894;
  width: 132px;
  padding: 5px 0px;
  border: none;
  border-radius: 15px;
  width: 169px;
  color: white;
`;

const MyRangePicker = styled(RangePicker)`
  &&& {
    font-size: 20px;
    border: none;
    background-color: #fff9e7;
    border-radius: 15px;
    padding: 10px 20px;
    font-size: 20px;
  }
`;

const MySelect = styled(Select)`
  background-color: #fff9e7;
  border: none;
`;

const textConfig = {
  rules: [
    {
      type: 'string',
      required: true,
      message: 'This input is required.',
    },
  ],
};

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time.',
    },
  ],
};

function AddSubscription(props) {
  const [form, setForm] = useState([]);

  useEffect(() => {
    console.log('hi', props.user);
    addNewSub(form, props.user).then((result) => {
      console.log('data', result);
    });
  }, [form]);

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    console.log(rangeValue[0].format('YYYY-MM-DD'));
    const values = {
      ...fieldsValue,
      dateStart: rangeValue[0].format('YYYY-MM-DD'),
      dateEnd: rangeValue[1].format('YYYY-MM-DD'),
    };
    console.log('Received values of form: ', values);
    setForm(values);
  };

  return (
    <MyForm onFinish={onFinish}>
      <Row>
        <Col span={24} offset={24}>
          <AiOutlineCloseCircle
            onClick={() => {
              props.sendToRoles(false);
            }}
            className="icons"
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item label="Title" name="title" {...textConfig}>
            <MyInput />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Start date - End date"
            name="range-picker"
            {...rangeConfig}
          >
            <MyRangePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item label="Price" name="price" {...textConfig}>
            <MyInput />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Type" name="type" {...textConfig}>
            <MySelect>
              <Select.Option value="Weekly">Weekly</Select.Option>
              <Select.Option value="Monthly">Monthly</Select.Option>
              <Select.Option value="Yearly">Yearly</Select.Option>
            </MySelect>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item label="Color" name="color" {...textConfig}>
            <Radio.Group>
              <Radio.Button value="pink">
                <img
                  src={require('../img/pink.svg').default}
                  alt="mySvgImage"
                />
              </Radio.Button>
              <Radio.Button value="blue">
                <img
                  src={require('../img/blue.svg').default}
                  alt="mySvgImage"
                />
              </Radio.Button>
              <Radio.Button value="orange">
                <img
                  src={require('../img/orange.svg').default}
                  alt="mySvgImage"
                />
              </Radio.Button>
              <Radio.Button value="green">
                <img
                  src={require('../img/green.svg').default}
                  alt="mySvgImage"
                />
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="URL" name="URL">
            <MyInput />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Form.Item label="Note" name="note">
            <MyInput />
          </Form.Item>
        </Col>
        <Col offset={3} span={4}>
          <Form.Item>
            <Submit type="primary" htmlType="submit">
              Submit
            </Submit>
          </Form.Item>
        </Col>
      </Row>
    </MyForm>
  );
}

export default AddSubscription;
