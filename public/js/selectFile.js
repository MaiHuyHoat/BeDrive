

var access_token=null ;
var server='http://localhost/Bedrive';
var currentSelectedFileId=null;
var currentFolder=null;
var mode = 'all';
var screenWidth= screen.width;

// hàm load data ban đầu cho dom 
document.addEventListener('DOMContentLoaded',async ()=>{
 
    // Sử dụng async/await để chờ lấy access_token
    try {
      // Thực hiện hàm getAccessToken để lấy access_token
      access_token = await getAccessToken(user);

      // Sau khi có access_token, thực hiện các công việc khác
      var params = {
          perPage: 50,
          workspaceId: 0,
          parentIds: [null]
      };

      fileEntries(params, true);
      setClickSideBar();
  } catch (error) {
      console.error('Failed to get access_token:', error);
  }

})
// hàm thiết lập sự kiện trao đổi với trang cha chứa iframe
window.addEventListener("message",(event)=>{
  switch(event.data){
    case "getFile":{
       if(currentSelectedFileId===null){
           window.parent.postMessage("Not choose file")
       }else{
        sendFileToWindowParent(currentSelectedFileId)
       }
      break;
    }
  }
})

// hàm xoá context bar khi người dùng click vào khoảng trống 
document.addEventListener("click", function() {
  var contextMenu = document.getElementById("contextMenu");
  
  contextMenu.style.display="none";
 
});
// hàm thiết lập hiển thị context menu khi người dùng click chuột phải vào vùng trống file 
document.querySelector("#ariaClick").addEventListener('contextmenu',(event)=>{
 
  var selectedItem=document.querySelectorAll("#ariaClick > div.file-grid-container > div > div.selected")
  
  console.log(selectedItem)
  if(selectedItem.length===0){
    event.preventDefault();
    var mouseX= event.clientX;
 
  var mouseY= event.clientY;
  var contextmenu= document.getElementById("contextMenu")
  contextmenu.style.display="block"
  contextmenu.style.top= mouseY+ "px"
  contextmenu.style.left= mouseX+ "px"
  }

})


// lấy access token cho người dùng 
// Hàm lấy access token cho người dùng
async function getAccessToken(user) {
  try {
      var myHeader = new Headers();
      myHeader.append('Content-type', 'application/json');
      var res = await fetch(`${server}/api/v1/auth/login`, {
          method: 'post',
          headers: myHeader,
          body: JSON.stringify({
              email: user.email,
              password: user.password,
              token_name: user.token_name
          })
      });
      var data = await res.json();
      return data.user.access_token;
  } catch (err) {
      console.log('Lỗi login tài khoản người dùng:', err);
      throw err; // Nếu có lỗi, chuyển tiếp lỗi để xử lý ở phần catch khi gọi hàm này
  }
}
function setClickSideBar(){
 var aAll= document.querySelector('div[data-menu-item-id="dkj424"]')
  var aShare= document.querySelector('a[ data-menu-item-id="wkd771"]');
  var aRecent= document.querySelector('a[data-menu-item-id="jo2m1s"]');
  var aStar= document.querySelector('a[data-menu-item-id="4e6cie"]');
  var aTrash= document.querySelector('a[data-menu-item-id="h5p54n"]');
  
  aAll.addEventListener('click',(event)=>{
    event.preventDefault();
    setMode('all');
    setItemSidebarUI(aAll)
    console.log(mode)
  })
  aShare.addEventListener('click',(event)=>{
    event.preventDefault();
    setItemSidebarUI(aShare)
     setMode('share');
     console.log(mode)
  })
  aRecent.addEventListener('click',(event)=>{
    event.preventDefault();
    setItemSidebarUI(aRecent)
     setMode('recent');
     console.log(mode)
  })
  
  aStar.addEventListener('click',(event)=>{
    event.preventDefault();
    setItemSidebarUI(aStar)
     setMode('star');
     console.log(mode)
  })
  aTrash.addEventListener('click',(event)=>{
    event.preventDefault();
    setItemSidebarUI(aTrash)
     setMode('deleted');
     console.log(mode)
  })
}
// hàm cài đặt chế độ all file, share file, deleted file,...
function setMode(modeSet) {
  mode=modeSet;
  var autoClickClosePopup= (document.querySelector("#root > div.relative.isolate.dashboard-grid.h-screen > div.flex.items-center.justify-end.gap-10.pl-14.pr-8.md\\:pl-20.md\\:pr-20.bg-primary.text-on-primary.border-b-primary.h-54.border-b.dashboard-grid-navbar > form").style)?true:false;
  console.log(autoClickClosePopup)
  var olPath=document.querySelector("#pathEntry");
 
  var liItems=olPath.querySelectorAll("#pathEntry>li");
  if(liItems.length>0){
    for(var i=1;i<liItems.length;i++){
      liItems[i].remove();
    }
  }
  var buttonAction=document.querySelector("#\\:r5\\:");
  var spanModeSet= document.getElementById("mode-set");
   switch(mode){
    case "share":{
      spanModeSet.innerHTML="Chia sẻ với tôi "
      
      buttonAction.disabled=true;
      break;
    }
    case "deleted":{
      spanModeSet.innerHTML="Đã xoá "
      buttonAction.disabled=true;
      break;
    }
    case "recent":{
      spanModeSet.innerHTML="Gần đây"
      buttonAction.disabled=true;
    }
    case "star":{
      spanModeSet.innerHTML="Gán sao "
      buttonAction.disabled=true;
      break;
    }
    default:{
      spanModeSet.innerHTML="Tất cả File"
      buttonAction.disabled=false;
      break;
    }
   }
  var  params={
    perPage:50,
    workspaceId:0,
    parentIds:[null]
 }
 fileEntries(params,true)
}
function setItemSidebarUI(itemClick){
  var aAll= document.querySelector('div[data-menu-item-id="dkj424"]')
  var aShare= document.querySelector('a[ data-menu-item-id="wkd771"]');
  var aRecent= document.querySelector('a[data-menu-item-id="jo2m1s"]');
  var aStar= document.querySelector('a[data-menu-item-id="4e6cie"]');
  var aTrash= document.querySelector('a[data-menu-item-id="h5p54n"]');
  var listA= [];

  listA.push(aAll);listA.push(aShare);listA.push(aRecent);listA.push(aStar);listA.push(aTrash);
  listA.forEach(element=>{
    element.classList.remove('bg-primary/selected')
    element.classList.remove('text-primary')
   if(element.getAttribute("data-menu-item-id")==="dkj424") element.classList.remove('text-secondary')
   else element.classList.add('text-secondary')
    element.classList.remove('font-bold')
  })
  itemClick.classList.add('bg-primary/selected');
  itemClick.classList.add('text-primary');
  if(itemClick.getAttribute("data-menu-item-id")!=="dkj424")  itemClick.classList.remove("text-secondary")
  itemClick.classList.add('font-bold');
  

}
// hàm ẩn context sub menu
function hideContextMenu(){
  currentSelectedFileId=null;
  var items=document.querySelectorAll("#ariaClick > div.file-grid-container > div > div.grid-item")
  for(var i=0;i<items.length;i++){
    var element= items[i];
    element.classList.remove('border');
    element.classList.remove('border-primary')
    element.classList.remove('selected')
    element.removeEventListener('contextmenu',handleContextMenu)
  }
  var contextmenu = document.getElementById("context-file-sub-menu");
  contextmenu.style.display = "none";
  
  document.removeEventListener('click',hideContextMenu)
}
// hàm gửi file entry đã cho cho phía trang cha
async function sendFileToWindowParent(id){
  var data=await getShareableLink(id);
  if(data.link===null) data=await createShareableLink(id);
  var hashFile= data.link.hash;
  var dataReturn={
     "file": data,
     "url":`${server}/drive/s/${hashFile}`
  }
 console.log(dataReturn)
  // var path=`${server}/drive/s/${hashFile}`;
  
  // swal(`Link file/ tài liệu để thêm vào lớp :\n${path}`);
   window.parent.postMessage(JSON.stringify(dataReturn),"*")
}

