// CKEditor
const ckEditorID = "jitterEditor";

// function fnConsolePrint() {
//   //console.log($('#' + ckEditorID).val());
//   console.log(CKEDITOR.instances[ckEditorID].getData());
// }
// customizing editor size
CKEDITOR.replace(ckEditorID, {
  width: "66%",
  height: 200
});

// CKEDITOR.config.forcePasteAsPlainText = true;
CKEDITOR.replace(ckEditorID, {
    uiColor: '#FCD18C'
  });
// --- Customizing editor toolbar with requested buttons for:
// bold, italic, underline, font size, font color, link, unlink, insert image, remove style formatting, clean up code, HTML view, full screen
CKEDITOR.replace(ckEditorID, {
  toolbar: [
    {
    //   name: "basicstlyles",
      items: ["Bold", "Italic", "Underline"]
    },
    {
    //   name: "styles",
      items: ["FontSize", "FontColor"]
    },
    {
    //   name: "links",
      items: ["Link", "Unlink"]
    },

    {
    //   name: "insert",
      items: ["Simage"] 
      
    }, 
    {
        items: [ "RemoveFormat", "Maximize"]
    }
    // remove style formating
    // clean up code, 
    // HTML view, 
    // full screen
    ,
  
],
removeButtons: 'Strike,Subscript,Superscript,Anchor,Styles,Specialchar,Font'
});


