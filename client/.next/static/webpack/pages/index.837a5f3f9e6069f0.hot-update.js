"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./app/components/layout/header/auth-form/AuthForm.tsx":
/*!*************************************************************!*\
  !*** ./app/components/layout/header/auth-form/AuthForm.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons-right/IconsRight.module.scss */ \"./app/components/layout/header/icons-right/IconsRight.module.scss\");\n/* harmony import */ var _icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthForm.module.scss */ \"./app/components/layout/header/auth-form/AuthForm.module.scss\");\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/hooks/useOutside */ \"./app/components/hooks/useOutside.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar AuthForm = function() {\n    _s();\n    var ref = (0,_components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__.useOutside)(false), isShow = ref.isShow, setIsShow = ref.setIsShow, ref1 = ref.ref;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\"), type = ref2[0], setType = ref2[1];\n    // const {isLoading} = useAuth()\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({\n        mode: \"onChange\"\n    }), register = ref3.register, errors = ref3.formState.errors, handleSubmit = ref3.handleSubmit;\n    var onSubmit = function(data) {\n        switch(type){\n            case \"login\":\n            case \"registration\":\n            default:\n                return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        ref: ref1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUserCircle, {\n                fill: \"#a4a4a4\"\n            }, void 0, false, {\n                fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, _this);\n};\n_s(AuthForm, \"8u9M9xu5ec48SpvHjE0ymkb3dCc=\", false, function() {\n    return [\n        _components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__.useOutside,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2F1dGgtZm9ybS9BdXRoRm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE4RDtBQUNuQjtBQUNlO0FBRWY7QUFDYTtBQUNYO0FBRzdDLElBQU1PLFFBQVEsR0FBTyxXQUFNOztJQUMxQixJQUFtQ0wsR0FBaUIsR0FBakJBLHdFQUFVLENBQUMsS0FBSyxDQUFDLEVBQTVDTSxNQUFNLEdBQXFCTixHQUFpQixDQUE1Q00sTUFBTSxFQUFFQyxTQUFTLEdBQVVQLEdBQWlCLENBQXBDTyxTQUFTLEVBQUVDLElBQUcsR0FBS1IsR0FBaUIsQ0FBekJRLEdBQUc7SUFDOUIsSUFBd0JOLElBQTJDLEdBQTNDQSwrQ0FBUSxDQUEyQixPQUFPLENBQUMsRUFBNURPLElBQUksR0FBYVAsSUFBMkMsR0FBeEQsRUFBRVEsT0FBTyxHQUFJUixJQUEyQyxHQUEvQztJQUVwQixnQ0FBZ0M7SUFDaEMsSUFJSUMsSUFFRixHQUZFQSx3REFBTyxDQUFrQjtRQUM1QlEsSUFBSSxFQUFFLFVBQVU7S0FDaEIsQ0FBQyxFQUxEQyxRQUFRLEdBR0xULElBRUYsQ0FMRFMsUUFBUSxFQUNSQyxNQUFtQixHQUVoQlYsSUFFRixDQUpEVSxTQUFTLENBQUlDLE1BQU0sRUFDbkJDLFlBQVksR0FDVFosSUFFRixDQUhEWSxZQUFZO0lBS2IsSUFBTUMsUUFBUSxHQUFtQ0MsU0FBQUEsSUFBSSxFQUFJO1FBQ3hELE9BQVFSLElBQUk7WUFDWCxLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssY0FBYyxDQUFDO1lBQ3BCO2dCQUNDLE9BQU07U0FDUDtLQUNEO0lBRUQscUJBQ0MsOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFFcEIsc0VBQWM7UUFBRVMsR0FBRyxFQUFFQSxJQUFHO2tCQUN2Qyw0RUFBQ2EsUUFBTTtZQUFDRixTQUFTLEVBQUVyQixtRkFBaUI7c0JBQ25DLDRFQUFDTSx3REFBWTtnQkFBQ2tCLElBQUksRUFBQyxTQUFTOzs7OztxQkFBRzs7Ozs7aUJBQ3ZCOzs7OzthQUNKLENBQ047Q0FDRDtHQTdCS2pCLFFBQVE7O1FBQ3NCTCxvRUFBVTtRQVF6Q0csb0RBQU87OztBQVRORSxLQUFBQSxRQUFRO0FBK0JkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvYXV0aC1mb3JtL0F1dGhGb3JtLnRzeD9mMDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXNJY29uIGZyb20gJy4uL2ljb25zLXJpZ2h0L0ljb25zUmlnaHQubW9kdWxlLnNjc3MnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXV0aEZvcm0ubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VPdXRzaWRlIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvb2tzL3VzZU91dHNpZGUnXG5pbXBvcnQgeyBJQXV0aEZvcm1GaWVsZHMgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9hdXRoLWZvcm0vYXV0aC1mb3JtLmludGVyZmFjZSdcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgeyBGYVVzZXJDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcblxuXG5jb25zdCBBdXRoRm9ybTogRkMgPSAoKSA9PiB7XG5cdGNvbnN0IHsgaXNTaG93LCBzZXRJc1Nob3csIHJlZiB9ID0gdXNlT3V0c2lkZShmYWxzZSlcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8J2xvZ2luJyB8ICdyZWdpc3RyYXRpb24nPignbG9naW4nKVxuXG5cdC8vIGNvbnN0IHtpc0xvYWRpbmd9ID0gdXNlQXV0aCgpXG5cdGNvbnN0IHtcblx0XHRyZWdpc3Rlcixcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdFx0aGFuZGxlU3VibWl0XG5cdH0gPSB1c2VGb3JtPElBdXRoRm9ybUZpZWxkcz4oe1xuXHRcdG1vZGU6ICdvbkNoYW5nZSdcblx0fSlcblxuXHRjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxJQXV0aEZvcm1GaWVsZHM+ID0gZGF0YSA9PiB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdsb2dpbic6XG5cdFx0XHRjYXNlICdyZWdpc3RyYXRpb24nOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IHJlZj17cmVmfT5cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNJY29uLmJ1dHRvbn0+XG5cdFx0XHRcdDxGYVVzZXJDaXJjbGUgZmlsbD0nI2E0YTRhNCcgLz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtIl0sIm5hbWVzIjpbInN0eWxlc0ljb24iLCJzdHlsZXMiLCJ1c2VPdXRzaWRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJGYVVzZXJDaXJjbGUiLCJBdXRoRm9ybSIsImlzU2hvdyIsInNldElzU2hvdyIsInJlZiIsInR5cGUiLCJzZXRUeXBlIiwibW9kZSIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImJ1dHRvbiIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/layout/header/auth-form/AuthForm.tsx\n"));

/***/ })

});