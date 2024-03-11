
function linkTailWind() {
  var link = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = "https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js";
  link.appendChild(script);
}


function hideElementByXPath(xpath) {
  var element = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (element) {
    element.style.display = "none";
  }
}

function hideElements() {
  var xPaths = [
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[1]/div/div[2]/div[1]/div",
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[1]/div/div[2]/div[2]",
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[2]/form/div/div[1]",
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[2]/form/div/div[2]",
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[2]/form",
  ];

  xPaths.forEach(function (xpath) {
    hideElementByXPath(xpath);
  });
}

function hideSuggestions() {
  var windowWidth = window.innerWidth;
  var xPathSuggestions_Desktop =
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[2]/form/div/div[1]";
  var xPathSuggestions_Mobile =
    "/html/body/div[1]/div[1]/div/main/div[1]/div[2]/form/div/div[2]/div/div/div";
  var xPathSuggestions_Tablet =
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[2]/form/div/div[1]";
  ("/html/body/div[1]/div[1]/div/main/div[1]/div[2]/form/div/div[2]/div/div/div");
  var xPathToHide;

  if (windowWidth >= 1024) {
    xPathToHide = xPathSuggestions_Desktop;
  } else if (windowWidth >= 768) {
    xPathToHide = xPathSuggestions_Tablet;
  } else {
    xPathToHide = xPathSuggestions_Mobile;
  }

  hideElementByXPath(xPathToHide);
}

document.addEventListener("DOMContentLoaded", function () {
  hideSuggestions();
  hideElements();
});

window.addEventListener("resize", function () {
  hideSuggestions();
});

