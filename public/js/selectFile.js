

var access_token=null;
var server='http://localhost/Bedrive';
 var user={
        "email": "hoatdfk2001@gmail.com",
        "password": "1223",
        "token_name": "iphone 12"
      }

var currentFolder=null;
var mode = 'all';


document.addEventListener('DOMContentLoaded',()=>{
  setAccessToken(user);
  var  params={
    perPage:50,
    workspaceId:0,
    parentIds:[null]
 }
 fileEntries(params)
 setClickSideBar();

})
document.addEventListener("click", function() {
  var contextMenu = document.getElementById("contextMenu");
  contextMenu.style.display="none";
 
});
// document.querySelector("#ariaClick").addEventListener('contextmenu',(event)=>{
//   event.preventDefault();
//   var mouseX= event.clientX;
 
//   var mouseY= event.clientY;
//   var contextmenu= document.getElementById("contextMenu")
//   contextmenu.style.display="block"
//   contextmenu.style.top= mouseY+ "px"
//   contextmenu.style.left= mouseX+ "px"

// })

// lấy access token cho người dùng 
function setAccessToken(user){
  var myHeader= new Headers();
  myHeader.append("Content-type","application/json")
  fetch(`${server}/api/v1/auth/login`,{
      method: "post",
      headers: myHeader, 
     
      body:JSON.stringify({
          "email": user.email,
          "password": user.password,
          "token_name": user.token_name
        })
  }).then(res=>{
     
      return res.json()
  })
  .then(data=>{
    
        access_token=data.user.access_token
     
  })
  .catch(err=>{
      console.log("Lỗi login tài khoản người dùng : "+err)
  })
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
  var  params={
    perPage:50,
    workspaceId:0,
    parentIds:[null]
 }
 fileEntries(params)
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

// hàm xử lý sự kiện khi có người click vào một entry
function clickEntry(item){
  var items=document.querySelectorAll("#ariaClick > div.file-grid-container > div > div.grid-item")
  for(var i=0;i<items.length;i++){
    var element= items[i];
    element.classList.remove('border');
    element.classList.remove('border-primary')
  }
  item.classList.add('border');
  item.classList.add('border-primary')
}
// hàm xử lý sự kiện khi có người doubleclick vào một entry
async function doubleClickEntry(item){
  var id= item.id;
  console.log(id)
  var data=await getShareableLink(id);
  if(data.link===null) data=await createShareableLink(id);
  var hashFile= data.link.hash;
 
  var path=`http://localhost/Bedrive/drive/s/${hashFile}`;
  
  swal(`Link file/ tài liệu để thêm vào lớp :\n${path}`);
 
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
      "password": "new password",
      "expires_at": "string",
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
function fileEntries(paramInput){
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
    
    setLayoutDataScreen()
    
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
    ${name}
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
// lấy dữ liệu trong folder và hiển thị nó ra
 fileEntries(params)
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
// hàm lấy icon của một entry
function getIconEntry(element){

  var svg=null
  
  switch(element.type){
    case 'folder':{
     svg=` <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 folder-file-color icon-md" height="1em" width="1em">
     <g>
       <path d="M 5 10 C 3.300781 10 2 11.300781 2 13 L 2 52 C 2 54.199219 3.800781 56 6 56 L 60 56 C 62.199219 56 64 54.199219 64 52 L 64 23 C 64 21.300781 62.699219 20 61 20 L 58 20 L 58 19 C 58 17.300781 56.699219 16 55 16 L 29.699219 16 C 28.898438 16 28.199219 15.699219 27.597656 15.097656 L 23.902344 11.402344 C 23 10.5 21.699219 10 20.402344 10 Z M 5 12 L 20.402344 12 C 21.199219 12 21.898438 12.300781 22.5 12.902344 L 26.199219 16.597656 C 27.097656 17.5 28.398438 18 29.699219 18 L 55 18 C 55.601563 18 56 18.398438 56 19 L 56 52 C 56 52.601563 56.199219 53.300781 56.597656 54 L 6 54 C 4.898438 54 4 53.101563 4 52 L 4 46 L 45 46 C 45.601563 46 46 45.601563 46 45 C 46 44.398438 45.601563 44 45 44 L 4 44 L 4 13 C 4 12.398438 4.398438 12 5 12 Z M 58 22 L 61 22 C 61.601563 22 62 22.398438 62 23 L 62 52 C 62 53.101563 61.101563 54 60 54 C 58.800781 54 58 52.601563 58 52 Z M 11 24 C 10.398438 24 10 24.398438 10 25 C 10 25.601563 10.398438 26 11 26 L 21 26 C 21.601563 26 22 25.601563 22 25 C 22 24.398438 21.601563 24 21 24 Z M 25 24 C 24.398438 24 24 24.398438 24 25 C 24 25.601563 24.398438 26 25 26 L 31 26 C 31.601563 26 32 25.601563 32 25 C 32 24.398438 31.601563 24 31 24 Z M 11 28 C 10.398438 28 10 28.398438 10 29 C 10 29.601563 10.398438 30 11 30 L 15 30 C 15.601563 30 16 29.601563 16 29 C 16 28.398438 15.601563 28 15 28 Z M 19 28 C 18.398438 28 18 28.398438 18 29 C 18 29.601563 18.398438 30 19 30 L 26 30 C 26.601563 30 27 29.601563 27 29 C 27 28.398438 26.601563 28 26 28 Z M 49 44 C 48.398438 44 48 44.398438 48 45 C 48 45.601563 48.398438 46 49 46 L 53 46 C 53.601563 46 54 45.601563 54 45 C 54 44.398438 53.601563 44 53 44 Z M 7 48 C 6.398438 48 6 48.398438 6 49 L 6 51 C 6 51.601563 6.398438 52 7 52 C 7.601563 52 8 51.601563 8 51 L 8 49 C 8 48.398438 7.601563 48 7 48 Z M 12 48 C 11.398438 48 11 48.398438 11 49 L 11 51 C 11 51.601563 11.398438 52 12 52 C 12.601563 52 13 51.601563 13 51 L 13 49 C 13 48.398438 12.601563 48 12 48 Z M 17 48 C 16.398438 48 16 48.398438 16 49 L 16 51 C 16 51.601563 16.398438 52 17 52 C 17.601563 52 18 51.601563 18 51 L 18 49 C 18 48.398438 17.601563 48 17 48 Z M 22 48 C 21.398438 48 21 48.398438 21 49 L 21 51 C 21 51.601563 21.398438 52 22 52 C 22.601563 52 23 51.601563 23 51 L 23 49 C 23 48.398438 22.601563 48 22 48 Z M 27 48 C 26.398438 48 26 48.398438 26 49 L 26 51 C 26 51.601563 26.398438 52 27 52 C 27.601563 52 28 51.601563 28 51 L 28 49 C 28 48.398438 27.601563 48 27 48 Z M 32 48 C 31.398438 48 31 48.398438 31 49 L 31 51 C 31 51.601563 31.398438 52 32 52 C 32.601563 52 33 51.601563 33 51 L 33 49 C 33 48.398438 32.601563 48 32 48 Z M 37 48 C 36.398438 48 36 48.398438 36 49 L 36 51 C 36 51.601563 36.398438 52 37 52 C 37.601563 52 38 51.601563 38 51 L 38 49 C 38 48.398438 37.601563 48 37 48 Z M 42 48 C 41.398438 48 41 48.398438 41 49 L 41 51 C 41 51.601563 41.398438 52 42 52 C 42.601563 52 43 51.601563 43 51 L 43 49 C 43 48.398438 42.601563 48 42 48 Z M 47 48 C 46.398438 48 46 48.398438 46 49 L 46 51 C 46 51.601563 46.398438 52 47 52 C 47.601563 52 48 51.601563 48 51 L 48 49 C 48 48.398438 47.601563 48 47 48 Z M 52 48 C 51.398438 48 51 48.398438 51 49 L 51 51 C 51 51.601563 51.398438 52 52 52 C 52.601563 52 53 51.601563 53 51 L 53 49 C 53 48.398438 52.601563 48 52 48 Z ">
       </path>
     </g>
   </svg>`
   break;
    }
    case 'image':{

      svg= `<img class="h-full w-full object-cover" src="${server}/${element.url}?workspaceId=0&amp;thumbnail=true" alt="${element.name} thumbnail" draggable="false">`
      break;
    }
    case 'archive':{
       svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 archive-file-color icon-md" height="1em" width="1em"><g><path d="M 21.65625 4 C 20.320313 4 19.066406 4.519531 18.121094 5.464844 L 9.464844 14.121094 C 8.519531 15.066406 8 16.320313 8 17.65625 L 8 57 C 8 58.652344 9.347656 60 11 60 L 51 60 C 52.652344 60 54 58.652344 54 57 L 54 7 C 54 5.347656 52.652344 4 51 4 Z M 22 6 L 36 6 L 36 27.59375 C 35.144531 27.222656 34.210938 27 33.226563 27 L 32.773438 27 C 31.789063 27 30.859375 27.222656 30 27.59375 L 30 9 C 30 8.449219 29.554688 8 29 8 C 28.449219 8 28 8.449219 28 9 L 28 28.902344 C 27.015625 29.824219 26.277344 31.023438 25.953125 32.425781 L 24.875 37.097656 C 24.597656 38.292969 24.878906 39.53125 25.640625 40.488281 C 26.40625 41.449219 27.546875 42 28.769531 42 L 37.230469 42 C 38.457031 42 39.59375 41.449219 40.359375 40.488281 C 41.121094 39.53125 41.402344 38.292969 41.125 37.097656 L 40.046875 32.425781 C 39.726563 31.023438 38.984375 29.824219 38 28.902344 L 38 6 L 51 6 C 51.550781 6 52 6.449219 52 7 L 52 57 C 52 57.550781 51.550781 58 51 58 L 11 58 C 10.449219 58 10 57.550781 10 57 L 10 18 L 19 18 C 20.652344 18 22 16.652344 22 15 Z M 20 6.5 L 20 15 C 20 15.550781 19.550781 16 19 16 L 10.5 16 C 10.609375 15.835938 10.734375 15.679688 10.878906 15.535156 L 19.535156 6.878906 C 19.679688 6.738281 19.835938 6.609375 20 6.5 Z M 32 8 C 31.449219 8 31 8.445313 31 9 C 31 9.554688 31.449219 10 32 10 L 34 10 C 34.550781 10 35 9.554688 35 9 C 35 8.445313 34.550781 8 34 8 Z M 32 13 C 31.449219 13 31 13.445313 31 14 C 31 14.554688 31.449219 15 32 15 L 34 15 C 34.550781 15 35 14.554688 35 14 C 35 13.445313 34.550781 13 34 13 Z M 32 18 C 31.449219 18 31 18.445313 31 19 C 31 19.554688 31.449219 20 32 20 L 34 20 C 34.550781 20 35 19.554688 35 19 C 35 18.445313 34.550781 18 34 18 Z M 32 23 C 31.449219 23 31 23.445313 31 24 C 31 24.554688 31.449219 25 32 25 L 34 25 C 34.550781 25 35 24.554688 35 24 C 35 23.445313 34.550781 23 34 23 Z M 32.773438 29 L 33.226563 29 C 35.570313 29 37.574219 30.59375 38.097656 32.875 L 39.175781 37.550781 C 39.316406 38.148438 39.175781 38.765625 38.796875 39.246094 C 38.414063 39.722656 37.839844 40 37.230469 40 L 28.769531 40 C 28.160156 40 27.589844 39.722656 27.207031 39.246094 C 26.824219 38.765625 26.683594 38.148438 26.824219 37.550781 L 27.902344 32.875 C 28.429688 30.59375 30.429688 29 32.773438 29 Z M 31 34 C 30.449219 34 30 34.445313 30 35 C 30 35.554688 30.449219 36 31 36 L 35 36 C 35.550781 36 36 35.554688 36 35 C 36 34.445313 35.550781 34 35 34 Z M 13 52 C 12.449219 52 12 52.445313 12 53 C 12 53.554688 12.449219 54 13 54 L 17 54 C 17.550781 54 18 53.554688 18 53 C 18 52.445313 17.550781 52 17 52 Z M 21 52 C 20.449219 52 20 52.445313 20 53 C 20 53.554688 20.449219 54 21 54 L 49 54 C 49.550781 54 50 53.554688 50 53 C 50 52.445313 49.550781 52 49 52 Z "></path></g></svg>`
      break;
    }
    case 'word':{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 word-file-color icon-md" height="1em" width="1em"><g><path d="M 21.65625 4 C 20.320313 4 19.0625 4.519531 18.121094 5.464844 L 9.464844 14.121094 C 8.519531 15.066406 8 16.320313 8 17.65625 L 8 57 C 8 58.652344 9.347656 60 11 60 L 51 60 C 52.652344 60 54 58.652344 54 57 L 54 7 C 54 5.347656 52.652344 4 51 4 Z M 22 6 L 51 6 C 51.550781 6 52 6.449219 52 7 L 52 57 C 52 57.550781 51.550781 58 51 58 L 11 58 C 10.449219 58 10 57.550781 10 57 L 10 18 L 19 18 C 20.652344 18 22 16.652344 22 15 Z M 20 6.5 L 20 15 C 20 15.550781 19.550781 16 19 16 L 10.5 16 C 10.613281 15.832031 10.738281 15.675781 10.878906 15.535156 L 19.535156 6.878906 C 19.679688 6.734375 19.835938 6.609375 20 6.5 Z M 21.140625 23.011719 C 21.015625 22.992188 20.878906 22.996094 20.746094 23.03125 C 20.210938 23.175781 19.894531 23.722656 20.03125 24.253906 L 25.03125 43.253906 C 25.148438 43.691406 25.539063 43.996094 25.984375 44 L 26 44 C 26.441406 44 26.832031 43.710938 26.957031 43.28125 L 31 29.546875 L 35.042969 43.28125 C 35.167969 43.707031 35.558594 44 36 44 L 36.015625 44 C 36.460938 43.992188 36.851563 43.6875 36.96875 43.253906 L 41.96875 24.253906 C 42.105469 23.722656 41.789063 23.175781 41.253906 23.03125 C 40.71875 22.890625 40.171875 23.210938 40.03125 23.746094 L 35.945313 39.273438 L 31.957031 25.71875 C 31.832031 25.292969 31.445313 25 31 25 C 30.554688 25 30.167969 25.292969 30.042969 25.71875 L 26.054688 39.277344 L 21.96875 23.746094 C 21.863281 23.347656 21.527344 23.066406 21.140625 23.011719 Z M 13 52 C 12.449219 52 12 52.445313 12 53 L 12 55 C 12 55.554688 12.449219 56 13 56 C 13.550781 56 14 55.554688 14 55 L 14 53 C 14 52.445313 13.550781 52 13 52 Z M 18 52 C 17.449219 52 17 52.445313 17 53 L 17 55 C 17 55.554688 17.449219 56 18 56 C 18.550781 56 19 55.554688 19 55 L 19 53 C 19 52.445313 18.550781 52 18 52 Z M 23 52 C 22.449219 52 22 52.445313 22 53 L 22 55 C 22 55.554688 22.449219 56 23 56 C 23.550781 56 24 55.554688 24 55 L 24 53 C 24 52.445313 23.550781 52 23 52 Z M 28 52 C 27.449219 52 27 52.445313 27 53 L 27 55 C 27 55.554688 27.449219 56 28 56 C 28.550781 56 29 55.554688 29 55 L 29 53 C 29 52.445313 28.550781 52 28 52 Z M 33 52 C 32.449219 52 32 52.445313 32 53 L 32 55 C 32 55.554688 32.449219 56 33 56 C 33.550781 56 34 55.554688 34 55 L 34 53 C 34 52.445313 33.550781 52 33 52 Z M 38 52 C 37.449219 52 37 52.445313 37 53 L 37 55 C 37 55.554688 37.449219 56 38 56 C 38.550781 56 39 55.554688 39 55 L 39 53 C 39 52.445313 38.550781 52 38 52 Z M 43 52 C 42.449219 52 42 52.445313 42 53 L 42 55 C 42 55.554688 42.449219 56 43 56 C 43.550781 56 44 55.554688 44 55 L 44 53 C 44 52.445313 43.550781 52 43 52 Z M 48 52 C 47.449219 52 47 52.445313 47 53 L 47 55 C 47 55.554688 47.449219 56 48 56 C 48.550781 56 49 55.554688 49 55 L 49 53 C 49 52.445313 48.550781 52 48 52 Z "></path></g></svg>`
      break;
    }
    case 'video':{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 video-file-color icon-md" height="1em" width="1em"><g><path d="M 23.65625 4 C 22.320313 4 21.0625 4.519531 20.121094 5.464844 L 11.464844 14.121094 C 10.519531 15.066406 10 16.320313 10 17.65625 L 10 57 C 10 58.652344 11.347656 60 13 60 L 53 60 C 54.652344 60 56 58.652344 56 57 L 56 7 C 56 5.347656 54.652344 4 53 4 Z M 24 6 L 53 6 C 53.550781 6 54 6.449219 54 7 L 54 57 C 54 57.550781 53.550781 58 53 58 L 13 58 C 12.449219 58 12 57.550781 12 57 L 12 18 L 21 18 C 22.652344 18 24 16.652344 24 15 Z M 22 6.5 L 22 15 C 22 15.550781 21.550781 16 21 16 L 12.5 16 C 12.613281 15.835938 12.738281 15.675781 12.878906 15.535156 L 21.535156 6.878906 C 21.679688 6.734375 21.835938 6.609375 22 6.5 Z M 28.023438 21.816406 C 27.671875 21.808594 27.316406 21.890625 26.996094 22.0625 C 26.355469 22.417969 25.964844 23.085938 25.964844 23.816406 L 25.964844 42.183594 C 25.964844 42.910156 26.355469 43.582031 26.996094 43.933594 C 27.296875 44.097656 27.632813 44.183594 27.964844 44.183594 C 28.335938 44.183594 28.707031 44.078125 29.03125 43.871094 L 43.53125 34.6875 C 44.113281 34.320313 44.464844 33.6875 44.464844 33 C 44.464844 32.308594 44.113281 31.679688 43.53125 31.3125 L 29.03125 22.125 C 28.722656 21.933594 28.375 21.828125 28.023438 21.816406 Z M 27.964844 23.816406 L 42.464844 33 L 27.964844 42.1875 Z M 15 52 C 14.449219 52 14 52.449219 14 53 L 14 55 C 14 55.550781 14.449219 56 15 56 C 15.550781 56 16 55.550781 16 55 L 16 53 C 16 52.449219 15.550781 52 15 52 Z M 20 52 C 19.449219 52 19 52.449219 19 53 L 19 55 C 19 55.550781 19.449219 56 20 56 C 20.550781 56 21 55.550781 21 55 L 21 53 C 21 52.449219 20.550781 52 20 52 Z M 25 52 C 24.449219 52 24 52.449219 24 53 L 24 55 C 24 55.550781 24.449219 56 25 56 C 25.550781 56 26 55.550781 26 55 L 26 53 C 26 52.449219 25.550781 52 25 52 Z M 30 52 C 29.449219 52 29 52.449219 29 53 L 29 55 C 29 55.550781 29.449219 56 30 56 C 30.550781 56 31 55.550781 31 55 L 31 53 C 31 52.449219 30.550781 52 30 52 Z M 35 52 C 34.449219 52 34 52.449219 34 53 L 34 55 C 34 55.550781 34.449219 56 35 56 C 35.550781 56 36 55.550781 36 55 L 36 53 C 36 52.449219 35.550781 52 35 52 Z M 40 52 C 39.449219 52 39 52.449219 39 53 L 39 55 C 39 55.550781 39.449219 56 40 56 C 40.550781 56 41 55.550781 41 55 L 41 53 C 41 52.449219 40.550781 52 40 52 Z M 45 52 C 44.449219 52 44 52.449219 44 53 L 44 55 C 44 55.550781 44.449219 56 45 56 C 45.550781 56 46 55.550781 46 55 L 46 53 C 46 52.449219 45.550781 52 45 52 Z M 50 52 C 49.449219 52 49 52.449219 49 53 L 49 55 C 49 55.550781 49.449219 56 50 56 C 50.550781 56 51 55.550781 51 55 L 51 53 C 51 52.449219 50.550781 52 50 52 Z "></path></g></svg>`
      break;
    }
    case 'powerPoint':{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 powerPoint-file-color icon-md" height="1em" width="1em"><g><path d="M 35.136719 2.386719 C 34.917969 2.378906 34.699219 2.390625 34.480469 2.429688 L 5.304688 7.578125 C 3.390625 7.917969 2 9.574219 2 11.515625 L 2 50.484375 C 2 52.429688 3.390625 54.085938 5.304688 54.421875 L 34.480469 59.570313 C 34.652344 59.601563 34.828125 59.613281 35 59.613281 C 35.703125 59.613281 36.382813 59.371094 36.925781 58.914063 C 37.609375 58.34375 38 57.503906 38 56.613281 L 38 52 L 57 52 C 58.652344 52 60 50.652344 60 49 L 60 13 C 60 11.347656 58.652344 10 57 10 L 38 10 L 38 5.382813 C 38 4.496094 37.609375 3.65625 36.925781 3.085938 C 36.417969 2.65625 35.789063 2.414063 35.136719 2.386719 Z M 35.105469 4.390625 C 35.359375 4.414063 35.542969 4.535156 35.640625 4.617188 C 35.777344 4.730469 36 4.980469 36 5.382813 L 36 56.613281 C 36 57.019531 35.777344 57.269531 35.640625 57.382813 C 35.507813 57.496094 35.226563 57.667969 34.828125 57.601563 L 5.652344 52.453125 C 4.695313 52.285156 4 51.457031 4 50.484375 L 4 11.515625 C 4 10.542969 4.695313 9.714844 5.652344 9.546875 L 34.824219 4.398438 C 34.925781 4.382813 35.019531 4.378906 35.105469 4.390625 Z M 38 12 L 57 12 C 57.550781 12 58 12.449219 58 13 L 58 49 C 58 49.550781 57.550781 50 57 50 L 38 50 L 38 45.949219 L 52.949219 45.949219 C 53.5 45.949219 53.949219 45.554688 53.949219 45 C 53.949219 44.445313 53.5 44 52.949219 44 L 50 44 L 50 41 C 50 40.445313 49.550781 40 49 40 L 46 40 L 46 37 C 46 36.445313 45.550781 36 45 36 L 41 36 C 40.449219 36 40 36.445313 40 37 L 40 39 L 38 39 L 38 32.46875 C 39.46875 33.449219 41.203125 34 43 34 C 47.960938 34 52 29.964844 52 25 C 52 20.035156 47.960938 16 43 16 C 41.1875 16 39.464844 16.535156 38 17.519531 Z M 42 18.078125 L 42 24.832031 C 42 25.027344 42.070313 25.203125 42.171875 25.359375 C 42.21875 25.492188 42.289063 25.617188 42.394531 25.726563 L 47.234375 30.5625 C 46.054688 31.460938 44.589844 32 43 32 C 41.113281 32 39.316406 31.230469 38 29.886719 L 38 20.105469 C 39.089844 18.992188 40.484375 18.292969 42 18.078125 Z M 44 18.078125 C 47.386719 18.566406 50 21.480469 50 25 C 50 26.546875 49.488281 27.976563 48.636719 29.136719 L 44 24.5 Z M 15 20 C 14.449219 20 14 20.445313 14 21 L 14 41 C 14 41.554688 14.449219 42 15 42 C 15.550781 42 16 41.554688 16 41 L 16 34 L 21 34 C 23.757813 34 26 31.757813 26 29 L 26 25 C 26 22.242188 23.757813 20 21 20 Z M 16 22 L 21 22 C 22.652344 22 24 23.347656 24 25 L 24 29 C 24 30.652344 22.652344 32 21 32 L 16 32 Z M 42 38 L 44 38 L 44 44 L 42 44 Z M 38 41 L 40 41 L 40 44 L 38 44 Z M 46 42 L 48 42 L 48 44 L 46 44 Z "></path></g></svg>`
      break;
    }
    case 'pdf':{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 pdf-file-color icon-md" height="1em" width="1em"><g><path d="M 17.65625 4 C 16.320313 4 15.066406 4.519531 14.121094 5.464844 L 5.464844 14.121094 C 4.519531 15.066406 4 16.320313 4 17.65625 L 4 57 C 4 58.652344 5.347656 60 7 60 L 47 60 C 48.652344 60 50 58.652344 50 57 L 50 46 L 58 46 C 59.101563 46 60 45.101563 60 44 L 60 24 C 60 22.898438 59.101563 22 58 22 L 50 22 L 50 7 C 50 5.347656 48.652344 4 47 4 Z M 18 6 L 47 6 C 47.550781 6 48 6.449219 48 7 L 48 22 L 16 22 C 14.898438 22 14 22.898438 14 24 L 14 44 C 14 45.101563 14.898438 46 16 46 L 48 46 L 48 57 C 48 57.550781 47.550781 58 47 58 L 7 58 C 6.449219 58 6 57.550781 6 57 L 6 18 L 15 18 C 16.652344 18 18 16.652344 18 15 Z M 16 6.5 L 16 15 C 16 15.550781 15.550781 16 15 16 L 6.5 16 C 6.609375 15.835938 6.734375 15.679688 6.878906 15.535156 L 15.535156 6.878906 C 15.679688 6.734375 15.835938 6.609375 16 6.5 Z M 16 24 L 58 24 L 58 44 L 16 44 Z M 25 28 C 24.445313 28 24 28.449219 24 29 L 24 39 C 24 39.550781 24.445313 40 25 40 C 25.554688 40 26 39.550781 26 39 L 26 36 L 29 36 C 30.652344 36 32 34.652344 32 33 L 32 31 C 32 29.347656 30.652344 28 29 28 Z M 35 28 C 34.445313 28 34 28.449219 34 29 L 34 39 C 34 39.550781 34.445313 40 35 40 L 38 40 C 40.207031 40 42 38.207031 42 36 L 42 32 C 42 29.792969 40.207031 28 38 28 Z M 45 28 C 44.445313 28 44 28.449219 44 29 L 44 39 C 44 39.550781 44.445313 40 45 40 C 45.554688 40 46 39.550781 46 39 L 46 36 L 49 36 C 49.554688 36 50 35.550781 50 35 C 50 34.449219 49.554688 34 49 34 L 46 34 L 46 30 L 50 30 C 50.554688 30 51 29.550781 51 29 C 51 28.449219 50.554688 28 50 28 Z M 26 30 L 29 30 C 29.550781 30 30 30.449219 30 31 L 30 33 C 30 33.550781 29.550781 34 29 34 L 26 34 Z M 36 30 L 38 30 C 39.101563 30 40 30.898438 40 32 L 40 36 C 40 37.101563 39.101563 38 38 38 L 36 38 Z M 9 52 C 8.445313 52 8 52.449219 8 53 L 8 55 C 8 55.550781 8.445313 56 9 56 C 9.554688 56 10 55.550781 10 55 L 10 53 C 10 52.449219 9.554688 52 9 52 Z M 14 52 C 13.445313 52 13 52.449219 13 53 L 13 55 C 13 55.550781 13.445313 56 14 56 C 14.554688 56 15 55.550781 15 55 L 15 53 C 15 52.449219 14.554688 52 14 52 Z M 19 52 C 18.445313 52 18 52.449219 18 53 L 18 55 C 18 55.550781 18.445313 56 19 56 C 19.554688 56 20 55.550781 20 55 L 20 53 C 20 52.449219 19.554688 52 19 52 Z M 24 52 C 23.445313 52 23 52.449219 23 53 L 23 55 C 23 55.550781 23.445313 56 24 56 C 24.554688 56 25 55.550781 25 55 L 25 53 C 25 52.449219 24.554688 52 24 52 Z M 29 52 C 28.445313 52 28 52.449219 28 53 L 28 55 C 28 55.550781 28.445313 56 29 56 C 29.554688 56 30 55.550781 30 55 L 30 53 C 30 52.449219 29.554688 52 29 52 Z M 34 52 C 33.445313 52 33 52.449219 33 53 L 33 55 C 33 55.550781 33.445313 56 34 56 C 34.554688 56 35 55.550781 35 55 L 35 53 C 35 52.449219 34.554688 52 34 52 Z M 39 52 C 38.445313 52 38 52.449219 38 53 L 38 55 C 38 55.550781 38.445313 56 39 56 C 39.554688 56 40 55.550781 40 55 L 40 53 C 40 52.449219 39.554688 52 39 52 Z M 44 52 C 43.445313 52 43 52.449219 43 53 L 43 55 C 43 55.550781 43.445313 56 44 56 C 44.554688 56 45 55.550781 45 55 L 45 53 C 45 52.449219 44.554688 52 44 52 Z "></path></g></svg>`
      break;
    }
    case 'audio':{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 audio-file-color icon-md" height="1em" width="1em"><g><path d="M 21.65625 4 C 20.320313 4 19.0625 4.519531 18.121094 5.464844 L 9.464844 14.121094 C 8.519531 15.066406 8 16.320313 8 17.65625 L 8 57 C 8 58.652344 9.347656 60 11 60 L 51 60 C 52.652344 60 54 58.652344 54 57 L 54 7 C 54 5.347656 52.652344 4 51 4 Z M 22 6 L 51 6 C 51.550781 6 52 6.449219 52 7 L 52 57 C 52 57.550781 51.550781 58 51 58 L 11 58 C 10.449219 58 10 57.550781 10 57 L 10 18 L 19 18 C 20.652344 18 22 16.652344 22 15 Z M 20 6.5 L 20 15 C 20 15.550781 19.550781 16 19 16 L 10.5 16 C 10.609375 15.835938 10.734375 15.679688 10.878906 15.535156 L 19.535156 6.878906 C 19.679688 6.734375 19.835938 6.609375 20 6.5 Z M 42.78125 18.023438 L 24.78125 22.023438 C 24.328125 22.125 24 22.53125 24 23 L 24 37 C 20.691406 37 18 39.242188 18 42 C 18 44.757813 20.691406 47 24 47 C 27.308594 47 30 44.757813 30 42 L 30 29.910156 L 38 28.136719 L 38 33 C 34.691406 33 32 35.242188 32 38 C 32 40.757813 34.691406 43 38 43 C 41.308594 43 44 40.757813 44 38 L 44 19 C 44 18.695313 43.863281 18.410156 43.625 18.21875 C 43.390625 18.03125 43.082031 17.960938 42.78125 18.023438 Z M 42 20.246094 L 42 38 C 42 39.652344 40.207031 41 38 41 C 35.792969 41 34 39.652344 34 38 C 34 36.347656 35.792969 35 38 35 C 38.28125 35 38.5625 35.023438 38.839844 35.066406 C 39.128906 35.117188 39.421875 35.03125 39.648438 34.84375 C 39.871094 34.652344 40 34.375 40 34.078125 L 40 26.890625 C 40 26.585938 39.863281 26.300781 39.625 26.109375 C 39.390625 25.921875 39.078125 25.847656 38.78125 25.910156 L 28.78125 28.136719 C 28.328125 28.238281 28 28.644531 28 29.109375 L 28 42 C 28 43.652344 26.207031 45 24 45 C 21.792969 45 20 43.652344 20 42 C 20 40.347656 21.792969 39 24 39 C 24.28125 39 24.5625 39.023438 24.839844 39.066406 C 25.128906 39.117188 25.425781 39.03125 25.648438 38.84375 C 25.871094 38.652344 26 38.375 26 38.078125 L 26 23.800781 Z M 13 52 C 12.449219 52 12 52.445313 12 53 L 12 55 C 12 55.554688 12.449219 56 13 56 C 13.550781 56 14 55.554688 14 55 L 14 53 C 14 52.445313 13.550781 52 13 52 Z M 18 52 C 17.449219 52 17 52.445313 17 53 L 17 55 C 17 55.554688 17.449219 56 18 56 C 18.550781 56 19 55.554688 19 55 L 19 53 C 19 52.445313 18.550781 52 18 52 Z M 23 52 C 22.449219 52 22 52.445313 22 53 L 22 55 C 22 55.554688 22.449219 56 23 56 C 23.550781 56 24 55.554688 24 55 L 24 53 C 24 52.445313 23.550781 52 23 52 Z M 28 52 C 27.449219 52 27 52.445313 27 53 L 27 55 C 27 55.554688 27.449219 56 28 56 C 28.550781 56 29 55.554688 29 55 L 29 53 C 29 52.445313 28.550781 52 28 52 Z M 33 52 C 32.449219 52 32 52.445313 32 53 L 32 55 C 32 55.554688 32.449219 56 33 56 C 33.550781 56 34 55.554688 34 55 L 34 53 C 34 52.445313 33.550781 52 33 52 Z M 38 52 C 37.449219 52 37 52.445313 37 53 L 37 55 C 37 55.554688 37.449219 56 38 56 C 38.550781 56 39 55.554688 39 55 L 39 53 C 39 52.445313 38.550781 52 38 52 Z M 43 52 C 42.449219 52 42 52.445313 42 53 L 42 55 C 42 55.554688 42.449219 56 43 56 C 43.550781 56 44 55.554688 44 55 L 44 53 C 44 52.445313 43.550781 52 43 52 Z M 48 52 C 47.449219 52 47 52.445313 47 53 L 47 55 C 47 55.554688 47.449219 56 48 56 C 48.550781 56 49 55.554688 49 55 L 49 53 C 49 52.445313 48.550781 52 48 52 Z "></path></g></svg>`;
      break;
    }
    case 'spreadsheet':{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 spreadsheet-file-color icon-md" height="1em" width="1em"><g><path d="M 35.136719 2.386719 C 34.917969 2.378906 34.699219 2.390625 34.480469 2.429688 L 5.304688 7.578125 C 3.390625 7.917969 2 9.574219 2 11.515625 L 2 50.484375 C 2 52.429688 3.390625 54.085938 5.304688 54.421875 L 34.480469 59.570313 C 34.652344 59.601563 34.828125 59.613281 35 59.613281 C 35.703125 59.613281 36.382813 59.371094 36.925781 58.914063 C 37.609375 58.34375 38 57.503906 38 56.613281 L 38 52 L 57 52 C 58.652344 52 60 50.652344 60 49 L 60 13 C 60 11.347656 58.652344 10 57 10 L 38 10 L 38 5.382813 C 38 4.496094 37.609375 3.65625 36.925781 3.085938 C 36.417969 2.65625 35.789063 2.414063 35.136719 2.386719 Z M 35.105469 4.390625 C 35.359375 4.414063 35.542969 4.535156 35.640625 4.617188 C 35.777344 4.730469 36 4.980469 36 5.382813 L 36 56.613281 C 36 57.019531 35.777344 57.269531 35.640625 57.382813 C 35.507813 57.496094 35.226563 57.671875 34.828125 57.601563 L 5.652344 52.453125 C 4.695313 52.285156 4 51.457031 4 50.484375 L 4 11.515625 C 4 10.542969 4.695313 9.714844 5.652344 9.546875 L 34.824219 4.398438 C 34.925781 4.382813 35.019531 4.378906 35.105469 4.390625 Z M 38 12 L 57 12 C 57.550781 12 58 12.449219 58 13 L 58 49 C 58 49.550781 57.550781 50 57 50 L 38 50 L 38 44 L 41 44 C 41.550781 44 42 43.554688 42 43 C 42 42.445313 41.550781 42 41 42 L 38 42 L 38 38 L 41 38 C 41.550781 38 42 37.554688 42 37 C 42 36.445313 41.550781 36 41 36 L 38 36 L 38 32 L 41 32 C 41.550781 32 42 31.554688 42 31 C 42 30.445313 41.550781 30 41 30 L 38 30 L 38 26 L 41 26 C 41.550781 26 42 25.554688 42 25 C 42 24.445313 41.550781 24 41 24 L 38 24 L 38 20 L 41 20 C 41.550781 20 42 19.554688 42 19 C 42 18.445313 41.550781 18 41 18 L 38 18 Z M 45 18 C 44.449219 18 44 18.445313 44 19 C 44 19.554688 44.449219 20 45 20 L 51 20 C 51.550781 20 52 19.554688 52 19 C 52 18.445313 51.550781 18 51 18 Z M 12.824219 20.015625 C 12.695313 20.039063 12.570313 20.085938 12.453125 20.160156 C 11.992188 20.460938 11.859375 21.082031 12.160156 21.546875 L 18.308594 31 L 12.160156 40.453125 C 11.859375 40.917969 11.992188 41.539063 12.453125 41.839844 C 12.625 41.949219 12.8125 42 13 42 C 13.324219 42 13.648438 41.839844 13.839844 41.546875 L 19.5 32.835938 L 25.160156 41.546875 C 25.351563 41.839844 25.675781 42 26 42 C 26.1875 42 26.375 41.949219 26.546875 41.839844 C 27.007813 41.539063 27.140625 40.917969 26.839844 40.453125 L 20.691406 31 L 26.839844 21.546875 C 27.140625 21.082031 27.007813 20.460938 26.546875 20.160156 C 26.082031 19.859375 25.460938 19.992188 25.160156 20.453125 L 19.5 29.164063 L 13.839844 20.453125 C 13.613281 20.105469 13.207031 19.945313 12.824219 20.015625 Z M 45 24 C 44.449219 24 44 24.445313 44 25 C 44 25.554688 44.449219 26 45 26 L 51 26 C 51.550781 26 52 25.554688 52 25 C 52 24.445313 51.550781 24 51 24 Z M 45 30 C 44.449219 30 44 30.445313 44 31 C 44 31.554688 44.449219 32 45 32 L 51 32 C 51.550781 32 52 31.554688 52 31 C 52 30.445313 51.550781 30 51 30 Z M 45 36 C 44.449219 36 44 36.445313 44 37 C 44 37.554688 44.449219 38 45 38 L 51 38 C 51.550781 38 52 37.554688 52 37 C 52 36.445313 51.550781 36 51 36 Z M 45 42 C 44.449219 42 44 42.445313 44 43 C 44 43.554688 44.449219 44 45 44 L 51 44 C 51.550781 44 52 43.554688 52 43 C 52 42.445313 51.550781 42 51 42 Z "></path></g></svg>`
      break;
    }
    default:{
      svg=`<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-testid="Icon" class="svg-icon block w-70 h-70 absolute m-auto inset-0 text-file-color icon-md" height="1em" width="1em"><g><path d="M 17.660156 4 C 16.320313 4 15.058594 4.519531 14.121094 5.460938 L 5.460938 14.121094 C 4.519531 15.070313 4 16.320313 4 17.660156 L 4 57 C 4 58.648438 5.351563 60 7 60 L 47 60 C 48.648438 60 50 58.648438 50 57 L 50 46 L 58 46 C 59.101563 46 60 45.101563 60 44 L 60 24 C 60 22.898438 59.101563 22 58 22 L 50 22 L 50 7 C 50 5.351563 48.648438 4 47 4 Z M 18 6 L 47 6 C 47.550781 6 48 6.449219 48 7 L 48 22 L 16 22 C 14.898438 22 14 22.898438 14 24 L 14 44 C 14 45.101563 14.898438 46 16 46 L 48 46 L 48 57 C 48 57.550781 47.550781 58 47 58 L 7 58 C 6.449219 58 6 57.550781 6 57 L 6 18 L 15 18 C 16.652344 18 18 16.652344 18 15 Z M 16 6.5 L 16 15 C 16 15.550781 15.550781 16 15 16 L 6.5 16 C 6.613281 15.835938 6.738281 15.679688 6.882813 15.539063 L 15.539063 6.882813 C 15.679688 6.738281 15.835938 6.609375 16 6.5 Z M 16 24 L 58 24 L 58 44 L 16 44 Z M 24 28 C 23.449219 28 23 28.445313 23 29 C 23 29.554688 23.449219 30 24 30 L 26 30 L 26 39 C 26 39.554688 26.449219 40 27 40 C 27.550781 40 28 39.554688 28 39 L 28 30 L 30 30 C 30.550781 30 31 29.554688 31 29 C 31 28.445313 30.550781 28 30 28 Z M 44 28 C 43.449219 28 43 28.445313 43 29 C 43 29.554688 43.449219 30 44 30 L 46 30 L 46 39 C 46 39.554688 46.449219 40 47 40 C 47.550781 40 48 39.554688 48 39 L 48 30 L 50 30 C 50.550781 30 51 29.554688 51 29 C 51 28.445313 50.550781 28 50 28 Z M 33.859375 28.011719 C 33.730469 28.027344 33.601563 28.070313 33.484375 28.140625 C 33.011719 28.425781 32.859375 29.039063 33.140625 29.515625 L 35.832031 34 L 33.140625 38.484375 C 32.859375 38.957031 33.011719 39.574219 33.484375 39.859375 C 33.644531 39.953125 33.824219 40 34 40 C 34.339844 40 34.671875 39.828125 34.859375 39.515625 L 37 35.941406 L 39.140625 39.515625 C 39.328125 39.828125 39.660156 40 40 40 C 40.175781 40 40.355469 39.953125 40.515625 39.859375 C 40.988281 39.574219 41.140625 38.957031 40.859375 38.484375 L 38.167969 34 L 40.859375 29.515625 C 41.140625 29.042969 40.988281 28.425781 40.515625 28.140625 C 40.042969 27.859375 39.425781 28.011719 39.140625 28.484375 L 37 32.058594 L 34.859375 28.484375 C 34.644531 28.128906 34.246094 27.957031 33.859375 28.011719 Z M 9 52 C 8.449219 52 8 52.445313 8 53 L 8 55 C 8 55.554688 8.449219 56 9 56 C 9.550781 56 10 55.554688 10 55 L 10 53 C 10 52.445313 9.550781 52 9 52 Z M 14 52 C 13.449219 52 13 52.445313 13 53 L 13 55 C 13 55.554688 13.449219 56 14 56 C 14.550781 56 15 55.554688 15 55 L 15 53 C 15 52.445313 14.550781 52 14 52 Z M 19 52 C 18.449219 52 18 52.445313 18 53 L 18 55 C 18 55.554688 18.449219 56 19 56 C 19.550781 56 20 55.554688 20 55 L 20 53 C 20 52.445313 19.550781 52 19 52 Z M 24 52 C 23.449219 52 23 52.445313 23 53 L 23 55 C 23 55.554688 23.449219 56 24 56 C 24.550781 56 25 55.554688 25 55 L 25 53 C 25 52.445313 24.550781 52 24 52 Z M 29 52 C 28.449219 52 28 52.445313 28 53 L 28 55 C 28 55.554688 28.449219 56 29 56 C 29.550781 56 30 55.554688 30 55 L 30 53 C 30 52.445313 29.550781 52 29 52 Z M 34 52 C 33.449219 52 33 52.445313 33 53 L 33 55 C 33 55.554688 33.449219 56 34 56 C 34.550781 56 35 55.554688 35 55 L 35 53 C 35 52.445313 34.550781 52 34 52 Z M 39 52 C 38.449219 52 38 52.445313 38 53 L 38 55 C 38 55.554688 38.449219 56 39 56 C 39.550781 56 40 55.554688 40 55 L 40 53 C 40 52.445313 39.550781 52 39 52 Z M 44 52 C 43.449219 52 43 52.445313 43 53 L 43 55 C 43 55.554688 43.449219 56 44 56 C 44.550781 56 45 55.554688 45 55 L 45 53 C 45 52.445313 44.550781 52 44 52 Z "></path></g></svg>`;
      break;
    }
  }
  return svg;

}
// hàm set blank screen nếu không có dữ liệu 
function setBlankScreen(type){
   var ariaClick=document.querySelector('#ariaClick');
   var content=getBlankScreenContent(mode);
   ariaClick.innerHTML=content;
}
// hàm set screenLayout trước khi hiển thị data
function setLayoutDataScreen(){
  var ariaClick= document.querySelector("#ariaClick");
  ariaClick.innerHTML=`
  <input type="file" id="fileInput" class="d-none" name="file"  >
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
  
  var listEntries= data.data;
  var divParent=document.querySelector("#ariaClick > div.file-grid-container > div.file-grid")
  if(Array.isArray(listEntries)){
  var content= listEntries.map(element=>{
    return item=` <div draggable="true" id="${element.id}" onclick="clickEntry(this)" ${element.type==='folder'?`ondblclick="loadEntriesInfolder(${element.id},'${element.name}')"`:'ondblclick="doubleClickEntry(this)"'}  tabindex="-1" class="shadow rounded border aspect-square flex flex-col grid-item transition-shadow-opacity select-none overflow-hidden outline-none dark:bg-alt">
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
}
// hàm xử lý sự  kiện khi người dùng kéo thả file 
function dropHandler(event) {
  event.preventDefault();
  var files = event.dataTransfer.files;
  console.log(files)
}
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");
  ev.preventDefault();
}
function uploadFile (file, parentId,relativePath){
  var formData= new FormData();
  formData.append('file',file );
  formData.append('parentId',parentId)
  formData.append("relativePath",relativePath);
  var xhr= new XMLHttpRequest();
  // cấu hình 
  xhr.open('POST',`${server}/api/v1/uploads`,true);
  xhr.setRequestHeader("accept","application/json");
  xhr.setRequestHeader("Authorization",`Bearer ${access_token}`)
  xhr.onload= ()=>{
    if(xhr.status>=200 && xhr.status<300){
      var responseData=JSON.parse(xhr.responseText);
      console.log(responseData)
    }else{
      console.error('Upload failed with status:', xhr.status);
    }
  }
  xhr.send(formData)
}
