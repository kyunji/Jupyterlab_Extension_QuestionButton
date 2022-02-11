# Jupyterlab_Extension_QuestionButton

[![Github Actions Status](https://github.com/kyunji/Jupyterlab_Extension_QuestionButton.git/workflows/Build/badge.svg)](https://github.com/kyunji/Jupyterlab_Extension_QuestionButton.git/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/kyunji/Jupyterlab_Extension_QuestionButton.git/main?urlpath=lab)

## Description
이 기능은 url로 질문을 전송할 수 있는 도구 모음 버튼입니다.</br>
이 단추를 사용하면 대화 상자가 나타납니다. 대화 상자 및 URL에 질문할 내용을 입력하고 확인 버튼을 누릅니다. 질문 내용이 지정된 URL로 전송됩니다. </br>
다른 수단을 사용하지 않고 미리 주피터 노트북에 제공된 url로 바로 질문할 수 있는 기능입니다. </br>
이 프로젝트를 통해 개발한 코드는 오픈소스로 전 세계에 공개합니다. 관심이 있는 개발자는 이 프로젝트를 바탕으로 무한 확장 및 개발이 가능합니다. </br>

It is a tool bar button that can transmit questions to url.</br>
Using this button, dialogs appear. Write what you want to ask on the dialog and url to send the question, and press the OK button. The question content will be sent to the specified url. </br>
It is a function that allows you to ask questions immediately with url provided in advance on the jupyter notebook without using any other means. </br>
Open this extension code to github as an open source. Developers can expand and develop indefinitely. </br>

1. This is the screen of the jupyter lab. There is a "Question" button in the top tool bar. </br>
<img width="80%" src="https://user-images.githubusercontent.com/75000923/142144688-58090562-d9f5-4679-a722-9b1d22864417.PNG"/> </br>

2. This is the first dialog that appears when you click the "Question" button. It's a dialog that inputs url to send questions to. </br>
<img width="30%" src="https://user-images.githubusercontent.com/75000923/142145035-c94a12e1-a73a-4c56-b86a-1490fea1e243.PNG"/> </br>

3. This is the second dialog that appears when you click the "Question" button. This is a dialog that writes questions. </br>
<img width="30%" src="https://user-images.githubusercontent.com/75000923/142145129-304ba8f6-0d33-4de6-ac2a-2661d5291987.PNG"/> </br>

4. When you enter the content in the two dialogs, the content is sent using a simple backend server. It will be sent in json format. </br> </br>

## Requirements

* JupyterLab >= 3.0
* Windows 10
* Chrome Browser

## Install

To install the extension, execute:

```bash
pip install Jupyterlab_Extension_QuestionButton
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall Jupyterlab_Extension_QuestionButton
```


## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the Jupyterlab_Extension_QuestionButton directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall Jupyterlab_Extension_QuestionButton
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `Jupyterlab_Extension_QuestionButton` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