function Layout() {
  var xPathWrapper =
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[1]/div/div[1]/div";
  var element = document.evaluate(
    xPathWrapper,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (element !== undefined) {
    var shortcut = document.createElement("div");
    shortcut.innerHTML = `
    <div class="flex items-center justify-between">
      <button class="flex items-center justify-center w-10 h-10  rounded-full dark:bg-gray-300 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-window-stack" viewBox="0 0 16 16">
          <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
          <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z"/>
        </svg>
      </button>
      </div>
    `;
    element.appendChild(shortcut);
  }
}


var xPathHeader = "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[1]/div/div[1]/div/div[1]";
var headerElement = document.evaluate(
  xPathHeader,
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue;

if (headerElement) {
  // headerElement.style.position = "static"; // Đặt thuộc tính position thành static

  // Thêm các thuộc tính CSS để giữ nguyên bố cục của các phần tử bên trong div
  headerElement.style.display = "flex";
  headerElement.style.flexDirection = "row"; // hoặc "column" tùy thuộc vào bố cục mong muốn

  var flexContainer = document.createElement("div");
  flexContainer.style.display = "flex";
  flexContainer.style.flexDirection = "column";
  flexContainer.style.alignItems = "center";

  // Tạo phần tử <img> cho hình ảnh
  var img = document.createElement("img");
  var imgPath = chrome.runtime.getURL("images/icon_128.png");
  img.src = imgPath;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.borderRadius = "50%";
  img.style.marginTop = "10px";

  var textElement = document.createElement("p");
  textElement.innerText = "AIPRM - ChatGPT Prompts";

  flexContainer.appendChild(img);
  flexContainer.appendChild(textElement);
  headerElement.appendChild(flexContainer);
}


var xPathWrapper =
  "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[1]/div/div[2]";

var element = document.evaluate(
  xPathWrapper,
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue;

if (element !== undefined) {
  var navbar = document.createElement("div");
  navbar.style.width = "100%";
  navbar.style.marginLeft = "40px";
  navbar.style.paddingRight = "25px";
  navbar.innerHTML = `
  <br>
  <div class="w-full">
  <div class="relative right-0">
    <ul class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60" data-tabs="tabs" role="list">
      <li class="z-30 flex-auto text-center flex-1 mr-2">
        <a href="" id="favoritePromptsTab" title="Your &quot;Favorites&quot; List"
          onclick="AIPRM.changePromptTemplatesType('list', '1919286804684218368')"
          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit dark:hover:bg-gray-800 dark:text-white dark:hover:text-gray-300 hover:bg-gray-50 hover:text-gray-600"
          data-tab-target="" active="" role="tab" aria-selected="false" aria-controls="Favorites">
          <svg fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
            </path>
          </svg> &nbsp; Favorites
        </a>
      </li>

      <li class="z-30 flex-auto text-center flex-1 mr-2">
        <a href="" ihref="#" id="AIPRMVerifiedPromptsTab" title="AIPRM Verified; Prompts List" onclick=""
          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit dark:hover:bg-gray-800 dark:text-white dark:hover:text-gray-300 hover:bg-gray-50 hover:text-gray-600"
          data-tab-target="" active="" role="tab" aria-selected="false" aria-controls="AIPRM">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            class="h-5 w-5">
            <path clip-rule="evenodd" fill-rule="evenodd"
              d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
            </path>
          </svg> &nbsp; AIPRM
        </a>
      </li>

      <li class="z-30 flex-auto text-center flex-1 mr-2">
        <a href="#" id="publicPromptsTab" onclick="AIPRM.changePromptTemplatesType('public')" class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit dark:hover:bg-gray-800 dark:text-white dark:hover:text-gray-300 hover:bg-gray-50 hover:text-gray-600"
          data-tab-target="" active="" role="tab" aria-selected="true" aria-controls="Public">
          <span class="ml-1">Public</span>
        </a>
      </li>

      <li class="z-30 flex-auto text-center flex-1 mr-2">
        <a  href="#" id="ownPromptsTab" title="Prompts you own (Private + Team + Public)" class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit dark:hover:bg-gray-800 dark:text-white dark:hover:text-gray-300 hover:bg-gray-50 hover:text-gray-600"
          data-tab-target="" active="" role="tab" aria-selected="false" aria-controls="Own">
          <span class="ml-1">Own</span>
        </a>
      </li>

      <li class="z-30 flex-auto text-center flex-1 mr-2">
        <a  href="#" id="hiddenPromptsTab" title="&quot;Hidden&quot; Prompts List" onclick="AIPRM.Client.UserQuota.canUseHidden(AIPRM.Lists) ? AIPRM.howToUseHiddenList() : null" class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit dark:hover:bg-gray-800 dark:text-white dark:hover:text-gray-300 hover:bg-gray-50 hover:text-gray-600"
          data-tab-target="" active="" role="tab" aria-selected="false" aria-controls="hidden">
          <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg> &nbsp; Hidden
        </a>
      </li>
      <li class="flex-1">
        <button style= "width:100%" > 
          <a href="#" id="addNewListTab" title="Create New List" onclick="AIPRM.showListCreateModal()" class="rounded flex justify-center items-center m-2 p-2 font-medium dark:hover:bg-gray-800 dark:text-white dark:hover:text-gray-300 hover:bg-gray-50 hover:text-gray-600">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>&nbsp;
            New List
            </a>
        </button>
      </li>
    </ul>

    <div data-tab-content="" class="p-5">
      <div class="block opacity-100" id="favoritePromptsTab" role="tabpanel">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
          Because it's about motivating the doers. Because I'm here to follow
          my dreams and inspire other people to follow their dreams, too.
        </p>
      </div>
      <div class="hidden opacity-0" id="AIPRMVerifiedPromptsTab" role="tabpanel">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
          The reading of all good books is like a conversation with the finest
          minds of past centuries.
        </p>
      </div>
      <div class="hidden opacity-0" id="publicPromptsTab" role="tabpanel">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
          Comparing yourself to others is the thief of joy.
        </p>
      </div>
      <div class="hidden opacity-0" id="ownPromptsTab" role="tabpanel">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
          The only way to do great work is to love what you do.
        </p>
      </div>

      <div class="hidden opacity-0" id="hiddenPromptsTab" role="tabpanel">
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
          The only way to do great work is to love what you do.
        </p>
      </div>
    </div>
  </div>
</div>

    `;
  element.appendChild(navbar);
}



function Chat() {
  var xPathWrapper =
    "/html/body/div[1]/div[1]/div[2]/main/div[2]/div[1]/div/div[2]";
  var element = document.evaluate(
    xPathWrapper,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (element !== undefined) {
    var chat = document.createElement("div");
    chat.style.position = "sticky";
    chat.innerHTML = `
    <form class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div class="relative flex h-full flex-1 flex-col">
          <div>
            <div class="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center hidden">
              <div class="grow">
                <div
                  class="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none">
                  <div class="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
                    <div class="flex flex-col gap-2"><span style="opacity: 1; transform: none;"><button
                          class="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal"
                          as="button">
                          <div class="flex w-full gap-2 items-center justify-center">
                            <div class="flex w-full items-center justify-between">
                              <div class="flex flex-col overflow-hidden">
                                <div class="truncate">Write a Python script</div>
                                <div class="truncate font-normal opacity-50">to automate sending daily email reports</div>
                              </div>
                              <div
                                class="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100">
                                <span class="" data-state="closed">
                                  <div class="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg
                                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      class="icon-sm text-token-text-primary">
                                      <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></div>
                                </span></div>
                            </div>
                          </div>
                        </button></span><span style="opacity: 1; transform: none;"><button
                          class="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal"
                          as="button">
                          <div class="flex w-full gap-2 items-center justify-center">
                            <div class="flex w-full items-center justify-between">
                              <div class="flex flex-col overflow-hidden">
                                <div class="truncate">Write a message</div>
                                <div class="truncate font-normal opacity-50">that goes with a kitten gif for a friend on a
                                  rough day</div>
                              </div>
                              <div
                                class="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100">
                                <span class="" data-state="closed">
                                  <div class="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg
                                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      class="icon-sm text-token-text-primary">
                                      <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></div>
                                </span></div>
                            </div>
                          </div>
                        </button></span></div>
                    <div class="flex flex-col gap-2"><span style="opacity: 1; transform: none;"><button
                          class="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal"
                          as="button">
                          <div class="flex w-full gap-2 items-center justify-center">
                            <div class="flex w-full items-center justify-between">
                              <div class="flex flex-col overflow-hidden">
                                <div class="truncate">Plan a trip</div>
                                <div class="truncate font-normal opacity-50">to see the northern lights in Norway</div>
                              </div>
                              <div
                                class="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100">
                                <span class="" data-state="closed">
                                  <div class="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg
                                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      class="icon-sm text-token-text-primary">
                                      <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></div>
                                </span></div>
                            </div>
                          </div>
                        </button></span><span style="opacity: 1; transform: none;"><button
                          class="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal"
                          as="button">
                          <div class="flex w-full gap-2 items-center justify-center">
                            <div class="flex w-full items-center justify-between">
                              <div class="flex flex-col overflow-hidden">
                                <div class="truncate">Help me pick</div>
                                <div class="truncate font-normal opacity-50">a birthday gift for my mom who likes gardening
                                </div>
                              </div>
                              <div
                                class="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100">
                                <span class="" data-state="closed">
                                  <div class="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg
                                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      class="icon-sm text-token-text-primary">
                                      <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></div>
                                </span></div>
                            </div>
                          </div>
                        </button></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full items-center">
            <div
              class="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-medium flex-grow relative border border-token-border-medium dark:text-white rounded-2xl bg-token-main-surface-primary p-2 pb-4 md:pl-4 pr-4">
              <div id="prompt-wrapper"></div>
              <div id="language-select-wrapper"
                class="flex gap-3 lg:max-w-3xl md:last:mb-6 ml-2 md:ml-0 pt-2 stretch justify-between text-sm items-end pb-2 mb-2 border-b flex-col sm:flex-row dark:border-gray-700">
                <div class="flex w-full">
                  <div>
                    <label for="languageSelect"
                      class="block text-sm font-medium whitespace-nowrap">Output in</label>
      
                    <select id="languageSelect"
                      class="bg-gray-100 border-0 text-sm rounded block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:hover:bg-gray-900 hover:bg-gray-200 focus:ring-0">
                      <option value="">Default language</option>
      
      
                      <option value="German">
                        Deutsch
                      </option>
      
                      <option value="English*">
                        English
                      </option>
      
                      <option value="Spanish">
                        Español
                      </option>
      
                      <option value="French">
                        Français
                      </option>
      
                      <option value="Italian">
                        Italiano
                      </option>
      
                      <option value="Portuguese">
                        Português
                      </option>
      
                      <option value="Polish">
                        Polski
                      </option>
      
                      <option value="Ukrainian">
                        Українська
                      </option>
      
                      <option value="English">
                        ---------------
                      </option>
      
                      <option value="Somali">
                        Af Soomaali
                      </option>
      
                      <option value="Afrikaans">
                        Afrikaans
                      </option>
      
                      <option value="Azerbaijani">
                        Azərbaycan dili
                      </option>
      
                      <option value="Indonesian">
                        Bahasa Indonesia
                      </option>
      
                      <option value="Malaysian Malay">
                        Bahasa Malaysia
                      </option>
      
                      <option value="Malay">
                        Bahasa Melayu
                      </option>
      
                      <option value="Javanese">
                        Basa Jawa
                      </option>
      
                      <option value="Sundanese">
                        Basa Sunda
                      </option>
      
                      <option value="Bosnian">
                        Bosanski jezik
                      </option>
      
                      <option value="Catalan">
                        Català
                      </option>
      
                      <option value="Czech">
                        Čeština
                      </option>
      
                      <option value="Chichewa">
                        Chichewa
                      </option>
      
                      <option value="Welsh">
                        Cymraeg
                      </option>
      
                      <option value="Danish">
                        Dansk
                      </option>
      
                      <option value="German">
                        Deutsch
                      </option>
      
                      <option value="Estonian">
                        Eesti keel
                      </option>
      
                      <option value="English">
                        English
                      </option>
      
                      <option value="English (UK)">
                        English (UK)
                      </option>
      
                      <option value="English (US)">
                        English (US)
                      </option>
      
                      <option value="Spanish">
                        Español
                      </option>
      
                      <option value="Esperanto">
                        Esperanto
                      </option>
      
                      <option value="Basque">
                        Euskara
                      </option>
      
                      <option value="French">
                        Français
                      </option>
      
                      <option value="Irish">
                        Gaeilge
                      </option>
      
                      <option value="Galician">
                        Galego
                      </option>
      
                      <option value="Croatian">
                        Hrvatski jezik
                      </option>
      
                      <option value="Xhosa">
                        isiXhosa
                      </option>
      
                      <option value="Zulu">
                        isiZulu
                      </option>
      
                      <option value="Icelandic">
                        Íslenska
                      </option>
      
                      <option value="Italian">
                        Italiano
                      </option>
      
                      <option value="Swahili">
                        Kiswahili
                      </option>
      
                      <option value="Haitian Creole">
                        Kreyòl Ayisyen
                      </option>
      
                      <option value="Kurdish">
                        Kurdî
                      </option>
      
                      <option value="Latin">
                        Latīna
                      </option>
      
                      <option value="Latvian">
                        Latviešu valoda
                      </option>
      
                      <option value="Luxembourgish">
                        Lëtzebuergesch
                      </option>
      
                      <option value="Lithuanian">
                        Lietuvių kalba
                      </option>
      
                      <option value="Hungarian">
                        Magyar
                      </option>
      
                      <option value="Malagasy">
                        Malagasy
                      </option>
      
                      <option value="Maltese">
                        Malti
                      </option>
      
                      <option value="Maori">
                        Māori
                      </option>
      
                      <option value="Dutch">
                        Nederlands
                      </option>
      
                      <option value="Norwegian">
                        Norsk
                      </option>
      
                      <option value="Uzbek">
                        O'zbek tili
                      </option>
      
                      <option value="Polish">
                        Polski
                      </option>
      
                      <option value="Portuguese">
                        Português
                      </option>
      
                      <option value="Romanian">
                        Română
                      </option>
      
                      <option value="Sesotho">
                        Sesotho
                      </option>
      
                      <option value="Albanian">
                        Shqip
                      </option>
      
                      <option value="Slovak">
                        Slovenčina
                      </option>
      
                      <option value="Slovenian">
                        Slovenščina
                      </option>
      
                      <option value="Finnish">
                        Suomi
                      </option>
      
                      <option value="Swedish">
                        Svenska
                      </option>
      
                      <option value="Tagalog">
                        Tagalog
                      </option>
      
                      <option value="Tatar">
                        Tatarça
                      </option>
      
                      <option value="Turkish">
                        Türkçe
                      </option>
      
                      <option value="Vietnamese" selected="">
                        Việt ngữ
                      </option>
      
                      <option value="Yoruba">
                        Yorùbá
                      </option>
      
                      <option value="Greek">
                        Ελληνικά
                      </option>
      
                      <option value="Belarusian">
                        Беларуская мова
                      </option>
      
                      <option value="Bulgarian">
                        Български език
                      </option>
      
                      <option value="Kyrgyz">
                        Кыр
                      </option>
      
                      <option value="Kazakh">
                        Қазақ тілі
                      </option>
      
                      <option value="Macedonian">
                        Македонски јазик
                      </option>
      
                      <option value="Mongolian">
                        Монгол хэл
                      </option>
      
                      <option value="Russian">
                        Русский
                      </option>
      
                      <option value="Serbian">
                        Српски језик
                      </option>
      
                      <option value="Tajik">
                        Тоҷикӣ
                      </option>
      
                      <option value="Ukrainian">
                        Українська
                      </option>
      
                      <option value="Georgian">
                        ქართული
                      </option>
      
                      <option value="Armenian">
                        Հայերեն
                      </option>
      
                      <option value="Yiddish">
                        ייִדיש
                      </option>
      
                      <option value="Hebrew">
                        עברית
                      </option>
      
                      <option value="Uyghur">
                        ئۇيغۇرچە
                      </option>
      
                      <option value="Urdu">
                        اردو
                      </option>
      
                      <option value="Arabic">
                        العربية
                      </option>
      
                      <option value="Pashto">
                        پښتو
                      </option>
      
                      <option value="Persian">
                        فارسی
                      </option>
      
                      <option value="Nepali">
                        नेपाली
                      </option>
      
                      <option value="Marathi">
                        मराठी
                      </option>
      
                      <option value="Hindi">
                        हिन्दी
                      </option>
      
                      <option value="Bengali">
                        বাংলা
                      </option>
      
                      <option value="Punjabi">
                        ਪੰਜਾਬੀ
                      </option>
      
                      <option value="Gujarati">
                        ગુજરાતી
                      </option>
      
                      <option value="Oriya">
                        ଓଡ଼ିଆ
                      </option>
      
                      <option value="Tamil">
                        தமிழ்
                      </option>
      
                      <option value="Telugu">
                        తెలుగు
                      </option>
      
                      <option value="Kannada">
                        ಕನ್ನಡ
                      </option>
      
                      <option value="Malayalam">
                        മലയാളം
                      </option>
      
                      <option value="Sinhala">
                        සිංහල
                      </option>
      
                      <option value="Thai">
                        ไทย
                      </option>
      
                      <option value="Lao">
                        ພາສາລາວ
                      </option>
      
                      <option value="Burmese">
                        ဗမာစာ
                      </option>
      
                      <option value="Khmer">
                        ភាសាខ្មែរ
                      </option>
      
                      <option value="Korean">
                        한국어
                      </option>
      
                      <option value="Chinese">
                        中文
                      </option>
      
                      <option value="Traditional Chinese">
                        繁體中文
                      </option>
      
                      <option value="Japanese">
                        日本語
                      </option>
      
                    </select>
                  </div>
      
                  <div class="ml-2">
                    <label for="toneSelect" class="block text-sm font-medium">Tone</label>
      
                    <select id="toneSelect"
                      class="bg-gray-100 border-0 text-sm rounded block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:hover:bg-gray-900 hover:bg-gray-200 focus:ring-0">
                      <option value="" selected="">Default</option>
      
      
                      <option value="2006">
                        Emotional
                      </option>
      
      
                      <option value="" disabled="">_________</option>
                      <option value="UPGRADE">Upgrade for more</option>
                    </select>
                  </div>
      
                  <div class="ml-2">
                    <label for="writingStyleSelect"
                      class="block text-sm font-medium whitespace-nowrap">Writing Style</label>
      
                    <select id="writingStyleSelect"
                      class="bg-gray-100 border-0 text-sm rounded block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:hover:bg-gray-900 hover:bg-gray-200 focus:ring-0">
                      <option value="" selected="">Default</option>
      
      
                      <option value="3017">
                        Poetic
                      </option>
      
      
                      <option value="" disabled="">_________</option>
                      <option value="UPGRADE">Upgrade for more</option>
                    </select>
                  </div>
                </div>
      
                <div class="inline-flex invisible" role="group" id="continueActionsGroup">
                  <button id="continueWritingButton" title="Continue writing please"
                    class="py-2 font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-850 dark:border-gray-700 dark:hover:bg-gray-800 bg-gray disabled:text-gray-300 disabled:hover:bg-transparent rounded-l-md px-4"
                    onclick="event.stopPropagation(); AIPRM.continueWriting()" type="button">
                    Continue
                  </button>
      
                  <select id="continueActionSelect"
                    class="bg-gray-100 border-0 border-l text-sm rounded-r-md block w-2 dark:bg-gray-850 border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 dark:placeholder-gray-400 dark:text-white hover:bg-gray-200 focus:ring-0 focus:border-gray-200 pr-6">
                    <option value="" selected="" disabled="">-- Select an action --</option>
      
      
                    <option value="1001" disabled="">Clarify</option>
      
                    <option value="1002" disabled="">Exemplify</option>
      
                    <option value="1003" disabled="">Expand</option>
      
                    <option value="1004" disabled="">Explain</option>
      
                    <option value="1005" disabled="">Rewrite</option>
      
                    <option value="1006" disabled="">Shorten</option>
      
      
                    <option value="" disabled="">_________</option>
                    <option value="UPGRADE">Upgrade to activate</option>
                  </select>
                </div>
              </div>
              <div id="variable-wrapper"
                class="gap-3 lg:max-w-3xl md:last:mb-6 mx-2 pt-2 stretch justify-between text-sm pb-2 mb-2 border-b hidden">
              </div>
              <textarea id="prompt-textarea" tabindex="0" data-id="root" rows="1" placeholder=""
                class="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent max-h-25 py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
                style="height: 52px; overflow-y: hidden;">
              </textarea>
              <button class="absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3" data-testid="send-button">
                <span class="" data-state="closed">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black">
                    <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                  </svg>
                </span>
              </button>

              <div class="mt-4 pl-10 pr-10 -mb-1.5 text-right whitespace-nowrap" id="includeMyProfile">
                <label class="text-sm items-center mx-2"
                  title="Include provided &quot;My Profile&quot; info that you would like ChatGPT to know and remember about you and your preferences.">
                  <input name="includeMyProfile" type="checkbox" class="mr-2 dark:bg-gray-850" disabled="">
                  Include <a class="underline cursor-pointer" title="Manage My Profile Info"
                    href="https://app.aiprm.com/account#myprofileinfo" target="_blank">My Profile Info</a>:
                </label>
      
                <div id="includeMyProfileInfoSelectWrapper" class="inline-block group">
                  <select id="includeMyProfileInfoSelect"
                    class="bg-gray-100 border-0 text-sm rounded dark:bg-gray-850 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:hover:bg-gray-900 group-hover:bg-gray-200 focus:ring-0 sm:max-w-xs max-w-[6rem] pointer-events-none"
                    disabled="">
                    <option value="" selected="" disabled="">No Profile Info found</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
    element.appendChild(chat);
  }
}


setTimeout(() => {
  hideElements();
  Layout();
  Chat();
  linkTailWind();
}, 1000);
