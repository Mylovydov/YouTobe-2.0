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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons-right/IconsRight.module.scss */ \"./app/components/layout/header/icons-right/IconsRight.module.scss\");\n/* harmony import */ var _icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthForm.module.scss */ \"./app/components/layout/header/auth-form/AuthForm.module.scss\");\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/hooks/useOutside */ \"./app/components/hooks/useOutside.tsx\");\n/* harmony import */ var _components_layout_header_auth_form_auth_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/header/auth-form/auth.valid */ \"./app/components/layout/header/auth-form/auth.valid.ts\");\n/* harmony import */ var _components_ui_field_Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/field/Field */ \"./app/components/ui/field/Field.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AuthForm = function() {\n    _s();\n    var ref = (0,_components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__.useOutside)(false), isShow = ref.isShow, setIsShow = ref.setIsShow, ref1 = ref.ref;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"login\"), type = ref2[0], setType = ref2[1];\n    // const {isLoading} = useAuth()\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({\n        mode: \"onChange\"\n    }), register = ref3.register, errors = ref3.formState.errors, handleSubmit = ref3.handleSubmit;\n    var onSubmit = function(data) {\n        switch(type){\n            case \"login\":\n            case \"registration\":\n            default:\n                return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        ref: ref1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),\n                onClick: function() {\n                    return setIsShow(!isShow);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaUserCircle, {\n                    fill: \"#a4a4a4\"\n                }, void 0, false, {\n                    fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, _this),\n            isShow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n                onSubmit: handleSubmit(onSubmit),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_field_Field__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, register(\"email\", {\n                    required: \"Email is required\",\n                    pattern: {\n                        value: _components_layout_header_auth_form_auth_valid__WEBPACK_IMPORTED_MODULE_2__.validEmail,\n                        message: \"Email is not valid\"\n                    }\n                })), void 0, false, {\n                    fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 6\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, _this);\n};\n_s(AuthForm, \"8u9M9xu5ec48SpvHjE0ymkb3dCc=\", false, function() {\n    return [\n        _components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__.useOutside,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2F1dGgtZm9ybS9BdXRoRm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBOEQ7QUFDbkI7QUFDZTtBQUVrQjtBQUM3QjtBQUNKO0FBQ2E7QUFDWDtBQUc3QyxJQUFNUyxRQUFRLEdBQU8sV0FBTTs7SUFDMUIsSUFBbUNQLEdBQWlCLEdBQWpCQSx3RUFBVSxDQUFDLEtBQUssQ0FBQyxFQUE1Q1EsTUFBTSxHQUFxQlIsR0FBaUIsQ0FBNUNRLE1BQU0sRUFBRUMsU0FBUyxHQUFVVCxHQUFpQixDQUFwQ1MsU0FBUyxFQUFFQyxJQUFHLEdBQUtWLEdBQWlCLENBQXpCVSxHQUFHO0lBQzlCLElBQXdCTixJQUEyQyxHQUEzQ0EsK0NBQVEsQ0FBMkIsT0FBTyxDQUFDLEVBQTVETyxJQUFJLEdBQWFQLElBQTJDLEdBQXhELEVBQUVRLE9BQU8sR0FBSVIsSUFBMkMsR0FBL0M7SUFFcEIsZ0NBQWdDO0lBQ2hDLElBSUlDLElBRUYsR0FGRUEsd0RBQU8sQ0FBa0I7UUFDNUJRLElBQUksRUFBRSxVQUFVO0tBQ2hCLENBQUMsRUFMREMsUUFBUSxHQUdMVCxJQUVGLENBTERTLFFBQVEsRUFDUkMsTUFBbUIsR0FFaEJWLElBRUYsQ0FKRFUsU0FBUyxDQUFJQyxNQUFNLEVBQ25CQyxZQUFZLEdBQ1RaLElBRUYsQ0FIRFksWUFBWTtJQUtiLElBQU1DLFFBQVEsR0FBbUNDLFNBQUFBLElBQUksRUFBSTtRQUN4RCxPQUFRUixJQUFJO1lBQ1gsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLGNBQWMsQ0FBQztZQUNwQjtnQkFDQyxPQUFNO1NBQ1A7S0FDRDtJQUVELHFCQUNDLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBRXRCLHNFQUFjO1FBQUVXLEdBQUcsRUFBRUEsSUFBRzs7MEJBQ3ZDLDhEQUFDYSxRQUFNO2dCQUFDRixTQUFTLEVBQUV2QixtRkFBaUI7Z0JBQUUwQixPQUFPLEVBQUU7MkJBQU1mLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7aUJBQUE7MEJBQ3RFLDRFQUFDRix3REFBWTtvQkFBQ21CLElBQUksRUFBQyxTQUFTOzs7Ozt5QkFBRzs7Ozs7cUJBQ3ZCO1lBRVJqQixNQUFNLGtCQUNOLDhEQUFDa0IsTUFBSTtnQkFBQ0wsU0FBUyxFQUFFdEIsbUVBQVc7Z0JBQUVtQixRQUFRLEVBQUVELFlBQVksQ0FBQ0MsUUFBUSxDQUFDOzBCQUM3RCw0RUFBQ2hCLGtFQUFLLHFGQUNEWSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNyQmEsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0JDLE9BQU8sRUFBRTt3QkFDUkMsS0FBSyxFQUFFNUIsc0ZBQVU7d0JBQ2pCNkIsT0FBTyxFQUFFLG9CQUFvQjtxQkFDN0I7aUJBQ0QsQ0FBQzs7Ozt5QkFDRDs7Ozs7cUJBQ0k7Ozs7OzthQUVILENBQ047Q0FDRDtHQTNDS3ZCLFFBQVE7O1FBQ3NCUCxvRUFBVTtRQVF6Q0ssb0RBQU87OztBQVRORSxLQUFBQSxRQUFRO0FBNkNkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvYXV0aC1mb3JtL0F1dGhGb3JtLnRzeD9mMDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXNJY29uIGZyb20gJy4uL2ljb25zLXJpZ2h0L0ljb25zUmlnaHQubW9kdWxlLnNjc3MnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXV0aEZvcm0ubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VPdXRzaWRlIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvb2tzL3VzZU91dHNpZGUnXG5pbXBvcnQgeyBJQXV0aEZvcm1GaWVsZHMgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9hdXRoLWZvcm0vYXV0aC1mb3JtLmludGVyZmFjZSdcbmltcG9ydCB7IHZhbGlkRW1haWwgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9hdXRoLWZvcm0vYXV0aC52YWxpZCdcbmltcG9ydCBGaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvdWkvZmllbGQvRmllbGQnXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IHsgRmFVc2VyQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cblxuY29uc3QgQXV0aEZvcm06IEZDID0gKCkgPT4ge1xuXHRjb25zdCB7IGlzU2hvdywgc2V0SXNTaG93LCByZWYgfSA9IHVzZU91dHNpZGUoZmFsc2UpXG5cdGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlPCdsb2dpbicgfCAncmVnaXN0cmF0aW9uJz4oJ2xvZ2luJylcblxuXHQvLyBjb25zdCB7aXNMb2FkaW5nfSA9IHVzZUF1dGgoKVxuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuXHRcdGhhbmRsZVN1Ym1pdFxuXHR9ID0gdXNlRm9ybTxJQXV0aEZvcm1GaWVsZHM+KHtcblx0XHRtb2RlOiAnb25DaGFuZ2UnXG5cdH0pXG5cblx0Y29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8SUF1dGhGb3JtRmllbGRzPiA9IGRhdGEgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnbG9naW4nOlxuXHRcdFx0Y2FzZSAncmVnaXN0cmF0aW9uJzpcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVyblxuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSByZWY9e3JlZn0+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzSWNvbi5idXR0b259IG9uQ2xpY2s9eygpID0+IHNldElzU2hvdyghaXNTaG93KX0+XG5cdFx0XHRcdDxGYVVzZXJDaXJjbGUgZmlsbD0nI2E0YTRhNCcgLz5cblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHR7aXNTaG93ICYmIChcblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuXHRcdFx0XHRcdDxGaWVsZFxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6ICdFbWFpbCBpcyByZXF1aXJlZCcsXG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsaWRFbWFpbCxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnRW1haWwgaXMgbm90IHZhbGlkJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtIl0sIm5hbWVzIjpbInN0eWxlc0ljb24iLCJzdHlsZXMiLCJ1c2VPdXRzaWRlIiwidmFsaWRFbWFpbCIsIkZpZWxkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJGYVVzZXJDaXJjbGUiLCJBdXRoRm9ybSIsImlzU2hvdyIsInNldElzU2hvdyIsInJlZiIsInR5cGUiLCJzZXRUeXBlIiwibW9kZSIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmaWxsIiwiZm9ybSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/layout/header/auth-form/AuthForm.tsx\n"));

/***/ })

});