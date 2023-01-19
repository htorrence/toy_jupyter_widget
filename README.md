# toy_jupyter_widget

A Custom Jupyter Widget Library

## Installation

To install use pip:

    $ pip install toy_jupyter_widget

For a development installation (requires [Node.js](https://nodejs.org) and [Yarn version 1](https://classic.yarnpkg.com/)),

    $ git clone https://github.com/htorrence/toy_jupyter_widget.git
    $ cd toy_jupyter_widget
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --overwrite --sys-prefix toy_jupyter_widget
    $ jupyter nbextension enable --py --sys-prefix toy_jupyter_widget

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite toy_jupyter_widget

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.
