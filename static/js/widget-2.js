/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./templates/_shared/assets/scripts/cart-badge.js":
/*!********************************************************!*\
  !*** ./templates/_shared/assets/scripts/cart-badge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CartBadge = /*#__PURE__*/function () {\n  function CartBadge() {\n    _classCallCheck(this, CartBadge);\n\n    this.badgeElement = document.getElementById('cart-badge');\n    this.badgeText = this.badgeElement ? this.badgeElement.getElementsByTagName('text')[0] : null;\n    this.itemsQuantity = this.badgeText ? Number(this.badgeText.innerHTML) : null;\n  }\n\n  _createClass(CartBadge, [{\n    key: \"setBadgeItems\",\n    value: function setBadgeItems() {\n      var itemsQuantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n      if (!this.badgeElement || !this.badgeText) {\n        return;\n      }\n\n      if (itemsQuantity < 0) {\n        // invalid number of items\n        return;\n      }\n\n      this.itemsQuantity = itemsQuantity;\n      this.badgeText.innerHTML = itemsQuantity;\n\n      if (itemsQuantity === 0) {\n        // cart badge has to be hidden\n        this.badgeElement.classList.remove('show-cart-badge-icon');\n        return;\n      }\n\n      this.badgeElement.classList.add('show-cart-badge-icon');\n    }\n  }, {\n    key: \"addItem\",\n    value: function addItem() {\n      this.setBadgeItems(this.itemsQuantity + 1);\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem() {\n      this.setBadgeItems(this.itemsQuantity - 1);\n    }\n  }]);\n\n  return CartBadge;\n}();\n\nmodule.exports = CartBadge;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/cart-badge.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/cookie-disclaimer.js":
/*!***************************************************************!*\
  !*** ./templates/_shared/assets/scripts/cookie-disclaimer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var googleAnalyticsHandler = __webpack_require__(/*! ./utils/google-analytics */ \"./templates/_shared/assets/scripts/utils/google-analytics.js\");\n\nvar _require = __webpack_require__(/*! ./utils/constants/googleAnalytics */ \"./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js\"),\n    EVENT = _require.EVENT,\n    TYPE = _require.TYPE,\n    EVENT_CATEGORY = _require.EVENT_CATEGORY,\n    EVENT_ACTION = _require.EVENT_ACTION;\n\nvar cookieDisclaimerHandler = function cookieDisclaimerHandler() {\n  var cookieDisclaimerBanner = document.querySelector(\"[data-js='cookieDisclaimerBanner']\");\n  var cookieDisclaimerButton = document.querySelector(\"[data-js='cookieDisclaimerButton']\");\n  var cookieDisclaimerMoreInfo = document.querySelector(\"[data-js='cookieDisclaimerMoreInfo']\");\n  var siteId = cookieDisclaimerButton.getAttribute(\"site-id\").toLowerCase();\n  var cookieName = \"_ml_cbanner_\".concat(siteId);\n\n  var setHideBanner = function setHideBanner() {\n    cookieDisclaimerBanner.style.display = \"none\";\n  };\n\n  var setShowBanner = function setShowBanner() {\n    cookieDisclaimerBanner.style.display = \"flex\";\n  };\n\n  var setDisclaimerCookie = function setDisclaimerCookie() {\n    var expirarionTime = 60 * 60 * 24 * 365 * 3; // Three years\n\n    var disclaimerCookie = \"\".concat(cookieName, \"=1; max-age=\").concat(expirarionTime, \"; path=/;\");\n    document.cookie = disclaimerCookie; // once the cookie is set, hide the banner\n\n    setHideBanner();\n  };\n\n  if (cookieDisclaimerButton) {\n    cookieDisclaimerButton.addEventListener(\"click\", function () {\n      setDisclaimerCookie();\n      googleAnalyticsHandler(EVENT.SEND, TYPE.EVENT, EVENT_CATEGORY.LGPD, EVENT_ACTION.ACCEPT);\n    });\n  }\n\n  if (cookieDisclaimerMoreInfo) {\n    cookieDisclaimerMoreInfo.addEventListener(\"click\", function () {\n      googleAnalyticsHandler(EVENT.SEND, TYPE.EVENT, EVENT_CATEGORY.LGPD, EVENT_ACTION.MORE_INFO);\n    });\n  }\n\n  if (document.cookie.indexOf(\"\".concat(cookieName, \"=\")) === -1) {\n    setShowBanner();\n  }\n};\n\nmodule.exports = cookieDisclaimerHandler;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/cookie-disclaimer.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js":
/*!***********************************************************************************!*\
  !*** ./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  EVENT: {\n    SEND: 'send',\n    SET: 'set'\n  },\n  TYPE: {\n    EVENT: 'event',\n    PAGE: 'page'\n  },\n  EVENT_CATEGORY: {\n    LGPD: 'LGPD'\n  },\n  EVENT_ACTION: {\n    ACCEPT: 'ACCEPT',\n    MORE_INFO: 'MORE_INFO'\n  }\n};\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/utils/google-analytics.js":
/*!********************************************************************!*\
  !*** ./templates/_shared/assets/scripts/utils/google-analytics.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var googleAnalyticsHandler = function googleAnalyticsHandler(event, hitType, eventCategory, eventAction) {\n  if (meli_ga && typeof meli_ga !== 'undefined') {\n    meli_ga(event, {\n      hitType: hitType,\n      eventCategory: eventCategory,\n      eventAction: eventAction\n    });\n  }\n};\n\nmodule.exports = googleAnalyticsHandler;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/utils/google-analytics.js?");

/***/ }),

/***/ "./templates/tools/assets/scripts/menu/src/index.js":
/*!**********************************************************!*\
  !*** ./templates/tools/assets/scripts/menu/src/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cookieDisclaimerHandler = __webpack_require__(/*! ../../../../../_shared/assets/scripts/cookie-disclaimer */ \"./templates/_shared/assets/scripts/cookie-disclaimer.js\");\n\nvar CartBadge = __webpack_require__(/*! ../../../../../_shared/assets/scripts/cart-badge */ \"./templates/_shared/assets/scripts/cart-badge.js\");\n\nwindow.CartBadge = new CartBadge();\n\n(function () {\n  function performSearch(event) {\n    event.preventDefault();\n    var searchInput = document.getElementById(\"search-input\");\n    window.location = \"/\" + encodeURIComponent(searchInput.value);\n  }\n\n  var searchForm = document.getElementById(\"search-form\");\n  searchForm.onsubmit = performSearch;\n  cookieDisclaimerHandler();\n})();\n\n(function () {\n  var modeDropdown = document.querySelector(\"#more-dropdown\");\n  var modeDropdownContainer = document.querySelector(\".nav-list__item--more\");\n\n  var moreCategoriesStatus = function moreCategoriesStatus() {\n    var status = [];\n    var items = modeDropdown.querySelectorAll(\".nav-list__item\");\n\n    for (var i = 0; i < items.length; i++) {\n      status.push(items[i].style.display);\n    }\n\n    var noneQnt = status.filter(function (statusItem) {\n      return statusItem == \"none\";\n    });\n    return noneQnt.length >= status.length;\n  };\n\n  var moreCategoriesToggle = function moreCategoriesToggle() {\n    if (!moreCategoriesStatus()) {\n      modeDropdownContainer.style.display = \"initial\";\n    } else {\n      modeDropdownContainer.style.display = \"none\";\n    }\n  };\n\n  window.addEventListener(\"resize\", function () {\n    moreCategoriesStatus();\n    moreCategoriesToggle();\n    setMobileMenuHeight();\n  });\n  document.querySelectorAll(\".toggle-menu\").forEach(function (menuItem) {\n    menuItem.addEventListener(\"click\", function (e) {\n      e.target.classList.toggle(\"active\");\n      var target = e.target.classList.contains(\"subcategory\") ? '.target-' + e.target.getAttribute(\"data-js\") + ' .nav-tools-list--vertical__subitem' : '.target-' + e.target.getAttribute(\"data-js\");\n      var activeClass = menuItem.classList.contains(\"active\");\n      var parentElement_ = e.target.parentElement.parentElement.querySelector(\".nav-tools-list--vertical__attr-container\");\n\n      if (e.target.classList.contains(\"subcategory\")) {\n        if (activeClass) {\n          document.querySelectorAll(target).forEach(function (a) {\n            a;\n            a.style.display = \"inline\";\n          });\n        } else {\n          document.querySelectorAll(target).forEach(function (a) {\n            a;\n            a.style.display = \"none\";\n          });\n        }\n      } else {\n        if (activeClass) {\n          parentElement_.style.display = \"inline\";\n        } else {\n          parentElement_.style.display = \"none\";\n        }\n      }\n    });\n  });\n  var navList = document.getElementById(\"nav-list\");\n\n  function showHamburgerMenu() {\n    var navListChildren = navList.children;\n    var maxWidthNavList = 400;\n    var totalWidth = 0;\n\n    for (var i = 0; i < navListChildren.length; i++) {\n      totalWidth = totalWidth + navListChildren[i].offsetWidth;\n    }\n\n    return totalWidth > maxWidthNavList;\n  }\n\n  window.addEventListener(\"resize\", showHamburgerMenu);\n  var navPopoverList = document.querySelector(\"#nav-list\");\n  var button = document.querySelector(\".nav-list__item--more\");\n  var navListChildren = navPopoverList.querySelectorAll(\"[tools-custom-data-emitter]\");\n  var buttonListChildren = button.querySelectorAll(\".nav-list--dropdown [tools-custom-data-receiver]\");\n\n  function numberOfActiveItems(number) {\n    try {\n      for (var i = 0; i < navListChildren.length; i++) {\n        if (navListChildren[i].className !== \"nav-list__item how-buy__button\") {\n          navListChildren[i].style.display = \"inline\";\n          buttonListChildren[i].style.display = \"block\";\n        }\n\n        if (navListChildren[i].getAttribute(\"tools-custom-data-emitter\") > number - 1) {\n          navListChildren[i].style.display = \"none\";\n        } else {\n          buttonListChildren[i].style.display = \"none\";\n        }\n      }\n    } catch (e) {}\n  } // ------> I leave this session commented because I believe the code can be improved to make it clearer. having more time I will take care of improving it\n  //In this session an algorithm was created to check the number of elements that can be displayed in the menu in relation to their size\n\n\n  var menuElement = document.querySelector(\"#nav-list\");\n  var menuElementChildrens = menuElement.querySelectorAll(\".nav-list__item\");\n  var safePaddingArea = 300;\n\n  function checkMenuFill(menuChildren, utils) {\n    //here I try to stop the propagation of foreach when the number of elements exceeds the menu overflow\n    if (!utils.stopPropagation) {\n      numberOfActiveItems(utils.counter + 1);\n    } else {\n      return;\n    }\n\n    utils.currentMenuFill += menuChildren.getBoundingClientRect().width; //I put it in the -200 condition so that the overflow has a safe space in relation to the right padding\n\n    if (utils.currentMenuFill > utils.menuSize - safePaddingArea) {\n      numberOfActiveItems(utils.counter);\n      utils.stopPropagation = true;\n    }\n  } //Here I am creating a literal utilities object for executing the script\n\n\n  function runActiveMenuItems() {\n    //it is necessary to instantiate the number of items visible at zero in this instance of the function\n    numberOfActiveItems(0);\n    var utils = {\n      menuSize: 0,\n      currentMenuFill: 0,\n      counter: 0,\n      stopPropagation: false\n    };\n    var menu = document.querySelector(\"#nav-list\");\n    var menuWidth = parseFloat(menu.getBoundingClientRect().width);\n    utils.menuSize = menuWidth;\n    menuElementChildrens.forEach(function (element, index) {\n      utils.counter = index;\n      checkMenuFill(element, utils);\n    });\n  }\n\n  runActiveMenuItems();\n  window.addEventListener(\"resize\", function (e) {\n    var width = e.srcElement.innerWidth;\n    runActiveMenuItems();\n  }); //Mobile menu actions\n\n  var categoriesOption = document.querySelectorAll('[data-js=\"categories-toggle\"]'); // this conditional fix chrome 43 version warning\n\n  if (categoriesOption && categoriesOption.length > 0) {\n    categoriesOption.forEach(function (item) {\n      item.addEventListener(\"click\", toggleSubItems);\n    }, this);\n  }\n\n  function toggleSubItems() {\n    var displayHidden = \"none\";\n    var displayVisible = \"block\";\n    var subItemes = document.querySelectorAll('[data-toggle=\"' + this.id + '\"]');\n    subItemes.forEach(function (item) {\n      item.style.display = this.checked ? displayVisible : displayHidden;\n    }, this);\n  }\n\n  function hideAllMenu() {\n    try {\n      document.querySelectorAll(\".submenu--visible\").forEach(function (element) {\n        element.classList.remove(\"submenu--visible\");\n      });\n    } catch (e) {}\n\n    try {\n      document.querySelectorAll(\".submenu--active\").forEach(function (element) {\n        element.classList.remove(\"submenu--active\");\n      });\n    } catch (e) {}\n\n    try {\n      var categoriesElements = document.querySelector(\"#more-dropdown\");\n      categoriesElements.classList.remove(\"more-dropdown--visible\");\n    } catch (e) {}\n  }\n\n  var menuItem = document.querySelectorAll(\"[tools-custom-data-emitter]\").forEach(function (item) {\n    childrenClass = item.getAttribute(\"tools-custom-data-emitter\");\n    item.addEventListener(\"mouseover\", function (element) {\n      hideAllMenu();\n\n      try {\n        item.classList.add(\"submenu--active\");\n        var elementTarget = element.target.getAttribute(\"tools-custom-data-emitter\");\n        var subcategoryElement = document.querySelector('[data-toggle=\"' + elementTarget + '\"]');\n        subcategoryElement.classList.add(\"submenu--visible\");\n      } catch (e) {}\n    });\n  });\n  document.querySelector(\".nav-list__item--more\").addEventListener(\"mouseover\", function (element) {\n    hideAllMenu();\n    var categoriesElements = document.querySelector(\"#more-dropdown\");\n\n    if (!moreCategoriesStatus()) {\n      categoriesElements.classList.add(\"more-dropdown--visible\");\n    }\n  });\n  document.querySelector(\".nav-tools-header__categories\").addEventListener(\"mouseleave\", function (element) {\n    var categoriesElements = document.querySelector(\"#more-dropdown\");\n    categoriesElements.classList.remove(\"more-dropdown--visible\");\n    hideAllMenu();\n  });\n\n  function setMenuArrowsColor() {\n    try {\n      var arrows = document.querySelectorAll(\".nav-header__toggle\");\n      var hr = document.querySelectorAll(\".nav-tools-list--vertical__hr.header--custom-border, #more-dropdown .nav-list__item hr\");\n      var colorReferenceElement = document.querySelector(\".nav-list .header--custom-text a\");\n      var colorReference = window.getComputedStyle(colorReferenceElement, null).getPropertyValue(\"color\");\n      arrows.forEach(function (element) {\n        element.style.backgroundColor = colorReference;\n      });\n      hr.forEach(function (element) {\n        element.style.backgroundColor = colorReference;\n        element.style.padding = \"0.5px\";\n      });\n    } catch (e) {}\n  }\n\n  function setMobileMenuHeight() {\n    var header = document.querySelector(\".header-wrapper.header-wrapper--fixed\");\n    var headerSize = window.getComputedStyle(header, null).getPropertyValue(\"height\");\n    var menuContainer = document.querySelector(\"#mobile-categories-menu-switch ~ .nav-list--vertical\");\n    menuContainer.style.height = \"calc(100vh - \" + headerSize + \")\";\n    menuContainer.style.top = headerSize;\n    menuContainer.style.marginTop = \"0px\";\n    menuContainer.style.marginBottom = \"12px\";\n  }\n\n  function checkEmptyCategory() {\n    var parentElement = document.querySelectorAll(\".nav-tools-list--vertical__category.header--custom-text\");\n\n    try {\n      parentElement.forEach(function (element) {\n        var dataJsElement = element.querySelector(\"[data-js]\");\n        var attribute = dataJsElement ? dataJsElement.getAttribute(\"data-js\") : \"\";\n        var elementTarget = document.querySelector(\".target-\" + attribute);\n\n        if (elementTarget != null && elementTarget.childElementCount == 0) {\n          element.querySelector(\".toggle-menu.subcategory\").remove();\n        }\n      });\n    } catch (e) {\n      console.error(e);\n    }\n  }\n\n  function allowOnlyClickEvents(element) {\n    document.querySelectorAll(element).forEach(function (element) {\n      element.addEventListener('click', function () {\n        element.querySelector('.nav-list__link:not(div)').style.pointerEvents = \"all\";\n        element.querySelector('.nav-list__link').click();\n      });\n    });\n  }\n\n  var navListItemMore = document.querySelector('.nav-list__item--more');\n  navListItemMore.addEventListener('mouseover', function (element) {\n    try {\n      navListItemMore.classList.add(\"submenu--active\");\n    } catch (e) {}\n  });\n  navListItemMore.addEventListener('mouseleave', function (element) {\n    try {\n      navListItemMore.classList.remove(\"submenu--active\");\n    } catch (e) {}\n  });\n\n  var showMenu = function showMenu() {\n    var menuCategories = document.querySelector('.nav-tools-header__categories');\n    menuCategories.classList.add('nav-tools-header__categories--visible');\n    document.querySelector('.nav-tools-header__top-bound-separation').style.overflow = \"auto\";\n  };\n\n  allowOnlyClickEvents('#nav-list .nav-list__item');\n  moreCategoriesToggle();\n  setMenuArrowsColor();\n  setMobileMenuHeight();\n  checkEmptyCategory();\n  showMenu();\n})();\n\n//# sourceURL=webpack:///./templates/tools/assets/scripts/menu/src/index.js?");

/***/ }),

/***/ 1:
/*!****************************************************************!*\
  !*** multi ./templates/tools/assets/scripts/menu/src/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./templates/tools/assets/scripts/menu/src/index.js */\"./templates/tools/assets/scripts/menu/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./templates/tools/assets/scripts/menu/src/index.js?");

/***/ })

/******/ });