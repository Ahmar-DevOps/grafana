import { DataSourcePlugin } from '@grafana/ui';

import { CSVDataSource, CSVOptions, CSVQuery } from './CSVDataSource';

export const plugin = new DataSourcePlugin<CSVDataSource, CSVQuery, CSVOptions>(CSVDataSource);
