import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../shared/components/uielements/input';
import InputNumber from '../../../shared/components/uielements/InputNumber';
import Select, { SelectOption } from '../../../shared/components/uielements/select';
import DatePicker from '../../../shared/components/uielements/datePicker';
import AutoComplete from '../../../shared/components/uielements/autocomplete';
import PageHeader from '../../../shared/components/utility/pageHeader';
import Box from '../../../shared/components/utility/box';
import LayoutWrapper from '../../../shared/components/utility/layoutWrapper.js';
import ContentHolder from '../../../shared/components/utility/contentHolder';
import IntlMessages from '../../../shared/components/utility/intlMessages';
import Form from '../../../shared/components/uielements/form';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
}
export default class extends Component {
 

  render() {
    const rowStyle = {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap'
    };
    const colStyle = {
      marginBottom: '16px'
    };
    const gutter = 16;
    return (

      <LayoutWrapper>
        <PageHeader>
            Profile setting
        </PageHeader>
  
          <Box>
        <Form>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          {/* <FormItem
            {...formItemLayout}
            label={"Name : Benny Low"}
          >
           
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={"Name"}
          >
          
          </FormItem> */}
          </Col> 
       </Form>
       </Box> 
        {/* <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="forms.input.basicTitle" />}
              subtitle={<IntlMessages id="forms.input.basicSubTitle" />}
            >
              <ContentHolder>
                <Input placeholder="Basic usage" />
              </ContentHolder>
            </Box>
          </Col> */}
          {/* <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="forms.input.variationsTitle" />}
              subtitle={<IntlMessages id="forms.input.variationsSubtitle" />}
            >
              <ContentHolder>
                <Input
                  size="large"
                  placeholder="large size"
                  style={{ marginBottom: '15px' }}
                />
                <Input
                  placeholder="default size"
                  style={{ marginBottom: '15px' }}
                />
                <Input size="small" placeholder="small size" />
              </ContentHolder>
            </Box>
          </Col> */}
        {/* </Row> */}

      </LayoutWrapper>
    );
  }
}
