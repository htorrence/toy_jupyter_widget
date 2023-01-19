import {HelloModel, HelloView, version} from './index';
import {IJupyterWidgetRegistry} from '@jupyter-widgets/base';

export const helloWidgetPlugin = {
  id: 'toy_jupyter_widget:plugin',
  requires: [IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'toy_jupyter_widget',
          version: version,
          exports: { HelloModel, HelloView }
      });
  },
  autoStart: true
};

export default helloWidgetPlugin;