function handleContextMenu(event,id,name) {
  event.preventDefault();
  var mouseX = event.clientX;

  var mouseY = event.clientY;
  var contextmenu = document.getElementById('context-file-sub-menu');
  contextmenu.style.display = 'block';
  contextmenu.style.position = 'fixed';
  contextmenu.style.top = mouseY + 'px';
  contextmenu.style.left = mouseX + 'px';
  // Thêm sự kiện click vào toàn bộ tài liệu để ẩn menu ngữ cảnh
  document.addEventListener('click', hideContextMenu );
  // thêm sự kiện click xoá cho contextMenu
  var buttonRemove=document.querySelector("#\\:r1g\\:-listbox-8");
  buttonRemove.addEventListener('click',(event)=>{
    if(mode==='deleted'){
      swal({
        title: "Bạn có chắc?",
        text: "Hành động này sẽ xoá vĩnh viễn file !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteEntryApi([id],true)
        } 
      });
    }else{
      deleteEntryApi([id],false)
    }
 
  })
 // thêm sự kiện đổi tên file cho contextMenu
 var buttonRename= document.querySelector("#\\:r1g\\:-listbox-5")
 buttonRename.addEventListener('click',()=>{
  var inputName= document.querySelector("#name-new-entry")
  inputName.value= name
  var saveButton=document.querySelector("#modalRename > div > div > div.modal-footer > button.btn.btn-primary")
  saveButton.addEventListener('click',()=>{
    renameEntry(id,name)
  })
 })
 // thêm nút khôi phục file nếu đang ở chế độ xoá và set hàm cho nó 
 var restoreButton=document.querySelector("#\\:r4m\\:-listbox-3")
   if(mode!=="deleted"){
    restoreButton.classList.add('d-none')
   }else{
    restoreButton.classList.remove('d-none')
    restoreButton.addEventListener('click',()=>{
      restoreFileApi(id)
    })
   }
  // thêm sự kiện cho nút gán sao
  var starButton=document.querySelector("#\\:r1g\\:-listbox-3");
  starButton.addEventListener('click',()=>{
    starFileApi(id)
  })
 
}

