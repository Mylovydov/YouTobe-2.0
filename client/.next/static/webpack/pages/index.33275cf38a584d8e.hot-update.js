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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons-right/IconsRight.module.scss */ \"./app/components/layout/header/icons-right/IconsRight.module.scss\");\n/* harmony import */ var _icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthForm.module.scss */ \"./app/components/layout/header/auth-form/AuthForm.module.scss\");\n/* harmony import */ var _AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/hooks/useOutside */ \"./app/components/hooks/useOutside.tsx\");\n/* harmony import */ var _components_layout_header_auth_form_auth_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/header/auth-form/auth.valid */ \"./app/components/layout/header/auth-form/auth.valid.ts\");\n/* harmony import */ var _components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button/Button */ \"./app/components/ui/button/Button.tsx\");\n/* harmony import */ var _components_ui_field_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/field/Field */ \"./app/components/ui/field/Field.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AuthForm = function() {\n    _s();\n    var ref = (0,_components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__.useOutside)(false), isShow = ref.isShow, setIsShow = ref.setIsShow, ref1 = ref.ref;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"login\"), type = ref2[0], setType = ref2[1];\n    // const {isLoading} = useAuth()\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        mode: \"onChange\"\n    }), register = ref3.register, errors = ref3.formState.errors, handleSubmit = ref3.handleSubmit;\n    var onSubmit = function(data) {\n        switch(type){\n            case \"login\":\n            case \"registration\":\n            default:\n                return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),\n        ref: ref1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_icons_right_IconsRight_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),\n                onClick: function() {\n                    return setIsShow(!isShow);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaUserCircle, {\n                    fill: \"#a4a4a4\"\n                }, void 0, false, {\n                    fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, _this),\n            isShow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_AuthForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default().form),\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_field_Field__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, register(\"email\", {\n                        required: \"Email is required\",\n                        pattern: {\n                            value: _components_layout_header_auth_form_auth_valid__WEBPACK_IMPORTED_MODULE_2__.validEmail,\n                            message: \"Email is not valid\"\n                        }\n                    })), {\n                        placeholder: \"Email\",\n                        error: errors.email\n                    }), void 0, false, {\n                        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_field_Field__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, register(\"password\", {\n                        required: \"password is required\",\n                        minLength: {\n                            value: 6,\n                            message: \"Password must be not less 6 characters\"\n                        }\n                    })), {\n                        placeholder: \"Password\",\n                        error: errors.password,\n                        type: \"password\"\n                    }), void 0, false, {\n                        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 mb-1 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: function() {\n                                return setType(\"login\");\n                            },\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: function() {\n                            return setType(\"registration\");\n                        },\n                        children: \"Log In\"\n                    }, void 0, false, {\n                        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/denys/Documents/learning projects/red_group/youtobe/client/app/components/layout/header/auth-form/AuthForm.tsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, _this);\n};\n_s(AuthForm, \"8u9M9xu5ec48SpvHjE0ymkb3dCc=\", false, function() {\n    return [\n        _components_hooks_useOutside__WEBPACK_IMPORTED_MODULE_1__.useOutside,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2F1dGgtZm9ybS9BdXRoRm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBOEQ7QUFDbkI7QUFDZTtBQUVrQjtBQUMxQjtBQUNIO0FBQ0o7QUFDYTtBQUNYO0FBRzdDLElBQU1VLFFBQVEsR0FBTyxXQUFNOztJQUMxQixJQUFtQ1IsR0FBaUIsR0FBakJBLHdFQUFVLENBQUMsS0FBSyxDQUFDLEVBQTVDUyxNQUFNLEdBQXFCVCxHQUFpQixDQUE1Q1MsTUFBTSxFQUFFQyxTQUFTLEdBQVVWLEdBQWlCLENBQXBDVSxTQUFTLEVBQUVDLElBQUcsR0FBS1gsR0FBaUIsQ0FBekJXLEdBQUc7SUFDOUIsSUFBd0JOLElBQTJDLEdBQTNDQSwrQ0FBUSxDQUEyQixPQUFPLENBQUMsRUFBNURPLElBQUksR0FBYVAsSUFBMkMsR0FBeEQsRUFBRVEsT0FBTyxHQUFJUixJQUEyQyxHQUEvQztJQUVwQixnQ0FBZ0M7SUFDaEMsSUFJSUMsSUFFRixHQUZFQSx3REFBTyxDQUFrQjtRQUM1QlEsSUFBSSxFQUFFLFVBQVU7S0FDaEIsQ0FBQyxFQUxEQyxRQUFRLEdBR0xULElBRUYsQ0FMRFMsUUFBUSxFQUNSQyxNQUFtQixHQUVoQlYsSUFFRixDQUpEVSxTQUFTLENBQUlDLE1BQU0sRUFDbkJDLFlBQVksR0FDVFosSUFFRixDQUhEWSxZQUFZO0lBS2IsSUFBTUMsUUFBUSxHQUFtQ0MsU0FBQUEsSUFBSSxFQUFJO1FBQ3hELE9BQVFSLElBQUk7WUFDWCxLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssY0FBYyxDQUFDO1lBQ3BCO2dCQUNDLE9BQU07U0FDUDtLQUNEO0lBRUQscUJBQ0MsOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFFdkIsc0VBQWM7UUFBRVksR0FBRyxFQUFFQSxJQUFHOzswQkFDdkMsOERBQUNhLFFBQU07Z0JBQUNGLFNBQVMsRUFBRXhCLG1GQUFpQjtnQkFBRTJCLE9BQU8sRUFBRTsyQkFBTWYsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztpQkFBQTswQkFDdEUsNEVBQUNGLHdEQUFZO29CQUFDbUIsSUFBSSxFQUFDLFNBQVM7Ozs7O3lCQUFHOzs7OztxQkFDdkI7WUFFUmpCLE1BQU0sa0JBQ04sOERBQUNrQixNQUFJO2dCQUFDTCxTQUFTLEVBQUV2QixtRUFBVztnQkFBRW9CLFFBQVEsRUFBRUQsWUFBWSxDQUFDQyxRQUFRLENBQUM7O2tDQUM3RCw4REFBQ2hCLGtFQUFLLDRLQUNEWSxRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUNyQmEsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0JDLE9BQU8sRUFBRTs0QkFDUkMsS0FBSyxFQUFFN0Isc0ZBQVU7NEJBQ2pCOEIsT0FBTyxFQUFFLG9CQUFvQjt5QkFDN0I7cUJBQ0QsQ0FBQzt3QkFDRkMsV0FBVyxFQUFDLE9BQU87d0JBQ25CQyxLQUFLLEVBQUVoQixNQUFNLENBQUNpQixLQUFLOzs7Ozs2QkFDbEI7a0NBQ0YsOERBQUMvQixrRUFBSyw0S0FDRFksUUFBUSxDQUFDLFVBQVUsRUFBRTt3QkFDeEJhLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDTyxTQUFTLEVBQUU7NEJBQ1ZMLEtBQUssRUFBRSxDQUFDOzRCQUNSQyxPQUFPLEVBQUUsd0NBQXdDO3lCQUNqRDtxQkFDRCxDQUFDO3dCQUNGQyxXQUFXLEVBQUMsVUFBVTt3QkFDdEJDLEtBQUssRUFBRWhCLE1BQU0sQ0FBQ21CLFFBQVE7d0JBQ3RCeEIsSUFBSSxFQUFDLFVBQVU7Ozs7OzZCQUNkO2tDQUVGLDhEQUFDUyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsdUJBQXVCO2tDQUNyQyw0RUFBQ3BCLG9FQUFNOzRCQUFDdUIsT0FBTyxFQUFFO3VDQUFNWixPQUFPLENBQUMsT0FBTyxDQUFDOzZCQUFBO3NDQUFFLFNBQU87Ozs7O2lDQUFTOzs7Ozs2QkFDcEQ7a0NBQ04sOERBQUNYLG9FQUFNO3dCQUFDdUIsT0FBTyxFQUFFO21DQUFNWixPQUFPLENBQUMsY0FBYyxDQUFDO3lCQUFBO2tDQUFFLFFBQU07Ozs7OzZCQUFTOzs7Ozs7cUJBQ3pEOzs7Ozs7YUFFSCxDQUNOO0NBQ0Q7R0E5REtMLFFBQVE7O1FBQ3NCUixvRUFBVTtRQVF6Q00sb0RBQU87OztBQVRORSxLQUFBQSxRQUFRO0FBZ0VkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvYXV0aC1mb3JtL0F1dGhGb3JtLnRzeD9mMDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXNJY29uIGZyb20gJy4uL2ljb25zLXJpZ2h0L0ljb25zUmlnaHQubW9kdWxlLnNjc3MnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXV0aEZvcm0ubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VPdXRzaWRlIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvb2tzL3VzZU91dHNpZGUnXG5pbXBvcnQgeyBJQXV0aEZvcm1GaWVsZHMgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9hdXRoLWZvcm0vYXV0aC1mb3JtLmludGVyZmFjZSdcbmltcG9ydCB7IHZhbGlkRW1haWwgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9hdXRoLWZvcm0vYXV0aC52YWxpZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbi9CdXR0b24nXG5pbXBvcnQgRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3VpL2ZpZWxkL0ZpZWxkJ1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VibWl0SGFuZGxlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IEZhVXNlckNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5cbmNvbnN0IEF1dGhGb3JtOiBGQyA9ICgpID0+IHtcblx0Y29uc3QgeyBpc1Nob3csIHNldElzU2hvdywgcmVmIH0gPSB1c2VPdXRzaWRlKGZhbHNlKVxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTwnbG9naW4nIHwgJ3JlZ2lzdHJhdGlvbic+KCdsb2dpbicpXG5cblx0Ly8gY29uc3Qge2lzTG9hZGluZ30gPSB1c2VBdXRoKClcblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0XHRoYW5kbGVTdWJtaXRcblx0fSA9IHVzZUZvcm08SUF1dGhGb3JtRmllbGRzPih7XG5cdFx0bW9kZTogJ29uQ2hhbmdlJ1xuXHR9KVxuXG5cdGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPElBdXRoRm9ybUZpZWxkcz4gPSBkYXRhID0+IHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ2xvZ2luJzpcblx0XHRcdGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm5cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0gcmVmPXtyZWZ9PlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc0ljb24uYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3coIWlzU2hvdyl9PlxuXHRcdFx0XHQ8RmFVc2VyQ2lyY2xlIGZpbGw9JyNhNGE0YTQnIC8+XG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0e2lzU2hvdyAmJiAoXG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cblx0XHRcdFx0XHQ8RmllbGRcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiAnRW1haWwgaXMgcmVxdWlyZWQnLFxuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHZhbGlkRW1haWwsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0VtYWlsIGlzIG5vdCB2YWxpZCdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW1haWwnXG5cdFx0XHRcdFx0XHRlcnJvcj17ZXJyb3JzLmVtYWlsfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEZpZWxkXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogJ3Bhc3N3b3JkIGlzIHJlcXVpcmVkJyxcblx0XHRcdFx0XHRcdFx0bWluTGVuZ3RoOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDYsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1Bhc3N3b3JkIG11c3QgYmUgbm90IGxlc3MgNiBjaGFyYWN0ZXJzJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcblx0XHRcdFx0XHRcdGVycm9yPXtlcnJvcnMucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTUgbWItMSB0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ2xvZ2luJyl9PlNpZ24gSW48L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ3JlZ2lzdHJhdGlvbicpfT5Mb2cgSW48L0J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybSJdLCJuYW1lcyI6WyJzdHlsZXNJY29uIiwic3R5bGVzIiwidXNlT3V0c2lkZSIsInZhbGlkRW1haWwiLCJCdXR0b24iLCJGaWVsZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiRmFVc2VyQ2lyY2xlIiwiQXV0aEZvcm0iLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJyZWYiLCJ0eXBlIiwic2V0VHlwZSIsIm1vZGUiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImVycm9ycyIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZmlsbCIsImZvcm0iLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsImVycm9yIiwiZW1haWwiLCJtaW5MZW5ndGgiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/layout/header/auth-form/AuthForm.tsx\n"));

/***/ })

});