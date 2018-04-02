import React, { Component } from 'react'
import { Col } from 'antd';
import  StickerWidget from '../../components/Widgets/sticker/sticker-widget'
import SaleWidget from '../../components/Widgets/sale/sale-widget'


class StaticData extends Component {
    render () {
        var colstyle={padding:"5px"};
        return (
            <div>
                {this.props.data.map(x =>
                <Col md={6} sm={12} xs={24} style={colstyle} key={x.id}>
                <StickerWidget
                number={x.st_number}
                text={x.st_text}
                icon={x.st_icon}
                fontColor={x.st_font_color}
                bgColor={x.st_bgColor}
                />
                <SaleWidget
                label={x.sa_label}
                price={x.sa_price}
                fontColor={x.sa_font_color}
                details={x.sa_details} 
                />
                </Col>
                )}

                </div>
        )
    }
}



export default StaticData