// hàm xử lý sự kiện khi có người click vào một entry
function clickEntry(item,id,name){
  currentSelectedFileId=id;
  var items = document.querySelectorAll(
    '#ariaClick > div.file-grid-container > div > div.grid-item',
  );
  for (var i = 0; i < items.length; i++) {
    var element = items[i];
    element.classList.remove('border');
    element.classList.remove('selected');
    element.classList.remove('border-primary');
    
  }
  item.classList.add('border');
  item.classList.add('selected');
  item.classList.add('border-primary');
  item.addEventListener('contextmenu', event => {handleContextMenu(event,id,name) });
}
// hàm xử lý sự kiện khi có người doubleclick vào một entry
async function doubleClickEntry(item){
  var id= item.id;
  var data=await getShareableLink(id);
  if(data.link===null) data=await createShareableLink(id);
  var hashFile= data.link.hash;
 
  var path=`${server}/drive/s/${hashFile}`;
    // swal(`Link file/ tài liệu để thêm vào lớp :\n${path}`);
  sendFileToWindowParent(id)
}
// hàm lấy link chia sẽ file 
async function getShareableLink(entryId){
  var dataLink=null;
  var myHeader= new Headers();
  myHeader.append("accept","application/json")
   myHeader.append("Content-type","application/json")
   myHeader.append("Authorization",`Bearer ${access_token}`)
  await fetch(`${server}/api/v1/file-entries/${entryId}/shareable-link`,{
      method:'get',
      headers:myHeader
  }).then(res=>res.json())
  .then(async data=>{
      // Xử lý dữ liệu với data
   dataLink=data;

  })
  .catch(err=>{
      console.log("Lỗi lấy link file  chia sẻ : "+err)
  })
  return dataLink;
}
// hàm tạo create new shareable link for entry Files
 async function createShareableLink(entryId){
  var dataLink =null;
  var myHeader= new Headers();
  myHeader.append("accept","application/json")
   myHeader.append("Content-type","application/json")
   myHeader.append("Authorization",`Bearer ${access_token}`)
 await fetch(`${server}/api/v1/file-entries/${entryId}/shareable-link`,{
    method:'post',
    headers: myHeader,
    body:JSON.stringify({
      "expires_at": null,
      "allow_edit": false,
      "allow_download": true
    })
  }).then(res=>res.json())
  .then(data=>{
    dataLink=data;
  }).catch(err=>{console.log("Lỗi lấy data Shareable Link: "+err)})
  return dataLink;
 }

