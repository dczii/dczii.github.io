(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_Model1_tsx_f0cebf._.js", {

"[project]/src/components/Model1.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweakpane$2f$dist$2f$tweakpane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tweakpane/dist/tweakpane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$loop$2d$ed5edcdb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/loop-ed5edcdb.esm.js [app-client] (ecmascript) <export A as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$loop$2d$ed5edcdb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/loop-ed5edcdb.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Model1() {
    _s();
    const { nodes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])("/scene/torrus.glb");
    const { viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$loop$2d$ed5edcdb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"])();
    const torus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for text properties
    const [textProps, setTextProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fontSize: 0.5,
        color: "#ffffff",
        text: "Hello World!"
    });
    // State to hold material properties
    const [materialProps, setMaterialProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        thickness: 0.8,
        roughness: 0.2,
        transmission: 0.9,
        ior: 1.2,
        chromaticAberration: 0.28,
        backside: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$loop$2d$ed5edcdb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "Model1.useFrame": ()=>{
            if (torus.current) {
                torus.current.rotation.x += 0.02;
            }
        }
    }["Model1.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Model1.useEffect": ()=>{
            const pane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tweakpane$2f$dist$2f$tweakpane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pane"]();
            const tabs = pane.addTab({
                pages: [
                    {
                        title: "Text Properties"
                    },
                    {
                        title: "Material Properties"
                    }
                ]
            });
            tabs.pages[0].addBinding(textProps, "fontSize", {
                min: 0.1,
                max: 2,
                step: 0.1
            }).on("change", {
                "Model1.useEffect": (e)=>setTextProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                fontSize: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[0].addBinding(textProps, "color", {
                view: "color"
            }).on("change", {
                "Model1.useEffect": (e)=>setTextProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                color: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[0].addBinding(textProps, "text", {
                view: "text"
            }).on("change", {
                "Model1.useEffect": (e)=>setTextProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                color: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            // Initialize TweakPane
            tabs.pages[1].addBinding(materialProps, "thickness", {
                min: 0,
                max: 3,
                step: 0.05
            }).on("change", {
                "Model1.useEffect": (e)=>setMaterialProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                thickness: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[1].addBinding(materialProps, "roughness", {
                min: 0,
                max: 1,
                step: 0.1
            }).on("change", {
                "Model1.useEffect": (e)=>setMaterialProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                roughness: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[1].addBinding(materialProps, "transmission", {
                min: 0,
                max: 1,
                step: 0.1
            }).on("change", {
                "Model1.useEffect": (e)=>setMaterialProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                transmission: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[1].addBinding(materialProps, "ior", {
                min: 1,
                max: 3,
                step: 0.1
            }).on("change", {
                "Model1.useEffect": (e)=>setMaterialProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                ior: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[1].addBinding(materialProps, "chromaticAberration", {
                min: 0,
                max: 1
            }).on("change", {
                "Model1.useEffect": (e)=>setMaterialProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                chromaticAberration: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            tabs.pages[1].addBinding(materialProps, "backside").on("change", {
                "Model1.useEffect": (e)=>setMaterialProps({
                        "Model1.useEffect": (prev)=>({
                                ...prev,
                                backside: e.value
                            })
                    }["Model1.useEffect"])
            }["Model1.useEffect"]);
            return ({
                "Model1.useEffect": ()=>pane.dispose()
            })["Model1.useEffect"];
        }
    }["Model1.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        scale: viewport.width / 3.75,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                font: "/fonts/PPNeueMontreal-Bold.otf",
                position: [
                    0,
                    0,
                    -1
                ],
                fontSize: textProps.fontSize,
                color: textProps.color,
                anchorX: "center",
                anchorY: "middle",
                children: textProps.text
            }, void 0, false, {
                fileName: "[project]/src/components/Model1.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: torus,
                ...nodes.Torus002,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshTransmissionMaterial"], {
                    ...materialProps
                }, void 0, false, {
                    fileName: "[project]/src/components/Model1.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Model1.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Model1.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Model1, "WvgpqrP9FfWdagPEq7FMaARZmn0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$loop$2d$ed5edcdb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$loop$2d$ed5edcdb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Model1;
const __TURBOPACK__default__export__ = Model1;
var _c;
__turbopack_refresh__.register(_c, "Model1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Model1_tsx_f0cebf._.js.map