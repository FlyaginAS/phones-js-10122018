import {PhonesPageComponent} from './phones-page/phones-page.component.js';

 let page = new PhonesPageComponent({
  element: document.querySelector('#root')
});
 document.body.addEventListener('click', function (event) {
     if(event.target.closest('.back')) {
         page._phoneViewer.hide();
         page._phoneCatalog.show();
     }
 });