// hàm lấy các file của account người dùng
function fileEntries(paramInput,hide){
    // params là một object các điều kiện lọc truyền vào , điều kiện nào không cần thì không thêm vào object
    // param= {
    //     perPage: number;  -> có bao nhiêu mục/file trong page muốn lấy
    //     deletedOnly: boolean; -> chỉ lấy file đã được xoá
    //     starredOnly: boolean; -> chỉ lấy file được gán sao
    //     recentOnly: boolean;  -> chỉ lấy file gần đây
    //     sharedOnly: boolean;  -> Chỉ lấy file được chia sẻ
    //     query: string;   -> Truy vấn với file có tên gần với 
    //     type: string;   -> loại file : folder, image,text,audio,video,pdf
    //     parentIds: string[]; -> lấy file thuộc thư mục có id 
    //     workspaceId: number;  -> Chỉ trả về các mục trong không gian làm việc được chỉ định ( mặc đinh là 0 )
    //   }
    //
    
  if(hide)  setLayoutDataScreen(hide)
    
  var param= {
        perPage: paramInput.perPage,
        deletedOnly: mode===('deleted')?true:false,
        starredOnly: mode===('star')?true:false,
        recentOnly: mode===('recent')?true:false,
        sharedOnly: mode===('share')?true:false,
        query: "",
        
        parentIds: paramInput.parentIds,
        workspaceId: paramInput.workspaceId
    
      }
    var pathParams=""
    for(var key in param){
        if(param.hasOwnProperty(key)){
           if(param[key]!==null)  pathParams+=`&${key}=${param[key]}`
        }
    }
    var myHeader= new Headers();
    myHeader.append("accept","application/json")
     myHeader.append("Content-type","application/json")
     myHeader.append("Authorization",`Bearer ${access_token}`)
    fetch(`${server}/api/v1/drive/file-entries?${pathParams}`,{
        method:'get',
        headers:myHeader
    }).then(res=>res.json())
    .then(data=>{
        // Xử lý dữ liệu với data
        console.log(data)
        displayData(data)
    })
    .catch(err=>{
        console.log("Lỗi lấy file : "+err)
    })
}
// clickfile vào folder file 
function loadEntriesInfolder(id,name){
  currentFolder=id
 var params= {
    perPage:50,
    workspaceId:0,
    parentIds:[id]
 }
  
  var olPath=document.querySelector("#pathEntry");
 
  var liItems=olPath.querySelectorAll("#pathEntry>li");
  
  if(liItems.length>0){
    for (var i = 0; i < liItems.length; i++) {
      var liItem = liItems[i];
     
        // xoá drop menu và icon arrow bottom
        var buttonItem = liItem.querySelector('div > button');
        if (buttonItem) {
          buttonItem.removeAttribute('data-toggle');
          buttonItem.removeAttribute('aria-expanded');
          buttonItem.removeAttribute('aria-haspopup');
        }
        var svgItem = liItem.querySelector('div > button > svg ');
        if (svgItem) svgItem.parentNode.removeChild(svgItem);
        var ulMenu = liItem.querySelector('ul.dropdown-menu');
        if (ulMenu) ulMenu.parentNode.removeChild(ulMenu);
        liItem.setAttribute('onclick',`clickPath(${liItem.id},'${liItem.getAttribute('foldername')}')`)
      
    }
    var lastItem=liItems[liItems.length-1];
    var lastChild=lastItem.lastChild;
   
    if(!(lastChild.nodeType === 1 && lastChild.tagName.toLowerCase() === 'svg')){
     var svgArrowRightIcon= document.createElement("svg");
   
     var contentArrowRightIcon=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-testid="ChevronRightOutlinedIcon" class="svg-icon text-muted icon-md" height="1em" width="1em"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg>`;
     svgArrowRightIcon.innerHTML=contentArrowRightIcon
     lastItem.appendChild(svgArrowRightIcon);
    }
  }
  // tạo folder , drop-toggle menu cho item cuối cùng, tức item người dùng click vào 
  var liItem= document.createElement("li");
  liItem.id=id;

  liItem.setAttribute('foldername',name);
  liItem.setAttribute("class","relative inline-flex min-w-0 flex-shrink-0 items-center justify-start text-lg");
  
  liItem.innerHTML=`   <div class="cursor-pointer overflow-hidden whitespace-nowrap rounded px-8 py-4 ">
  <button type="button" data-toggle="dropdown" class=" hover:bg-hover focus-visible:ring whitespace-nowrap inline-flex select-none appearance-none no-underline outline-none disabled:pointer-events-none disabled:cursor-default justify-center flex items-center gap-2 rounded focus-visible:ring-offset-4" id=":re:" aria-expanded="false" aria-haspopup="menu">
   ${id===null?`<span id="mode-set"> ${name}</span>`: name}
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-testid="ArrowDropDownOutlinedIcon" class="svg-icon icon-md text-muted icon-md" height="1em" width="1em">
      <path d="m7 10 5 5 5-5H7z"></path>
    </svg>
  </button>
  <ul class="dropdown-menu">
    <li>
      <div class="dropdown-item d-flex btn" role="button">
        <div class="icon-sm rounded overflow-hidden flex-shrink-0 text-muted"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-testid="UploadFileOutlinedIcon" class="svg-icon icon-md" height="1em" width="1em">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11 8 15.01z"></path>
          </svg></div>
        <div class="mr-auto w-full text-sm d-flex align-items-center p-2 ">Upload files</div>
      </div>
    </li>
    <li>
      <div class="dropdown-item d-flex btn" role="button">
        <div class="icon-sm rounded overflow-hidden flex-shrink-0 text-muted"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-testid="DriveFolderUploadOutlinedIcon" class="svg-icon icon-md" height="1em" width="1em">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zM9.41 14.42 11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9 8 13.01l1.41 1.41z"></path>
          </svg></div>
        <div class="mr-auto w-full text-sm d-flex align-items-center p-2 ">Upload folder</div>
      </div>
    </li>
    <li>
      <div class="dropdown-item d-flex btn" role="button" data-toggle="modal" data-target="#createFolder">
        <div class="icon-sm rounded overflow-hidden flex-shrink-0 text-muted"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-testid="CreateNewFolderOutlinedIcon" class="svg-icon icon-md" height="1em" width="1em">
            <path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"></path>
          </svg></div>
        <div class="mr-auto w-full text-sm d-flex align-items-center p-2 ">Create folder</div>
      </div>
    </li>
  </ul>
</div>`
olPath.appendChild(liItem)
console.log(currentFolder)
// lấy dữ liệu trong folder và hiển thị nó ra
 fileEntries(params,true)
}
// hàm lấy dữ liệu của folder khi người dùng click vào path
 function clickPath(id, name){
  var olPath=document.querySelector("#pathEntry");
  
  var liItems=olPath.querySelectorAll("#pathEntry>li");
  var foundItem=0;
  if(id!==null){
    for(var i=0;i<liItems.length;i++){
  
      if(liItems[i].id===id.toString()){
        foundItem=i;break;
      }
    }
  }


   for(var i=liItems.length-1;i>=foundItem;i--){
 
    liItems[i].remove();
   
   }
   loadEntriesInfolder(id,name)
 }
// hàm set blank screen nếu không có dữ liệu 
function setBlankScreen(type){
   var ariaClick=document.querySelector('#ariaClick');
   var content=getBlankScreenContent(mode);
   ariaClick.innerHTML=content;
}
// hàm set screenLayout trước khi hiển thị data
function setLayoutDataScreen(hide){
  var ariaClick= document.querySelector("#ariaClick");
  ariaClick.innerHTML=`
  
  <div id="loading">
  <figure style="height: 100%;">
    <div id="onLoadingImage">
      <img src="./images/gif/onLoading.gif" alt="Loading...">

    </div>

    <figcaption style="text-align: center;">

      <div class="text"> Đang tải dữ liệu

        <div class="icon-dot-loading"><img src="./images/gif/blue-dot-loading.gif" alt="Dot loading"></div>
      </div>

    </figcaption>
  </figure>


</div>
<div id="list-grid" class="d-none file-grid-container">
  <div class="file-grid">
  </div>
</div>
<div class="w-full" role="presentation">
  <div aria-hidden="true"></div>
</div>`;
if(!hide)return
var listGrid= document.querySelector('#list-grid');
    var loading= document.querySelector('#loading')
    listGrid.classList.remove('d-block')
    listGrid.classList.add('d-none');
    loading.classList.remove('d-none')
    loading.classList.add('d-block')
}
// hàm hiển thị dữ liệu sau khi fetch api data
function displayData(data){
  // console.log(data)
  setLayoutDataScreen(false)
  var listEntries= data.data;
  var divParent=document.querySelector("#ariaClick > div.file-grid-container > div.file-grid")
  if(Array.isArray(listEntries)){
  var content= listEntries.map(element=>{
    return item=` <div draggable="true" id="${element.id}" 
    ${(element.type==='folder' && screenWidth<768) ?`onclick="loadEntriesInfolder(${element.id},'${element.name}')"`:`onclick="clickEntry(this,${element.id},'${element.name}')"`}
  
     ${element.type==='folder'?`ondblclick="loadEntriesInfolder(${element.id},'${element.name}')"`:'ondblclick="doubleClickEntry(this)"'}
       tabindex="-1" class="shadow rounded border aspect-square flex flex-col grid-item transition-shadow-opacity select-none overflow-hidden outline-none dark:bg-alt">
    <div class="flex-auto relative min-h-0">
      ${getIconEntry(element)}
    </div>
    <div class="text-sm h-48 flex-shrink-0 flex items-center justify-center px-16">
      <div class="min-w-0 whitespace-nowrap overflow-hidden overflow-ellipsis">
        ${element.name}
      </div>
    </div>
  </div>`
   }).join("")
  }

  divParent.innerHTML=content

  var listGrid= document.querySelector('#list-grid');
  var loading= document.querySelector('#loading')
  listGrid.classList.remove('d-none');
  listGrid.classList.add('d-block');
  loading.classList.remove('d-block');
  loading.classList.add('d-none');
  if(!content){
  setBlankScreen(mode);
  return;
}
}

// hàm sự kiện khi người dùng click vào button upload file 
function clickUploadFile(){
   var fileInput= document.querySelector("#fileInput");
   fileInput.click();
   fileInput.addEventListener('change',(event)=>{
    var files= Array.from(event.target.files);
  uploadFileAndStatusDisplay(files)
   })
      
}
// hàm upload file và generate ra ui thể hiện tình trạng đang upload
function uploadFileAndStatusDisplay(files,parenId){

  var processUploadDiv= document.getElementById("process-upload")
  if(processUploadDiv.classList.contains('d-none')){
    processUploadDiv.classList.remove('d-none')
    processUploadDiv.classList.add('d-block')
   }
  var listFileUploadProcessDiv=document.getElementById("list-upload-file-process");

  var totalUploadFileSpan= document.getElementById("total-upload-file")
   // Loại bỏ những entry là folder
  var totalUploadFile= parseInt(totalUploadFileSpan.innerText)

  totalUploadFileSpan.innerHTML=totalUploadFile+files.length;
   for(var i=0;i<files.length;i++){
    var file=files[i]
    var index=totalUploadFile+i;
    var divCreate= document.createElement('div');
    divCreate.id=`item-upload-process-${file.size}`
    divCreate.setAttribute("class",`item-upload p-10 flex items-center gap-14 w-full absolute top-0 left-0 `)
    divCreate.setAttribute("style",`height: 60px; transform: translateY(${index*60}px);`)
     divCreate.innerHTML=` 
    <div class="shrink-0 border rounded p-8">
    ${getIconFile(file)}
    </div>
    <div class="flex-auto min-w-0 pr-10">
      <div class="mb-2 flex items-center min-w-0 gap-10">
        <div class="flex-auto font-medium whitespace-nowrap min-w-0 overflow-hidden overflow-ellipsis">${file.name}</div>
      </div>
      <div class="text-muted text-xs status"><span class="current-size-uploaded">0</span> B of ${Math.round((file.size)/1024)}KB</div>
    </div>
    <div class="mr-10">
    <img src="./images/gif/upLoading.gif" width="23px" alt="Loading...">
    </div>
   `
   listFileUploadProcessDiv.appendChild(divCreate)
   
   }
  for(var i=0;i<files.length;i++){
  
     uploadFile(files[i],parenId===null?currentFolder:parenId,"Relative")
  }
}
// hàm xử lý nếu file đó là một folder , tạo folder sau đó lấy các tries rồi trả về list entries
async function  uploadFolderAndStatusDisplay(folder,parentId){
  const folderName = folder[0].webkitRelativePath.split('/')[0]

  var listFileUploadProcessDiv=document.getElementById("list-upload-file-process"); 
  
  var processUploadDiv= document.getElementById("process-upload")
  if(processUploadDiv.classList.contains('d-none')){
    processUploadDiv.classList.remove('d-none')
    processUploadDiv.classList.add('d-block')
   }
  const newFolder= await createFolderApi(folderName,parentId);
 
  var totalUploadFileSpan= document.getElementById("total-upload-file")
 
  var totalUploadFile= parseInt(totalUploadFileSpan.innerText);
  totalUploadFileSpan.innerHTML= totalUploadFile+1;
  var totalUploadedFileSpan= document.getElementById("total-uploaded-file")
      var totalUploadedFile =parseInt(totalUploadedFileSpan.innerHTML.toString());
      totalUploadedFileSpan.innerHTML=totalUploadedFile+1;
  var divCreate= document.createElement('div');
  divCreate.id=`item-upload-process-${folder.size}`
  divCreate.setAttribute("class",`item-upload p-10 flex items-center gap-14 w-full absolute top-0 left-0 `)
  divCreate.setAttribute("style",`height: 60px; transform: translateY(${(totalUploadFile)*60}px);`)
   divCreate.innerHTML=` 
  <div class="shrink-0 border rounded p-8">
  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block  m-auto inset-0 folder-file-color icon-md" height="1em" width="1em">
  <g>
    <path d="M 5 10 C 3.300781 10 2 11.300781 2 13 L 2 52 C 2 54.199219 3.800781 56 6 56 L 60 56 C 62.199219 56 64 54.199219 64 52 L 64 23 C 64 21.300781 62.699219 20 61 20 L 58 20 L 58 19 C 58 17.300781 56.699219 16 55 16 L 29.699219 16 C 28.898438 16 28.199219 15.699219 27.597656 15.097656 L 23.902344 11.402344 C 23 10.5 21.699219 10 20.402344 10 Z M 5 12 L 20.402344 12 C 21.199219 12 21.898438 12.300781 22.5 12.902344 L 26.199219 16.597656 C 27.097656 17.5 28.398438 18 29.699219 18 L 55 18 C 55.601563 18 56 18.398438 56 19 L 56 52 C 56 52.601563 56.199219 53.300781 56.597656 54 L 6 54 C 4.898438 54 4 53.101563 4 52 L 4 46 L 45 46 C 45.601563 46 46 45.601563 46 45 C 46 44.398438 45.601563 44 45 44 L 4 44 L 4 13 C 4 12.398438 4.398438 12 5 12 Z M 58 22 L 61 22 C 61.601563 22 62 22.398438 62 23 L 62 52 C 62 53.101563 61.101563 54 60 54 C 58.800781 54 58 52.601563 58 52 Z M 11 24 C 10.398438 24 10 24.398438 10 25 C 10 25.601563 10.398438 26 11 26 L 21 26 C 21.601563 26 22 25.601563 22 25 C 22 24.398438 21.601563 24 21 24 Z M 25 24 C 24.398438 24 24 24.398438 24 25 C 24 25.601563 24.398438 26 25 26 L 31 26 C 31.601563 26 32 25.601563 32 25 C 32 24.398438 31.601563 24 31 24 Z M 11 28 C 10.398438 28 10 28.398438 10 29 C 10 29.601563 10.398438 30 11 30 L 15 30 C 15.601563 30 16 29.601563 16 29 C 16 28.398438 15.601563 28 15 28 Z M 19 28 C 18.398438 28 18 28.398438 18 29 C 18 29.601563 18.398438 30 19 30 L 26 30 C 26.601563 30 27 29.601563 27 29 C 27 28.398438 26.601563 28 26 28 Z M 49 44 C 48.398438 44 48 44.398438 48 45 C 48 45.601563 48.398438 46 49 46 L 53 46 C 53.601563 46 54 45.601563 54 45 C 54 44.398438 53.601563 44 53 44 Z M 7 48 C 6.398438 48 6 48.398438 6 49 L 6 51 C 6 51.601563 6.398438 52 7 52 C 7.601563 52 8 51.601563 8 51 L 8 49 C 8 48.398438 7.601563 48 7 48 Z M 12 48 C 11.398438 48 11 48.398438 11 49 L 11 51 C 11 51.601563 11.398438 52 12 52 C 12.601563 52 13 51.601563 13 51 L 13 49 C 13 48.398438 12.601563 48 12 48 Z M 17 48 C 16.398438 48 16 48.398438 16 49 L 16 51 C 16 51.601563 16.398438 52 17 52 C 17.601563 52 18 51.601563 18 51 L 18 49 C 18 48.398438 17.601563 48 17 48 Z M 22 48 C 21.398438 48 21 48.398438 21 49 L 21 51 C 21 51.601563 21.398438 52 22 52 C 22.601563 52 23 51.601563 23 51 L 23 49 C 23 48.398438 22.601563 48 22 48 Z M 27 48 C 26.398438 48 26 48.398438 26 49 L 26 51 C 26 51.601563 26.398438 52 27 52 C 27.601563 52 28 51.601563 28 51 L 28 49 C 28 48.398438 27.601563 48 27 48 Z M 32 48 C 31.398438 48 31 48.398438 31 49 L 31 51 C 31 51.601563 31.398438 52 32 52 C 32.601563 52 33 51.601563 33 51 L 33 49 C 33 48.398438 32.601563 48 32 48 Z M 37 48 C 36.398438 48 36 48.398438 36 49 L 36 51 C 36 51.601563 36.398438 52 37 52 C 37.601563 52 38 51.601563 38 51 L 38 49 C 38 48.398438 37.601563 48 37 48 Z M 42 48 C 41.398438 48 41 48.398438 41 49 L 41 51 C 41 51.601563 41.398438 52 42 52 C 42.601563 52 43 51.601563 43 51 L 43 49 C 43 48.398438 42.601563 48 42 48 Z M 47 48 C 46.398438 48 46 48.398438 46 49 L 46 51 C 46 51.601563 46.398438 52 47 52 C 47.601563 52 48 51.601563 48 51 L 48 49 C 48 48.398438 47.601563 48 47 48 Z M 52 48 C 51.398438 48 51 48.398438 51 49 L 51 51 C 51 51.601563 51.398438 52 52 52 C 52.601563 52 53 51.601563 53 51 L 53 49 C 53 48.398438 52.601563 48 52 48 Z ">
    </path>
  </g>
</svg>
  </div>
  <div class="flex-auto min-w-0 pr-10">
    <div class="mb-2 flex items-center min-w-0 gap-10">
      <div class="flex-auto font-medium whitespace-nowrap min-w-0 overflow-hidden overflow-ellipsis">${folderName}</div>
    </div>
    <div class="text-muted text-xs status">Đã tạo thư mục</div>
  </div>
  <div class="mr-10">
  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-testid="CheckCircleOutlinedIcon" class="svg-icon text-positive icon-md" height="1em" width="1em">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
      </svg>
  </div>
 `
 listFileUploadProcessDiv.appendChild(divCreate)
 
  
     uploadFileAndStatusDisplay(folder, newFolder.id);
   
 
  

}
// hàm xử lý sự  kiện khi người dùng kéo  file 
function dropHandler(event) {
  event.preventDefault();

  var files = Array.from(event.dataTransfer.files);
  console.log(currentFolder)
  uploadFileAndStatusDisplay(files,currentFolder)
 
}
// hàm xử lý sự kiện khi người dùng thả file vào body
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");
  ev.preventDefault();
}
/// hàm upload file 
function uploadFile (file, parentId,relativePath){
  var formData= new FormData();
  formData.append('file',file );
  formData.append('parentId',parentId)
  formData.append("relativePath",relativePath);
  var divItem=document.getElementById(`item-upload-process-${Math.round(file.size)}`);

  var xhr= new XMLHttpRequest();
  // cấu hình 
  xhr.open('POST',`${server}/api/v1/uploads`,true);
  xhr.setRequestHeader("accept","application/json");
  xhr.setRequestHeader("Authorization",`Bearer ${access_token}`)
  xhr.onload= ()=>{
    if(xhr.status>=200 && xhr.status<300){
      var responseData=JSON.parse(xhr.responseText);
      var iconStatus=divItem.querySelector("div.mr-10")
      iconStatus.innerHTML=getGifProcessUpload(200)
      var textStatus=divItem.querySelector(".status")
      textStatus.innerHTML="Hoàn thành"
      var totalUploadedFileSpan= document.getElementById("total-uploaded-file")
      var totalUploadedFile =parseInt(totalUploadedFileSpan.innerHTML.toString());
      totalUploadedFileSpan.innerHTML=totalUploadedFile+1;
      var  params={
        perPage:50,
        workspaceId:0,
        parentIds:[currentFolder],
        
     }

     // gọi hàm load lại dữ liệu hiển thị 
     fileEntries(params,false)

    }else{
      var iconStatus=divItem.querySelector("div.mr-10")
      iconStatus.innerHTML=getGifProcessUpload(400)
      var textStatus=divItem.querySelector(".status")
      textStatus.innerHTML="Lỗi! Thử lại . "
      console.error('Upload failed with status:', xhr.status);
    }
  }
  xhr.addEventListener('progress',(event)=>{
     const percent= Math.round((event.loaded/event.total) *100);
     var sizeUploadedSpan=divItem.querySelector(".current-size-uploaded")
     console.log(sizeUploadedSpan)
     sizeUploadedSpan.innerHTML=event.loaded
  })
  xhr.send(formData)
}
// hàm xử lý sự kiện khi người dùng click vào nút đóng popup process upload
function closeProcessUpload(){
  var divProcessUpload= document.querySelector("#process-upload")
  divProcessUpload.classList.remove('d-block')
  divProcessUpload.classList.add('d-none')
  var totalUploadFileSpan= document.getElementById("total-upload-file")
  totalUploadFileSpan.innerHTML="0"
  var listFileUploadDiv= document.getElementById("list-upload-file-process")
  listFileUploadDiv.innerHTML=""
}

// hàm tạo folder khi người dùng nhất nút action 
function createFolder(){
   var inputNameFolder= document.getElementById("name-new-folder")
   var nameFolder= inputNameFolder.value;
   var spanAlert= document.querySelector("#createFolder > div > div > div.modal-body > p")
   if(nameFolder===""){
   spanAlert.classList.remove('d-none');
   }else{
    var myHeader= new Headers();
  myHeader.append("accept","application/json");
  myHeader.append("Content-type","application/json");
  myHeader.append("Authorization",`Bearer ${access_token}`)
  fetch(`${server}/api/v1/folders`,{
      method:"post",
      headers: myHeader,
      body:JSON.stringify({
          "name": nameFolder,
          "parentId": currentFolder
        })
  }).then(res=>res.json())
  .then(data=>{
  
      // gọi hàm đóng upload
      document.querySelector("#createFolder > div > div > div.modal-header > button").click()
    var  params={
      perPage:50,
      workspaceId:0,
      parentIds:[currentFolder]
   }

   // gọi hàm load lại dữ liệu hiển thị 
   fileEntries(params,true)
  })
  .catch(err=>{
      console.log(err)
  })
    
   }


}
// hàm đổi tên file 
function renameEntry(id,oldName){
 var inputNewName=document.querySelector("#name-new-entry")
 var newName= inputNewName.value;
 var pAlert=document.querySelector("#modalRename > div > div > div.modal-body > p")
 if(newName===""){
  pAlert.classList.remove('d-none')
 }else{
   renameEntryApi(id,oldName,newName)
 }
}

// hamf disable cảnh báo khi người dùng nhập tên folder
function nameInputChange(){
  var spanAlertCreateFolder= document.querySelector("#createFolder > div > div > div.modal-body > p")
  var spanAlertRenameFolder= document.querySelector("#modalRename > div > div > div.modal-body > p")
    spanAlertCreateFolder.classList.add('d-none'); 
    spanAlertRenameFolder.classList.add('d-none')

}
// hàm fetch api xoá file entry
function deleteEntryApi(ids,deleteForever){
  var myHeader= new Headers();
    myHeader.append("accept","application/json");
    myHeader.append("Content-type","application/json");
    myHeader.append("Authorization",`Bearer ${access_token}`)
    fetch(`${server}/api/v1/file-entries/delete`,{
        method:"post",
        headers: myHeader,
        body:JSON.stringify({
          "entryIds": ids,
          "deleteForever": deleteForever
        })
    }).then(res=>res.json())
    .then(data=>{
     
       swal({
        title: "Thành công",
        text: deleteForever===false?"Đã di chuyển tới thùng rác!" :"Đã xoá vĩnh viễn file !",
        icon: "success",
        button: "OK!",
      });
      
      
      var  params={
        perPage:50,
        workspaceId:0,
        parentIds:[currentFolder],
        deletedOnly:false
     }

     // gọi hàm load lại dữ liệu hiển thị 
     fileEntries(params,false)
    })
    .catch(err=>{
        console.log(err)
    })
}
// hàm fetch api đổi tên entry
function renameEntryApi(id,oldName,newName){
  var myHeader= new Headers();
    myHeader.append("accept","application/json");
    myHeader.append("Content-type","application/json");
    myHeader.append("Authorization",`Bearer ${access_token}`)
    fetch(`${server}/api/v1/file-entries/${id}?_method=PUT`,{
        method:"post",
        headers: myHeader,
        body:JSON.stringify({
          "name": newName,
          "initialName": oldName
      })
    }).then(res=>res.json())
    .then(data=>{
     
       swal({
        title: "Thành công",
        text: "Đã đổi tên file !",
        icon: "success",
        button: "OK!",
      });
      
      
      var  params={
        perPage:50,
        workspaceId:0,
        parentIds:[currentFolder],
        deletedOnly:false
     }

     // gọi hàm load lại dữ liệu hiển thị 
     fileEntries(params,false)

     var closeButton=document.querySelector("#modalRename > div > div > div.modal-footer > button.btn.btn-secondary");
     closeButton.click();
    })
    .catch(err=>{
        console.log(err)
    })
}
// hàm fetch api tạo folder
 async function createFolderApi(name,parentId){
  // name là tên thư mục 
  // parenId là Id của thư mục cha mà thư mục mới sẽ được tạo ( không được null)


 try {
  var myHeader= new Headers();
  myHeader.append("accept","application/json");
  myHeader.append("Content-type","application/json");
  myHeader.append("Authorization",`Bearer ${access_token}`)
  const res=  await fetch(`${server}/api/v1/folders`, {
    method: "post",
    headers: myHeader,
    body: JSON.stringify({
      "name": name,
      "parentId": parentId
    })
  });
   if(!res.ok){
    throw new Error(`HTTP error! Status: ${response.status}`)
   }
   const data = await res.json();
   console.log(data)
   return data.folder;
 } catch (error) {
  console.log("Lỗi không tạo được folder: "+ error)
 }
 return null;

}
// hàm khôi phục file đã bị xoá
function restoreFileApi(id){
  
  var myHeader= new Headers();
    myHeader.append("accept","application/json");
    myHeader.append("Content-type","application/json");
    myHeader.append("Authorization",`Bearer ${access_token}`)
    fetch(`${server}/api/v1/file-entries/restore`,{
        method:"post",
        headers: myHeader,
        body:JSON.stringify({
          "entryIds": [id]
        })
    }).then(res=>res.json())
    .then(data=>{
     
       swal({
        title: "Thành công",
        text: "Đã khôi phục file  !",
        icon: "success",
        button: "OK!",
      });
      
      
      var  params={
        perPage:50,
        workspaceId:0,
        parentIds:[currentFolder],
        deletedOnly:false
     }

     // gọi hàm load lại dữ liệu hiển thị 
     fileEntries(params,false)

    
    })
    .catch(err=>{
        console.log(err)
    })
}
// hàm gán sao cho file api
function starFileApi(id){
  var myHeader= new Headers();
  myHeader.append("accept","application/json");
  myHeader.append("Content-type","application/json");
  myHeader.append("Authorization",`Bearer ${access_token}`)
  fetch(`${server}/api/v1/file-entries/star`,{
      method:"post",
      headers: myHeader,
      body:JSON.stringify({
        "entryIds": [id]
      })
  }).then(res=>res.json())
  .then(data=>{
   
     swal({
      title: "Thành công",
      text: "Đã gán sao cho  file  !",
      icon: "success",
      button: "OK!",
    });
    
    
    var  params={
      perPage:50,
      workspaceId:0,
      parentIds:[currentFolder],
      deletedOnly:false
   }

   // gọi hàm load lại dữ liệu hiển thị 
   fileEntries(params,false)

  
  })
  .catch(err=>{
      console.log(err)
  })
}
// hàm mở  folder diaglog khi người dùng click vào nút upload folder 
function openFolderDiaglog(){
  var folderInput= document.getElementById("folderInput")
  folderInput.click();

}
// hàm lấy dữ liệu từ input folder và upload nó lên server 
function uploadFolder(event) {
  const folderInput = event.target;
  const folders = folderInput.files;
  console.log(folders)
  var files= folders
  // for (let i = 0; i < files.length; i++) {
  //   const file = files[i];
  //    const path= file.webkitRelativePath.split('/')
  //   if (path.length>2 ) {
  //     // Có `webkitRelativePath`, đây là một thư mục con
  //     const relativePath = file.webkitRelativePath;
  //     console.log(`File is in subdirectory: ${path[1]}`);
  //   } else {
  //     // Không có `webkitRelativePath`, đây không phải là thư mục con
  //     console.log("File is not in a subdirectory");
  //   }
  // }
   uploadFolderAndStatusDisplay(folders,currentFolder) 
  
}


