System.config({
  "meta": {
    "*.json": {
      "loader": "systemjs-json-plugin"
    },
    "*.jsx": {
      "babelOptions": {
        "react": true
      }
    }
  },
  "packages": {
    "pako": {
      "defaultExtension": "js",
      "main": "./index.js"
    },
    "app": {
      "main": "./main.jsx"
    },
    "@progress/kendo-react-animation": {
      "main": "dist/cdn/js/kendo-react-animation.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-buttons": {
      "main": "dist/cdn/js/kendo-react-buttons.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-dateinputs": {
      "main": "dist/cdn/js/kendo-react-dateinputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-intl": {
      "main": "dist/cdn/js/kendo-react-intl.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-dropdowns": {
      "main": "dist/cdn/js/kendo-react-dropdowns.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-data-query": {
      "main": "dist/cdn/js/kendo-data-query.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-inputs": {
      "main": "dist/cdn/js/kendo-react-inputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-grid": {
      "main": "dist/cdn/js/kendo-react-grid.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-popup": {
      "main": "dist/cdn/js/kendo-react-popup.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-layout": {
      "main": "dist/cdn/js/kendo-react-layout.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-ripple": {
      "main": "dist/cdn/js/kendo-react-ripple.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-date-math": {
      "main": "dist/cdn/js/kendo-date-math.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-dateinputs": {
      "main": "dist/cdn/js/kendo-angular-dateinputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-buttons": {
      "main": "dist/cdn/js/kendo-angular-buttons.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-inputs": {
      "main": "dist/cdn/js/kendo-angular-inputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-intl": {
      "main": "dist/cdn/js/kendo-angular-intl.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-l10n": {
      "main": "dist/cdn/js/kendo-angular-l10n.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-file-saver": {
      "main": "dist/npm/main.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-popup": {
      "main": "dist/cdn/js/kendo-angular-popup.js",
      "defaultExtension": "js"
    }
  },
  "bundles": {
    "https://www.telerik.com/kendo-react-ui/npm/node_modules/@progress/kendo-drawing/dist/systemjs/kendo-drawing.js": [
      "@progress/kendo-drawing",
      "@progress/kendo-drawing/*"
    ]
  },
  "map": {
    "app": "app",
    "systemjs-json-plugin": "https://unpkg.com/systemjs-plugin-json@0.3.0",
    "react": "https://unpkg.com/react@16.0.0/umd/react.production.min.js",
    "react-dom": "https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js",
    "react-dom/server": "https://unpkg.com/react-dom@16.0.0/umd/react-dom-server.browser.production.min.js",
    "redux": "https://unpkg.com/redux@3.7.2/dist/redux.min.js",
    "react-redux": "https://unpkg.com/react-redux@5.0.6/dist/react-redux.min.js",
    "react-router": "https://unpkg.com/react-router@4.2.0/umd/react-router.min.js",
    "react-router-dom": "https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.min.js",
    "react-transition-group": "https://unpkg.com/react-transition-group@2.2.1/dist/react-transition-group.min.js",
    "prop-types": "https://unpkg.com/prop-types@15.6.0/prop-types.js",
    "pako": "https://unpkg.com/pako@1.0.5",
    "classnames": "https://unpkg.com/classnames",
    "cldr-data": "https://www.telerik.com/kendo-react-ui/npm/node_modules/cldr-data",
    "tslib": "https://unpkg.com/tslib@1.7.1",
    "@telerik": "https://www.telerik.com/kendo-react-ui/npm/node_modules/@telerik",
    "@progress": "https://www.telerik.com/kendo-react-ui/npm/node_modules/@progress",
    "plugin-babel": "https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js",
    "systemjs-babel-build": "https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js"
  },
  "transpiler": "plugin-babel"
});