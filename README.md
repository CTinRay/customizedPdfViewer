
# Customized PDF Viewer

## Functions

* Find out the function which initialize the viewer.
* Find out the way to set PDF source URL.
* Find out the way to log page changed.
* Show the PDF viewer in proper way.

## Implementation

* Viewer initialization function:
 * Comment out `line: 7022` in `pdfjs/web/viewer.js` to prevent the viewer from being initialized after page loaded.
 * The initialization function is named `webViewerLoad` declared in `pdfjs/web/viewer.js line 6796`
* Set source url:
 * Change variable `DEFAULT_URL` before initialize the viewer.
 * ( In function `function webViewerInitialized`, it set the file path with URL parameter or `DEFAULT_URL` )
* Log page changed:
 * In `pdfjs/web/viewer.js line: 7236`, it add an `window.addEventListener('pagechange', function pagechange(evt) {`.
 * There I add `console.log( "pagechanged ->" + page );`. The varible `page` should be the page user is viewing.
* Show the PDF viewer
 * The viewer is hidden as the page loaded.
 * As the button `ShowPDF` is clicked, the Viewer will be showed. And the PDF file is specified by the selector.
 * A button `Exit` is add to the PDF viewer.
 * The CSS of the viewer ( with id `outerContainer`) is added with properties: `position: fixed`, `widthL100%`, and so on.

## Files

* index.html contains the viewer part and the content part.
 * Viewer part is copied from pdfjs.
 * Contain part can include some lesson text in further HTML5 package usage.
* js/controller.js is the script showing the PDF viewer.
* css/customizedPdfViewer.css contains the modification which make the viewer stick on the screen.
* pdfjs is the library downloaded from official site.
 * in directory web/ I modified a little bit in script `viewer.js`.
 