import { IDisposable, DisposableDelegate } from '@lumino/disposable';

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { ToolbarButton } from '@jupyterlab/apputils';

import { DocumentRegistry } from '@jupyterlab/docregistry';

import {
  NotebookPanel,
  INotebookModel,
} from '@jupyterlab/notebook';

import { InputDialog} from '@jupyterlab/apputils';


let url_value:any;
let question_value:any;
/**
 * The plugin registration information.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate,
  id: 'toolbar-button',
  autoStart: true,
};

/**
 * A notebook widget extension that adds a button to the toolbar.
 */
export class ButtonExtension
  implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel>
{
  /**
   * Create a new extension for the notebook panel widget.
   *
   * @param panel Notebook panel
   * @param context Notebook context
   * @returns Disposable on the added button
   */
  createNew(
    panel: NotebookPanel,
    context: DocumentRegistry.IContext<INotebookModel>
  ): IDisposable {
    const Question_Button = () => {
      InputDialog.getText({
        title:'Enter Url',
      }).then(url =>{
        if(url.button.accept){
          url_value=url.value;

        }
      })
      InputDialog.getText({
        title:'Write down what you want to ask.',
      }).then(question =>{
        if(question.button.accept){
          question_value=question.value;
        }
        console.log(url_value , question_value);
        fetch("http://localhost:3000/test", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Question",
            url: url_value,
            question:question_value
          }),
        }).then((response)=>response.json())   
          .then((res)=>console.log(res))

      });

      
    };
    
    const button = new ToolbarButton({
      className: 'question-button',
      label: 'Question Button',
      onClick: Question_Button,
      tooltip: 'Question Button',
    });

    panel.toolbar.insertItem(10, 'Question', button);
    return new DisposableDelegate(() => {
      button.dispose();
    });
  }
}

/**
 * Activate the extension.
 *
 * @param app Main application object
 */
function activate(app: JupyterFrontEnd): void {
  app.docRegistry.addWidgetExtension('Notebook', new ButtonExtension());
}

/**
 * Export the plugin as default.
 */
export default plugin;