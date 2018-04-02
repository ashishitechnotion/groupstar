import React, { Component } from 'react';
import { Input } from 'antd';
import Form from '../../../shared/components/uielements/form';
import Checkbox from '../../../shared/components/uielements/checkbox';
import Button from '../../../shared/components/uielements/button';
import Notification from '../../../shared/components/notification';
import LayoutWrapper from '../../../shared/components/utility/layoutWrapper.js';
import PageHeader from '../../../shared/components/utility/pageHeader';
import Box from '../../../shared/components/utility/box';
import IntlMessages from '../../../shared/components/utility/intlMessages';


const FormItem = Form.Item;

class FormWIthSubmissionButton extends Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Notification(
          'success',
          'Received values of form',
          JSON.stringify(values)
        );
      }
    });
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
        <LayoutWrapper>
        <PageHeader>
          {/* {<IntlMessages id="forms.formsWithValidation.header" />} */}
          Update Password
        </PageHeader>
        <Box>


      <Form onSubmit={this.handleSubmit} >
         <FormItem {...formItemLayout} label="Current Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your current password!',
              },
              {
                validator: this.checkConfirm,
              },
            ],
          })(<Input type="password" />)}
        </FormItem>

        {/* <FormItem {...formItemLayout} label="E-mail" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input name="email" id="email" />)}
        </FormItem> */}
        <FormItem {...formItemLayout} label="New Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your new password!',
              },
              {
                validator: this.checkConfirm,
              },
            ],
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm New Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.checkPassword,
              },
            ],
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>
       
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </FormItem>
      </Form>
      </Box>
      </LayoutWrapper>
    );
  }
}

const WrappedFormWIthSubmissionButton = Form.create()(FormWIthSubmissionButton);
export default WrappedFormWIthSubmissionButton;
