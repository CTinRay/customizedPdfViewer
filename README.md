
# Customized PDF Viewer

## 實做、修改與PDFjs的一些資訊

* Viewer 初始化函式
 * 修改: 註解 `pdfjs/web/viewer.js line: 7022` 取消在頁面載入完成後的自動初始化。
 * PDFjs:初始化函數叫做`webViewerLoad`，宣告在`pdfjs/web/viewer.js line 6796`。
* 設定PDF URL
 * 實做：在Viewer初始化之前設定變數`DEFAULT_URL`
 * PDFjs：（如果頁面網址的URL沒有設定參數，則這個變數會在`function webViewerInitialized`中用到）
* Log頁面變換
 * PDFjs：在 `pdfjs/web/viewer.js line: 7236` 有一個事件處理器 `window.addEventListener('pagechange', function pagechange(evt) {`.
 * 修改：我在這裡增加了一行 `console.log( "pagechanged ->" + page )`。 變數 `page`應該就是現在瀏覽的頁面。
* 顯示PDF Viewer
 * 實做：Viewer 在頁面載入完後會被隱藏。
 * 實做：當按鈕`Show PDF`被按下時，Viewer才會再次出現。
 * 實做：並且還在Viewer額外增加了一個按鈕`Exit`，當按下時Viewer又會被隱藏。
 * 實做：增加一些Viewer( div with id `outerContainer`)的CSS屬性 : `position: fixed`, `width:100%`, 等等。以讓Viewer可以固定在頁面上方。

# 檔案們
* index.html 包含 viewer 部份還有 content 部份。
 * Viewer 部份是從 pdfjs 複製來的。
 * 在之後HTML5活動包中，contain 部份裡面可以裝一些課程內容。
* js/controller.js 包含了幾乎所有的實做（隱藏/顯示Viewer）。
* css/customizedPdfViewer.css 讓Viewer可以蓋住頁面的CSS。
* pdfjs/ 幾乎全部都是原封不動從官網下載的library
 * 在 web/viewer.js 在這有一些些修改。


## Functions

* Find out the function which initialize the viewer.
* Find out the way to set PDF source URL.
* Find out the way to log page changed.
* Show the PDF viewer in proper way.

## Implementation

* Viewer initialization function:
 * Comment out `pdfjs/web/viewer.js line: 7022` to prevent the viewer from being initialized after page loaded.
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
 