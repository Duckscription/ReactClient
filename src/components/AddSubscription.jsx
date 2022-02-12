import React from 'react'
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Form,
Input,
Button,
Radio,
Select,
Cascader,
DatePicker,
InputNumber,
TreeSelect,
Switch,} from 'antd';
const { RangePicker } = DatePicker;

const MyForm = styled(Form)`
  display: grid;
  font-family : Montserrat;
  grid-template-columns: 1fr 1fr;
`;

const Header = styled.h1`
  font-size:24px;
  font-weight:bold;
  margin: 20px 10px;
`;

const FormContainer = styled.div`
  display: grid;
  font-size:24px
  margin: 20px;
`;

const MyInput = styled(Input)
`
  display: flex;
  font-size:20px;
  border: none;
  background-color: #FFF9E7;
  border-radius: 15px;
  padding: 10px 20px;
`;


const Submit = styled(Button)`
  font-size: 15px;
  font-family:Poppins;
  background-color:#71A894;
  width : 132px;
  padding: 5px 0px;
  border: none;
  border-radius: 15px;
  width: 169px;
  color: white;
`


const MyRangePicker = styled(RangePicker)`
  &&& {
    font-size:20px;
    border: none;
    background-color: #FFF9E7;
    border-radius: 15px;
    padding: 10px 20px;
    font-size:20px;
  }
`;

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};

function AddSubscription() {

  const { register, handleSubmit, control, formState: { errors } } = useForm();
   const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const values = {
      ...fieldsValue,
       'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    };
    console.log('Received values of form: ', values);
   };
  
  return (
    <MyForm
      onFinish={onFinish} 
    >
      <Form.Item label="Title" name="title">
        <MyInput />
      </Form.Item>

      <Form.Item label="Start date - End date" name="range-picker" {...rangeConfig}>
        <MyRangePicker />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select>
          <Select.Option value="Weekly">Weekly</Select.Option>
          <Select.Option value="Monthly">Monthly</Select.Option>
          <Select.Option value="Yearly">Yearly</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="URL" name="URL">
        <MyInput />
      </Form.Item>

      <Form.Item label="note"  name="note">
        <MyInput />
      </Form.Item>
      <Form.Item>
        <Submit type="primary" htmlType="submit">
          Submit
        </Submit>
      </Form.Item>
    </MyForm>
  );
};

  
export default AddSubscription