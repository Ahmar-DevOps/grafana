import { PanelCtrl } from 'app/features/panel/panel_ctrl';
import { MetricsPanelCtrl } from 'app/features/panel/metrics_panel_ctrl';
import { QueryCtrl } from 'app/features/panel/query_ctrl';
import { alertTab } from 'app/features/alerting/AlertTabCtrl';
import { loadPluginCss } from '@grafana/runtime';
import { DataSourcePlugin } from '@grafana/ui';

import { CSVDataSource, CSVOptions, CSVQuery } from './CSVDataSource';

export const plugin = new DataSourcePlugin<CSVDataSource, CSVQuery, CSVOptions>(CSVDataSource);
export { PanelCtrl, MetricsPanelCtrl, QueryCtrl, alertTab, loadPluginCss };
