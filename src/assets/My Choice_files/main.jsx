const StrictMode = __vite__cjsImport0_react["StrictMode"];const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];const _jsxDEV = __vite__cjsImport14_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=9dafe2c3";
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=9dafe2c3";
import "/src/index.css?t=1784306868906";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=9dafe2c3";
import Layout from "/src/layout.jsx?t=1784306868906";
import HomePage from "/src/pages/HomePage.jsx";
import NotFound from "/src/pages/NotFound.jsx";
import ShopPage from "/src/pages/ShopPage.jsx";
import OrdersPage from "/src/pages/OrdersPage.jsx";
import { getData } from "/src/utils/orderUtils.js";
import WishListPage from "/src/pages/WishListPage.jsx";
import { getWishList } from "/src/utils/wishlistUtils.js";
import ContactPage from "/src/pages/ContactPage.jsx";
import SearchResult from "/src/pages/SearchResult.jsx?t=1784306868906";
var _jsxFileName = "/Users/rohankorake/Documents/Rohan/Workspace/my-choice/src/main.jsx";
import __vite__cjsImport14_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9dafe2c3";
// routes
const router = createBrowserRouter(createRoutesFromElements(/* @__PURE__ */ _jsxDEV(Route, {
	path: "/",
	element: /* @__PURE__ */ _jsxDEV(Layout, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 30
	}, this),
	children: [
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "/",
			element: /* @__PURE__ */ _jsxDEV(HomePage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 32
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "home",
			element: /* @__PURE__ */ _jsxDEV(HomePage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 35
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "shop",
			element: /* @__PURE__ */ _jsxDEV(ShopPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 35
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			loader: getData,
			path: "orders",
			element: /* @__PURE__ */ _jsxDEV(OrdersPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 54
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			loader: getWishList,
			path: "wishlist",
			element: /* @__PURE__ */ _jsxDEV(WishListPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 60
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "contact",
			element: /* @__PURE__ */ _jsxDEV(ContactPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 38
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "searchresult",
			element: /* @__PURE__ */ _jsxDEV(SearchResult, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 43
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "*",
			element: /* @__PURE__ */ _jsxDEV(NotFound, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 32
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 7
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 24,
	columnNumber: 5
}, this)));
// router provider
createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(StrictMode, { children: /* @__PURE__ */ _jsxDEV(RouterProvider, { router }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 40,
	columnNumber: 5
}, this) }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 39,
	columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTztBQUNQLFNBQ0UscUJBQ0EsMEJBQ0EsT0FDQSxzQkFDSztBQUNQLE9BQU8sWUFBWTtBQUNuQixPQUFPLGNBQWM7QUFDckIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sY0FBYztBQUNyQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxtQkFBbUI7QUFDNUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7Ozs7QUFHekIsTUFBTSxTQUFTLG9CQUNiLHlCQUNFLHdCQUFDLE9BQUQ7Q0FBTyxNQUFLO0NBQUksU0FBUyx3QkFBQyxRQUFELENBQVM7Ozs7O1dBQWxDO0VBQ0Usd0JBQUMsT0FBRDtHQUFPLE1BQUs7R0FBSSxTQUFTLHdCQUFDLFVBQUQsQ0FBVzs7Ozs7RUFBSTs7Ozs7RUFDeEMsd0JBQUMsT0FBRDtHQUFPLE1BQUs7R0FBTyxTQUFTLHdCQUFDLFVBQUQsQ0FBVzs7Ozs7RUFBSTs7Ozs7RUFDM0Msd0JBQUMsT0FBRDtHQUFPLE1BQUs7R0FBTyxTQUFTLHdCQUFDLFVBQUQsQ0FBVzs7Ozs7RUFBSTs7Ozs7RUFDM0Msd0JBQUMsT0FBRDtHQUFPLFFBQVE7R0FBUyxNQUFLO0dBQVMsU0FBUyx3QkFBQyxZQUFELENBQWE7Ozs7O0VBQUk7Ozs7O0VBQ2hFLHdCQUFDLE9BQUQ7R0FBTyxRQUFRO0dBQWEsTUFBSztHQUFXLFNBQVMsd0JBQUMsY0FBRCxDQUFlOzs7OztFQUFJOzs7OztFQUN4RSx3QkFBQyxPQUFEO0dBQU8sTUFBSztHQUFVLFNBQVMsd0JBQUMsYUFBRCxDQUFjOzs7OztFQUFJOzs7OztFQUNqRCx3QkFBQyxPQUFEO0dBQU8sTUFBSztHQUFlLFNBQVMsd0JBQUMsY0FBRCxDQUFlOzs7OztFQUFJOzs7OztFQUN2RCx3QkFBQyxPQUFEO0dBQU8sTUFBSztHQUFJLFNBQVMsd0JBQUMsVUFBRCxDQUFXOzs7OztFQUFJOzs7OztDQUNuQzs7Ozs7UUFDVCxDQUNGOztBQUdBLFdBQVcsU0FBUyxlQUFlLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FDMUMsd0JBQUMsWUFBRCxZQUNFLHdCQUFDLGdCQUFELEVBQXdCLE9BQVM7Ozs7U0FDdkI7Ozs7UUFDZCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsXG4gIFJvdXRlLFxuICBSb3V0ZXJQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0LmpzeFwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlLmpzeFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL3BhZ2VzL05vdEZvdW5kLmpzeFwiO1xuaW1wb3J0IFNob3BQYWdlIGZyb20gXCIuL3BhZ2VzL1Nob3BQYWdlLmpzeFwiO1xuaW1wb3J0IE9yZGVyc1BhZ2UgZnJvbSBcIi4vcGFnZXMvT3JkZXJzUGFnZS5qc3hcIjtcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi91dGlscy9vcmRlclV0aWxzLmpzXCI7XG5pbXBvcnQgV2lzaExpc3RQYWdlIGZyb20gXCIuL3BhZ2VzL1dpc2hMaXN0UGFnZS5qc3hcIjtcbmltcG9ydCB7IGdldFdpc2hMaXN0IH0gZnJvbSBcIi4vdXRpbHMvd2lzaGxpc3RVdGlscy5qc1wiO1xuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gXCIuL3BhZ2VzL0NvbnRhY3RQYWdlLmpzeFwiO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9wYWdlcy9TZWFyY2hSZXN1bHQuanN4XCI7XG5cbi8vIHJvdXRlc1xuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihcbiAgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzKFxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgLz59PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWVQYWdlIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJob21lXCIgZWxlbWVudD17PEhvbWVQYWdlIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJzaG9wXCIgZWxlbWVudD17PFNob3BQYWdlIC8+fSAvPlxuICAgICAgPFJvdXRlIGxvYWRlcj17Z2V0RGF0YX0gcGF0aD1cIm9yZGVyc1wiIGVsZW1lbnQ9ezxPcmRlcnNQYWdlIC8+fSAvPlxuICAgICAgPFJvdXRlIGxvYWRlcj17Z2V0V2lzaExpc3R9IHBhdGg9XCJ3aXNobGlzdFwiIGVsZW1lbnQ9ezxXaXNoTGlzdFBhZ2UgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdFBhZ2UgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cInNlYXJjaHJlc3VsdFwiIGVsZW1lbnQ9ezxTZWFyY2hSZXN1bHQgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4gICAgPC9Sb3V0ZT4sXG4gICksXG4pO1xuXG4vLyByb3V0ZXIgcHJvdmlkZXJcbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxTdHJpY3RNb2RlPlxuICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgPC9TdHJpY3RNb2RlPixcbik7XG4iXX0=