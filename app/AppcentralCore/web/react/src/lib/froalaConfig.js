const config = {

  placeholderText: '',

  pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors',
    'draggable', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize',
    'fullscreen', 'imageManager', 'inlineStyle', 'image', 'link', 'lists', 'paragraphFormat',
    'paragraphStyle', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'],

  toolbarButtons: ['bold', 'italic', 'underline', 'color', 'fontFamily', 'fontSize',
    'undo', 'redo', 'insertLink', 'insertImage', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
    'insertHR', 'pageBreak', 'insertTable', 'html', 'fullscreen'],
  toolbarButtonsMD: ['bold', 'italic', 'underline', 'color', 'fontFamily', 'fontSize',
    'undo', 'redo', 'insertLink', 'insertImage', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
    'insertHR', 'pageBreak', 'insertTable', 'html', 'fullscreen'],
  toolbarButtonsSM: ['bold', 'italic', 'underline', 'color', 'fontFamily', 'fontSize',
    'undo', 'redo', 'insertLink', 'insertImage', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
    'insertHR', 'pageBreak', 'insertTable', 'html', 'fullscreen'],
  toolbarButtonsXS: ['bold', 'italic', 'underline', 'color', 'fontFamily', 'fontSize',
    'undo', 'redo', 'insertLink', 'insertImage', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
    'insertHR', 'pageBreak', 'insertTable', 'html', 'fullscreen'],

  imageInsertButtons: ['imageBack', '|', 'imageUpload', 'imageByURL'],

  codeMirrorOptions: {
    tabSize: 4,
  },

  fontSize: ['8', '10', '12', '13', '14', '18', '24'],

  fontSizeDefaultSelection: '13',

  fontFamily: {
    'Arial,Helvetica,sans-serif': 'Arial',
    'Georgia,serif': 'Georgia',
    'Impact,Charcoal,sans-serif': 'Impact',
    'Open Sans,sans-serif': 'Open Sans',
    'Tahoma,Geneva,sans-serif': 'Tahoma',
    "'Times New Roman',Times,serif": 'Times New Roman',
    'Verdana,Geneva,sans-serif': 'Verdana',
  },

  fontFamilyDefaultSelection: 'Open Sans',

  fontFamilySelection: true,

  fontSizeSelection: true,

  height: 400,

  enter: null,

  tableStyles: {

  },

  paragraphStyles: {
    small: 'small',
    lineheight15: 'lineheight-15',
    lineheight20: 'lineheight-20',
    hangingindent: 'hanging-indent',
  },

  paragraphFormat: {
    N: 'Normal',
    H1: 'Heading 1',
    H2: 'Heading 2',
    H3: 'Heading 3',
    H4: 'Heading 4',
  },

  tableCellStyles: {
  },

  imageUploadMethod: 'POST',

  // Set max image size to 5MB.
  imageMaxSize: 5 * 1024 * 1024,

  // Allow to upload PNG and JPG.
  imageAllowedTypes: ['jpeg', 'jpg', 'png'],

};

export default config;

