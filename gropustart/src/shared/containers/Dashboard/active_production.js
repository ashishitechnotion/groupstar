import React, { Component } from 'react'
import { Col, Row, Icon,Card } from 'antd';
import  StickerWidget from '../../components/Widgets/sticker/sticker-widget'
import SaleWidget from '../../components/Widgets/sale/sale-widget'

class ActiveProduction extends Component {
    render () {
        var colstyle={padding:"5px"};
        return (
            <div>
                  {this.props.activeProductionData.map(x =>

   <Col md={6} sm={12} xs={24} style={colstyle} key={x.id}>
   <Card bodyStyle={{ padding: 0 }}>
<div className="custom-image">
<img
alt={x.alt}
width="100%"
height="50%"
src={x.src}
/>
</div>
<div className="custom-card" style={{paddingTop:"50px"}}>
<h3 style={{textAlign:"center"}}>{x.title}</h3>
<p style={{textAlign:"center"}}>{x.desc}</p>
<p style={{textAlign:"center"}}>{x.otherInfo}</p>
</div>
</Card>
</Col>
                )}
            </div>
        )
    }
}

export default ActiveProduction

