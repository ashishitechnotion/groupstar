  import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Icon,Card } from 'antd';

import LayoutContent from '../../components/utility/layoutContent';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import  StickerWidget from '../../components/Widgets/sticker/sticker-widget'
import SaleWidget from '../../components/Widgets/sale/sale-widget';
import PageHeader from '../../../shared/components/utility/pageHeader';
//import IsoWidgetsWrapper from '../../components/utility/'
import StaticDataClass from './static_data';
import ActiveProductionClass from './active_production';

class Dashboard extends Component {
  constructor(props) 
  {
    super(props)
    this.state = {static_data:[],activeProduction_data:[]}
  }
    render () 
    {
      this.state.static_data=[
        {
          id:"1",
          st_number:"210",
          st_text:"Unread Email",
          st_icon:"ion-email-unread",
          st_font_color:"#ffffff",
          st_bgColor:"#7266BA",
          sa_label:"Income",
          sa_price:"$15000",
          sa_font_color:"#F75D81",
          sa_details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
        },
        { 
          id:"2",
          st_number:"1749",
          st_text:"Image Upload",
          st_icon:"ion-android-camera",
          st_font_color:"#ffffff",
          st_bgColor:"#42A5F6",
          sa_label:"Income",
          sa_price:"$15000",
          sa_font_color:"#F75D81",
          sa_details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
      },
        {
          id:"3",
          st_number:"3024",
          st_text:"Total Message",
          st_icon:"ion-chatbubbles",
          st_font_color:"#ffffff",
          st_bgColor:"#7ED320",
          sa_label:"Income",
          sa_price:"$15000",
          sa_font_color:"#F75D81",
          sa_details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
        },
        {
          id:"4",
          st_number:"54",
          st_text:"Orders Post",
          st_icon:"ion-android-cart",
          st_font_color:"#ffffff",
          st_bgColor:"#F75D81",
          sa_label:"Income",
          sa_price:"$15000",
          sa_font_color:"#F75D81",
          sa_details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
        }
      ]

      this.state.activeProduction_data=[
        {
          id:"1",
          alt:"example",src:"http://1.bp.blogspot.com/-qncMBtFNBY4/T_bLlzrLm5I/AAAAAAAJJt0/7CVfdtL0COM/s1600/positive+inspirational+quotes+%281%29.jpg",title:"instructables",desc:"Monthly Macro Briefing Project",otherInfo:"Org: GroupStar | ID83824"},
        {
          id:"2",
          alt:"example",src:"http://1.bp.blogspot.com/-qncMBtFNBY4/T_bLlzrLm5I/AAAAAAAJJt0/7CVfdtL0COM/s1600/positive+inspirational+quotes+%281%29.jpg",title:"instructables",desc:"Monthly Macro Briefing Project",otherInfo:"Org: GroupStar | ID83824"},
        {
          id:"3",
          alt:"example",src:"http://1.bp.blogspot.com/-qncMBtFNBY4/T_bLlzrLm5I/AAAAAAAJJt0/7CVfdtL0COM/s1600/positive+inspirational+quotes+%281%29.jpg",title:"instructables",desc:"Monthly Macro Briefing Project",otherInfo:"Org: GroupStar | ID83824"},
        {
          id:"4",
          alt:"example",src:"http://1.bp.blogspot.com/-qncMBtFNBY4/T_bLlzrLm5I/AAAAAAAJJt0/7CVfdtL0COM/s1600/positive+inspirational+quotes+%281%29.jpg",title:"instructables",desc:"Monthly Macro Briefing Project",otherInfo:"Org: GroupStar | ID83824"},
      ]

      

        var colstyle={padding:"5px"};
        return (
            
            <LayoutContentWrapper  >
             <PageHeader>
              Dash Board
              </PageHeader>
            <LayoutContent>
                <StaticDataClass data={this.state.static_data} style={{paddingBottom:"55px"}}/>
               
               
            <h3  style={{paddingTop:"55px"}}>Your Productions</h3>
            <p>Live Productions in App</p>

<ActiveProductionClass activeProductionData={this.state.activeProduction_data}/>
              <br/>
              <br/>
<h3>Your Archive Productions</h3>
<ActiveProductionClass activeProductionData={this.state.activeProduction_data}/>

            </LayoutContent>
          </LayoutContentWrapper>
        )
    }
}

export default Dashboard