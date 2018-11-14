angular.module('nsufroala', ['froala'])
    .value('froalaConfig', {

        placeholderText: '',
      
        requestHeaders: {
                authorization: getFroalaHeader()
        },

        //pastePlain: true,

        pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors',
                  'draggable', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize',
                  'fullscreen', 'imageManager', 'inlineStyle', 'image', 'link', 'lists', 'paragraphFormat',
                  'paragraphStyle', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'],

        //toolbarButtons: ['fontFamily', '|', 'fontSize', '|', 'bold', 'italic', 'underline', 'color', 'inlineStyle', 
        //                 'insertLink', 'insertImage', 'paragraphStyle', 'paragraphFormat', 'align', 'formatOL2', 'formatUL', 'outdent', 'indent',
        //                 'insertHR', 'insertTable', 'undo', 'redo', 'html', 'fullscreen'],


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

        //quickInsertButtons: ['image', 'table'],

        codeMirrorOptions: {
            tabSize: 4
        },

        fontSize: ['8', '10', '12', '13', '14', '18', '24'],

        fontSizeDefaultSelection: '13',

        fontFamily: 	{
            'Arial,Helvetica,sans-serif': 'Arial',
            'Georgia,serif': 'Georgia',
            //'Impact,Charcoal,sans-serif': 'Impact',
            "Montserrat,sans-serif": 'Montserrat',
            'Open Sans,sans-serif': 'Open Sans',
            'Tahoma,Geneva,sans-serif': 'Tahoma',
            "'Times New Roman',Times,serif": 'Times New Roman',
            'Verdana,Geneva,sans-serif': 'Verdana'
        },

        fontFamilyDefaultSelection: 'Open Sans',

        fontFamilySelection: true,

        fontSizeSelection: true,

        //wordPasteModal: false,

        height: 400,

        enter: null,

        tableStyles: {

        },

        //htmlUntouched: true,

        paragraphStyles: {
            small: 'small',
            lineheight15: 'lineheight-15',
            lineheight20: 'lineheight-20',
            hangingindent: 'hanging-indent'
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

        //Set max image size to 5MB.
        imageMaxSize: 5 * 1024 * 1024,

        // Allow to upload PNG and JPG.
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],

        events: {
            'froalaEditor.image.beforeUpload': function (e, editor, images) {
                //console.log("Test before", images);
            },
            'froalaEditor.image.uploaded': function (e, editor, response) {
                //console.log("Test after", response);
            },
            'froalaEditor.image.inserted': function (e, editor, $img, response) {
                //console.log("Test inserted", response);
            },
            'froalaEditor.image.error': function (e, editor, error) {
                console.log("Froala Image Error: ", error);
            }
        }
    });


//Set header for froala
function froalaHeader(){
    if($ && localStorage.getItem('ls.authorizationData')){
        $.ajaxSetup({
            headers: { authorization: 'Bearer ' + JSON.parse(localStorage.getItem('ls.authorizationData')).token }
        });
    }
}

function getFroalaHeader(){
    if(localStorage.getItem('ls.authorizationData')){
        return 'Bearer ' + JSON.parse(localStorage.getItem('ls.authorizationData')).token;
    }
}

//pageBreak Custom Button
$.FroalaEditor.DefineIconTemplate('pageBreak_design', '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>');
$.FroalaEditor.DefineIcon('pageBreak_icon', { NAME: 'pageBreak', template: 'pageBreak_design' });
$.FroalaEditor.RegisterCommand('pageBreak', {
    title: 'Page Break',
    icon: 'pageBreak_icon',

    // Focus inside the editor before the callback.
    focus: true,
    // Show the button on mobile or not.
    showOnMobile: true,
    // Refresh the buttons state after the callback.
    refreshAfterCallback: true,

    // Called when the button is hit.
    callback: function (btnTitle, btnOption) {

        this.html.insert('<hr class="break">');
        this.undo.saveStep();

    }
})
////////////////////////


////formatOL2 Custom Button
//$.FroalaEditor.DefineIconTemplate('formatOL_design', '<i class="fa fa-list-ol" aria-hidden="true"></i>');
//$.FroalaEditor.DefineIcon('formatOL_icon', { NAME: 'formatOL', template: 'formatOL_design' });
//$.FroalaEditor.RegisterCommand('formatOL2', {
//    title: 'Ordered List',
//    icon: 'formatOL_icon',
//    type: 'dropdown',

//    options: {
//        v1: '123',
//        v2: 'ABC',
//        v3: 'ROMAN'
//    },

//    // Focus inside the editor before the callback.
//    focus: true,
//    // Show the button on mobile or not.
//    showOnMobile: true,
//    // Refresh the buttons state after the callback.
//    refreshAfterCallback: true,

//    // Called when the button is hit.
//    callback: function (btnTitle, btnOption) {

//        switch (btnOption) {
//            case 'v1':
//                this.html.insert('<ol><li></li></ol>');
//                break;
//            case 'v2':
//                this.html.insert('<ol style="list-style: lower-alpha;"><li></li></ol>');
//                break;
//            case 'v3':
//                this.html.insert('<ol style="list-style: upper-roman;"><li></li></ol>');
//                break;
//            default:
//                this.html.insert('<ol><li></li></ol>');
//        }

//        this.undo.saveStep();
//        // The current context is the editor instance.
//        //this.html.get();
//    },

//    // Called when the button state might have changed.
//    refresh: function ($btn) {
//        // The current context is the editor instance.
//        //console.log(this.selection.element());
//    }
//})
//////////////////////////

froalaHeader();

 
