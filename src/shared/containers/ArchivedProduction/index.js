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
        Archived Productions
        </PageHeader>
  
          <Box>
        <Form>
        <Col md={12} sm={12} xs={24} style={colStyle}>
        
          </Col> 
       </Form>
       </Box> 
      
      </LayoutWrapper>
    );
  }
}
