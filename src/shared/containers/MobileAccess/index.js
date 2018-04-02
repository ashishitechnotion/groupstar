
import React, { Component } from 'react';
import Tabs, { TabPane } from '../../../shared/components/uielements/tabs';
import LayoutContentWrapper from '../../../shared/components/utility/layoutWrapper.js';
import TableDemoStyle from './demo.style';
import fakeData from './fakeData';
import { tableinfos } from './configs';
import * as TableViews from './tableViews/';

const dataList = new fakeData(10);

export default class AntTable extends Component {
  renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
     
      case 'filterView':
        Component = TableViews.FilterView;
        break;
      default:
        Component = TableViews.FilterView;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  render() {
    return (
      <LayoutContentWrapper>
        <TableDemoStyle className="isoLayoutContent">
          <Tabs className="isoTableDisplayTab">
            {tableinfos.map(tableInfo => (
              <TabPane tab={tableInfo.title} key={tableInfo.value}>
                {this.renderTable(tableInfo)}
              </TabPane>
            ))}
          </Tabs>
        </TableDemoStyle>
      </LayoutContentWrapper>
    );
  }
}
export { TableViews, tableinfos, dataList };
