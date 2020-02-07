import { DataQueryRequest, DataQueryResponse, DataSourceApi, DataSourceInstanceSettings, DataQuery, DataSourceJsonData } from '@grafana/ui';

export interface CSVQuery extends DataQuery {
}

export interface CSVOptions extends DataSourceJsonData {
}

export class CSVDataSource extends DataSourceApi<CSVQuery, CSVOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<CSVOptions>) {
    super(instanceSettings);
  }

  query(options: DataQueryRequest<CSVQuery>): Promise<DataQueryResponse> {
    return Promise.resolve({ data: [] });
  }

  testDatasource() {
    return new Promise((resolve, reject) => {
      resolve({
        status: 'success',
        message: 'Yes',
      });
    });
  }
}
