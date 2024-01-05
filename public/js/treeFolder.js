
// hàm lấy toàn bộ file entry của người dùng 
async function getListFolder(parentIds){
  try {
      var param= {
         
          parentIds:parentIds.length===1?[parentIds]:parentIds ,
          type:"folder"
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
      //  file-entries?${pathParams}
     var response= await fetch(`${server}/api/v1/users/${userId}/folders`,{
          method:'get',
          headers:myHeader
      })
       dataReturn = await response.json();
       var dataListFolder= Array.from(dataReturn.folders)
   
      // set biến cụ bộ lưu trữ danh sách folder của ngưởi dùng 
      listFolder= dataListFolder
      if(parentIds.length===1 && parentIds[0]===null){
        loadSubFolderNavLeft(null,0)
      }
  } catch (error) {
      console.error("Lỗi không lấy được danh sách folder: "+error)
  }
 
  
  
}
async function clickFolderNavLeft(treeItem,id) {
    changeIArrow(treeItem);
  }
  function clickFileListLayout(idFile, file) {
    var AllFileTbody = document.querySelector("#listFiles");
    var allFile = AllFileTbody.querySelectorAll("tr");
    allFile.forEach((tr) => {
      var tdFile = tr.querySelector("td");
      if (
        tdFile !== file &&
        tdFile.parentElement.classList.contains("active-file")
      ) {
        changeShowActionWithFile(tdFile);
      }
    });
  
    changeShowActionWithFile(file);
  }
  
  
 
  function changeIArrow(folder) {
    var angleArrow = folder.querySelector("i");
    if (angleArrow.classList.contains("fa-angle-right")) {
      angleArrow.classList.remove("fa-angle-right");
      angleArrow.classList.add("fa-angle-down");
    } else {
      angleArrow.classList.remove("fa-angle-down");
      angleArrow.classList.add("fa-angle-right");
    }
  
    var img = folder.parentElement.querySelector("img");
    var imgSrc = img.getAttribute("src");
  
    if (imgSrc.includes("folder.png")) {
      img.setAttribute("src", "./public/images/icon/folder_open.png");
      img.setAttribute("width", "18px");
      img.setAttribute("height", "18px");
    } else {
      img.setAttribute("src", "./public/images/icon/folder.png");
      img.setAttribute("width", "14.5px");
      img.setAttribute("height", "14.5px");
    }
  }

  
 async function loadSubFolderNavLeft(id,level){
  
    var treeItem= document.getElementById(`collapse-folder-${id}`);
     if(id)  changeIArrow(treeItem.parentElement) 
    if(!treeItem.innerHTML.trim() || id===null){
    
    var listFolderGenerate= listFolder.filter(entry=>entry.parent_id===id)
      var content= await generateListPathSubFolder(listFolderGenerate,level)
      treeItem.innerHTML=content
    }
  }
  async function generateListPathSubFolder(listItems,currentLevel) {
    try {
      const content = await Promise.all(listItems.map(async (entry) => {
       
        var subFolders = listFolder.filter(item=>item.parent_id===(entry.id))
      
        const item = `
          <li>
            <!-- folder-name && action  -->
            <div class="d-flex tree-item justify-content-between">
              <div class="d-flex folder-name" role="button" aria-expanded="true" aria-controls="multiCollapseExample2">
                <div role="button" data-toggle="collapse" data-target="#collapse-folder-${entry.id}" onclick="loadSubFolderNavLeft(${entry.id},${currentLevel+1})" class=" mr-2 leaf text-center d-flex align-items-center icon-angle-right-file">
                  
                <i class="${subFolders.length>0?'visible' : 'invisible'} fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div role="button" onclick="loadEntriesInfolder(${entry.id},'${entry.name}')" class="text-nowrap h6 d-flex flex-nowrap align-items-center justify-content-center h-100 text-dark">
                  <img src="./public/images/icon/folder.png" width="14.5px" alt="">
                  <span class="pl-2 truncate-text">${entry.name}</span>
                </div>
              </div>
            </div>
            <!-- sub-folder && action  -->
            <div levelItem="${currentLevel+1}" class="overflow-auto tree-level-${currentLevel+1}  collapse ${subFolders.length>0?"d-block":"d-none"}" id="collapse-folder-${entry.id}">
                
            </div>
          </li>
        `;
        return item;
      }));
  
      const result = `<ul>${content.join('')}</ul>`;
      return result;
    } catch (error) {
      console.error("Error in generateListPathSubFolder: " + error);
      return ''; // Return an empty string or handle the error accordingly
    }
  }
  
  