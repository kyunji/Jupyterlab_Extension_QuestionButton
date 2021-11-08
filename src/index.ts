import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the Jupyterlab_Extension_QuestionButton extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'Jupyterlab_Extension_QuestionButton:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension Jupyterlab_Extension_QuestionButton is activated!');
  }
};

export default plugin;
