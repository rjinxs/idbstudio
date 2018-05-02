(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.target = "browser";
// allowSyntheticDefaultImports
FuseBox.sdep = true;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
// import { hello } from "./hello"; const name: string = `Mr. Mike`;
// console.log(hello(name));
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var main_vue_1 = require("./component/main.vue");
var bootstrap_vue_1 = require("bootstrap-vue");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap-vue/dist/bootstrap-vue.min.css");
// Configure vue setting
vue_1.default.use(bootstrap_vue_1.default);
vue_1.default.config.keyCodes.f5 = 116;
// Initiate vue app
var vue_app = new vue_1.default({
    el: '#app',
    render: function (h) { return h(main_vue_1.default); }
});
//# sourceMappingURL=index.js.map
});
___scope___.file("component/main.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-266cf365'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('Menu'),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('DbInfo')],1),_vm._v(" "),_c('div',{staticClass:"col"},[_c('QueryExecutor'),_vm._v(" "),_c('DbList')],1)])],1)},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var db_list_vue_1 = require("./db_list.vue");
var menu_vue_1 = require("./menu.vue");
var db_info_vue_1 = require("./db_info.vue");
var query_executor_vue_1 = require("./query_executor.vue");
var common_var_1 = require("../common_var");
ace.config.set("workerPath", "/assets/scripts");
ace.config.set("themePath", "/assets/scripts");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.catchEvent();
        return _this;
    }
    Main.prototype.catchEvent = function () {
        common_var_1.vue_event.$on("on_error", function (errMessage) {
            alert(errMessage);
        });
    };
    Main = __decorate([
        vue_property_decorator_1.Component({
            components: {
                DbList: db_list_vue_1.default,
                Menu: menu_vue_1.default,
                DbInfo: db_info_vue_1.default,
                QueryExecutor: query_executor_vue_1.default
            }
        })
    ], Main);
    return Main;
}(vue_1.default));
exports.default = Main;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-266cf365')) {
            api.createRecord('data-v-266cf365', module.exports.default);
          }
        }
      
});
___scope___.file("component/db_list.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-1fec8355'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{ref:"db_list",attrs:{"id":"modal1","title":"Bootstrap-Vue"}},[_c('b-form',[_c('b-form-group',{attrs:{"id":"exampleInputGroup1","label":"Email address:","label-for":"selectDb"}},[_c('b-form-select',{staticClass:"mb-3",attrs:{"id":"selectDb","options":_vm.dbList},model:{value:(_vm.selectedDb),callback:function ($$v) {_vm.selectedDb=$$v},expression:"selectedDb"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"w-100",attrs:{"slot":"modal-footer"},slot:"modal-footer"},[_c('b-btn',{staticClass:"float-left",attrs:{"variant":"primary"},on:{"click":_vm.setSelectedDb}},[_vm._v("\n         Create Database\n       ")]),_vm._v(" "),_c('b-btn',{staticClass:"float-right",attrs:{"variant":"primary"},on:{"click":_vm.setSelectedDb}},[_vm._v("\n         Open\n       ")])],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var main_service_1 = require("../service/main_service");
var demo_service_1 = require("../service/demo_service");
var common_var_1 = require("../common_var");
var DbList = /** @class */ (function (_super) {
    __extends(DbList, _super);
    function DbList() {
        var _this = _super.call(this) || this;
        _this.dbList = [];
        _this.selectedDb = "null";
        new demo_service_1.DemoService().createDemoDataBase();
        return _this;
    }
    // Lifecycle hook
    DbList.prototype.mounted = function () {
        var _this = this;
        //give some time to create the database
        setTimeout(function () {
            new main_service_1.MainService()
                .getDbList()
                .then(function (list) {
                _this.updateDbList(list);
                _this.$refs.db_list.show();
            })
                .catch(function (err) {
                console.log(err);
                alert(err._message);
            });
        }, 2000);
    };
    DbList.prototype.updateDbList = function (list) {
        var temp_list = [
            {
                text: "--Select Database--",
                value: "null"
            }
        ];
        list.forEach(function (val) {
            temp_list.push({
                text: val,
                value: val
            });
        });
        this.dbList = temp_list;
    };
    DbList.prototype.setSelectedDb = function () {
        var _this = this;
        new main_service_1.MainService().openDb(this.selectedDb, function () {
            _this.$refs.db_list.hide();
            common_var_1.vue_event.$emit("db_selected", _this.$data._selectedDb);
        }, function (err) {
            alert(err._message);
        });
    };
    DbList = __decorate([
        vue_property_decorator_1.Component
    ], DbList);
    return DbList;
}(vue_1.default));
exports.default = DbList;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

require("default/components.css")
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-1fec8355')) {
            api.createRecord('data-v-1fec8355', module.exports.default);
          }
        }
      
});
___scope___.file("service/main_service.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_service_1 = require("./base_service");
var MainService = /** @class */ (function (_super) {
    __extends(MainService, _super);
    function MainService() {
        var _this = _super.call(this) || this;
        _this._dbName = "Demo";
        return _this;
    }
    MainService.prototype.openDb = function (dbName, onSuccess, onErr) {
        return base_service_1.idb_con.openDb(dbName, onSuccess, onErr);
    };
    MainService.prototype.getDbInfo = function (dbName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getDbSchema(dbName, function (schema) {
                resolve(schema);
            });
        });
    };
    MainService.prototype.executeQry = function (api, option) {
        var startTime = performance.now();
        return new Promise(function (resolve, reject) {
            base_service_1.idb_con[api](option).then(function (qryResult) {
                var idbResult = {
                    timeTaken: (performance.now() - startTime) / 1000,
                    result: qryResult
                };
                resolve(idbResult);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return MainService;
}(base_service_1.BaseService));
exports.MainService = MainService;
//# sourceMappingURL=main_service.js.map
});
___scope___.file("service/base_service.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idb_con = new JsStore.Instance();
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.getDbList = function () {
        return JsStore.getDbList();
    };
    BaseService.prototype.isDbExist = function (dbName) {
        return JsStore.isDbExist(dbName);
    };
    BaseService.prototype.getDbSchema = function (dbName, onSuccess) {
        JsStore.getDbSchema(dbName, onSuccess);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base_service.js.map
});
___scope___.file("service/demo_service.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_service_1 = require("./base_service");
var DemoService = /** @class */ (function (_super) {
    __extends(DemoService, _super);
    function DemoService() {
        var _this = _super.call(this) || this;
        _this._dbName = "Demo";
        return _this;
    }
    DemoService.prototype.createDemoDataBase = function () {
        var _this = this;
        this
            .isDbExist(this._dbName)
            .then(function (exist) {
            if (exist === false) {
                base_service_1.idb_con.createDb(_this.getDbSchema());
            }
        })
            .catch(function (err) {
            alert(err._message);
        });
    };
    DemoService.prototype.getDbSchema = function () {
        var customers = {
            Name: 'Customers',
            Columns: [
                {
                    Name: "CustomerID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "CustomerName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "ContactName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Address",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "City",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "PostalCode",
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Country",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }
            ]
        };
        var categories = {
            Name: 'Categories',
            Columns: [
                {
                    Name: "CategoryID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "CategoryName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Description",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }
            ]
        };
        var employees = {
            Name: 'Employees',
            Columns: [
                {
                    Name: "EmployeeID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "LastName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "BirthDate",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Photo",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Notes",
                    DataType: JsStore.Data_Type.String
                }
            ]
        };
        var order_details = {
            Name: 'OrderDetails',
            Columns: [
                {
                    Name: "OrderDetailID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "OrderID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }, {
                    Name: "ProductID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }, {
                    Name: "Quantity",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }
            ]
        };
        var orders = {
            Name: 'Orders',
            Columns: [
                {
                    Name: "OrderID",
                    PrimaryKey: true
                }, {
                    Name: "CustomerID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }, {
                    Name: "EmployeeID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }, {
                    Name: "OrderDate",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "ShipperID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }
            ]
        };
        var products = {
            Name: 'Products',
            Columns: [
                {
                    Name: "ProductID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "ProductName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "SupplierID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }, {
                    Name: "CategoryID",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }, {
                    Name: "Unit",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Price",
                    NotNull: true,
                    DataType: JsStore.Data_Type.Number
                }
            ]
        };
        var shippers = {
            Name: 'Shippers',
            Columns: [
                {
                    Name: "ShipperID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "ShipperName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Phone",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }
            ]
        };
        var suppliers = {
            Name: 'Suppliers',
            Columns: [
                {
                    Name: "SupplierID",
                    PrimaryKey: true,
                    AutoIncrement: true
                }, {
                    Name: "SupplierName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "ContactName",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Address",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "City",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "PostalCode",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Country",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }, {
                    Name: "Phone",
                    NotNull: true,
                    DataType: JsStore.Data_Type.String
                }
            ]
        };
        var dataBase = {
            Name: this._dbName,
            Tables: [
                customers,
                categories,
                employees,
                order_details,
                orders,
                products,
                shippers,
                suppliers
            ]
        };
        return dataBase;
    };
    return DemoService;
}(base_service_1.BaseService));
exports.DemoService = DemoService;
//# sourceMappingURL=demo_service.js.map
});
___scope___.file("common_var.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.vue_event = new vue_1.default();
//# sourceMappingURL=common_var.js.map
});
___scope___.file("component/menu.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-c33a269d'}
Object.assign(_options, {_scopeId: 'data-v-c33a269d'})
Object.assign(_options, {
        _scopeId: "data-v-c33a269d",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row",attrs:{"id":"divMenu"}},[_c('div',{staticClass:"col-sm-1"},[_vm._v("\n    "+_vm._s(_vm.$data._dbName)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"col-sm-1"},[_c('a',{attrs:{"href":"#"},on:{"click":_vm.createNewQry}},[_vm._v("New Query")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-1"},[_c('span',{on:{"click":_vm.executeQry}},[_vm._v("Execute "),_c('i',{staticClass:"fas fa-play"})])])])},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var common_var_1 = require("../common_var");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super.call(this) || this;
        _this._dbName = "";
        _this.catchEvent();
        return _this;
    }
    Menu.prototype.createNewQry = function () {
        common_var_1.vue_event.$emit("open_editor");
    };
    Menu.prototype.setDbName = function (dbName) {
        this.$data._dbName = dbName;
    };
    Menu.prototype.catchEvent = function () {
        var _this = this;
        common_var_1.vue_event.$on("db_selected", function (dbName) {
            console.log(dbName);
            _this.setDbName(dbName);
        });
    };
    Menu.prototype.executeQry = function () {
        common_var_1.vue_event.$emit("execute_qry");
    };
    Menu = __decorate([
        vue_property_decorator_1.Component
    ], Menu);
    return Menu;
}(vue_1.default));
exports.default = Menu;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

require("default/components.css")
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-c33a269d')) {
            api.createRecord('data-v-c33a269d', module.exports.default);
          }
        }
      
});
___scope___.file("component/db_info.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-926b6219'}
Object.assign(_options, {_scopeId: 'data-v-926b6219'})
Object.assign(_options, {
        _scopeId: "data-v-926b6219",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"db-name"},[_vm._v(_vm._s(_vm.$data._dbInfo._name))]),_vm._v(" "),_c('table',[_c('thead'),_vm._v(" "),_c('tbody',_vm._l((_vm.$data._dbInfo._tables),function(table){return _c('tr',{key:table._name},[_c('td',[_c('span',{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:(table._name),expression:"table._name"}],staticClass:"table-name"},[_vm._v(_vm._s(table._name)+" "),_c('i',{staticClass:"fas fa-plus"})]),_vm._v(" "),_c('b-collapse',{staticClass:"ml-4",attrs:{"id":table._name}},_vm._l((table._columns),function(column){return _c('div',{key:column._name,staticClass:"column-name"},[_c('span',{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:(column._name),expression:"column._name"}]},[_vm._v(_vm._s(column._name)+" "),_c('i',{staticClass:"fas fa-plus-square"})]),_vm._v(" "),_c('b-collapse',{staticClass:"ml-4",attrs:{"id":column._name}},[_c('div',[_vm._v("Primary Key : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._primaryKey))])]),_vm._v(" "),_c('div',[_vm._v("Auto Increment : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._autoIncrement))])]),_vm._v(" "),_c('div',[_vm._v("Not Null: "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._notNull))])]),_vm._v(" "),_c('div',[_vm._v("Data Type : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._dataType))])]),_vm._v(" "),_c('div',[_vm._v("Default : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._default))])]),_vm._v(" "),_c('div',[_vm._v("Unique : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._unique))])]),_vm._v(" "),_c('div',[_vm._v("Multi Entry : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._multiEntry))])]),_vm._v(" "),_c('div',[_vm._v("Enable Search : "),_c('span',{staticClass:"column-schema"},[_vm._v(_vm._s(column._enableSearch))])])])],1)}))],1)])})),_vm._v(" "),_c('tfoot')])])},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var main_service_1 = require("../service/main_service");
var common_var_1 = require("../common_var");
var DbInfo = /** @class */ (function (_super) {
    __extends(DbInfo, _super);
    function DbInfo() {
        var _this = _super.call(this) || this;
        _this._dbInfo = {
            _tables: []
        };
        _this.catchEvent();
        return _this;
    }
    DbInfo.prototype.getDbInfo = function (dbName) {
        var _this = this;
        new main_service_1.MainService().getDbInfo(dbName).then(function (result) {
            console.log(result);
            _this.updateDbInfo(result);
        });
    };
    DbInfo.prototype.updateDbInfo = function (value) {
        this.$data._dbInfo = value;
    };
    DbInfo.prototype.catchEvent = function () {
        var _this = this;
        common_var_1.vue_event.$on("db_selected", function (dbName) {
            _this.getDbInfo(dbName);
        });
    };
    DbInfo = __decorate([
        vue_property_decorator_1.Component
    ], DbInfo);
    return DbInfo;
}(vue_1.default));
exports.default = DbInfo;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

require("default/components.css")
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-926b6219')) {
            api.createRecord('data-v-926b6219', module.exports.default);
          }
        }
      
});
___scope___.file("component/query_executor.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-3466dbfc'}
Object.assign(_options, {_scopeId: 'data-v-3466dbfc'})
Object.assign(_options, {
        _scopeId: "data-v-3466dbfc",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"divQueryExecutor"}},[_c('div',{attrs:{"id":"divButtonContainer"}},[_c('b-button-group',{attrs:{"size":"mg"}},[_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.createNewTab}},[_vm._v("\n           New Query "),_c('i',{staticClass:"fas fa-plus-circle"})]),_vm._v(" "),_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.createNewTab}},[_vm._v("\n           Open "),_c('i',{staticClass:"fas fa-folder-open"})]),_vm._v(" "),_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.createNewTab}},[_vm._v("\n           Save "),_c('i',{staticClass:"fas fa-save"})]),_vm._v(" "),_c('b-button',{attrs:{"variant":"success"},on:{"click":_vm.executeQry}},[_vm._v("\n           Execute "),_c('i',{staticClass:"fas fa-play"})])],1)],1),_vm._v(" "),_c('b-card',{attrs:{"no-body":""}},[_c('b-tabs',{attrs:{"card":""}},_vm._l((_vm.$data.tabCount),function(item){return _c('b-tab',{key:'tab'+item,attrs:{"active":"","title":'Query '+item}},[_c('Editor',{attrs:{"id":'editor' + item}})],1)}))],1),_vm._v(" "),_c('QueryResult'),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.resultCount)?_c('div',{attrs:{"id":"divResultInfo"}},[_c('table',[_c('tr',[_c('td',[_c('b',[_vm._v("No of Record :")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resultCount))]),_vm._v(" "),_c('b',{staticClass:"seperator"},[_vm._v("|")]),_vm._v(" "),_c('b',[_vm._v("Time Taken :")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.timeTaken)+" sec.")])]),_vm._v(" "),_c('td',[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){_vm.resultCount=''}}})])])])]):_vm._e()])],1)},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var common_var_1 = require("../common_var");
var editor_vue_1 = require("./editor.vue");
var qry_result_vue_1 = require("./qry_result.vue");
var main_service_1 = require("../service/main_service");
var query_checker_1 = require("../helpers/query_checker");
var QueryExecutor = /** @class */ (function (_super) {
    __extends(QueryExecutor, _super);
    function QueryExecutor() {
        var _this = _super.call(this) || this;
        _this.tabCount = 0;
        _this.timeTaken = "";
        _this.resultCount = "";
        _this.catchEvents();
        return _this;
    }
    QueryExecutor.prototype.createNewTab = function () {
        this.$data.tabCount++;
    };
    QueryExecutor.prototype.executeQry = function () {
        common_var_1.vue_event.$emit("get_qry");
    };
    QueryExecutor.prototype.showResult = function (qry) {
        var _this = this;
        var query_checker = new query_checker_1.QueryChecker(qry);
        if (query_checker.isQryValid()) {
            new main_service_1.MainService()
                .executeQry(query_checker._api, query_checker._option)
                .then(function (qryResult) {
                _this.resultCount = qryResult.result.length;
                _this.timeTaken = qryResult.timeTaken;
                // console.log(result);
                common_var_1.vue_event.$emit("on_qry_result", qryResult.result);
            })
                .catch(function (err) {
                common_var_1.vue_event.$emit("on_error", err._message);
            });
        }
        else {
            common_var_1.vue_event.$emit("on_error", query_checker._errMessage);
        }
    };
    QueryExecutor.prototype.catchEvents = function () {
        common_var_1.vue_event.$on("db_selected", this.createNewTab);
        common_var_1.vue_event.$on("set_qry", this.showResult);
    };
    QueryExecutor = __decorate([
        vue_property_decorator_1.Component({
            components: {
                Editor: editor_vue_1.default,
                QueryResult: qry_result_vue_1.default
            }
        })
    ], QueryExecutor);
    return QueryExecutor;
}(vue_1.default));
exports.default = QueryExecutor;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

require("default/components.css")
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-3466dbfc')) {
            api.createRecord('data-v-3466dbfc', module.exports.default);
          }
        }
      
});
___scope___.file("component/editor.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-6ec4738f'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"idb-editor",attrs:{"id":_vm.id}})},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var common_var_1 = require("../common_var");
var dom_helper_1 = require("../helpers/dom_helper");
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super.call(this) || this;
        _this.catchEvent();
        return _this;
    }
    Editor.prototype.createEditor = function () {
        this.editor = ace.edit(this.id);
        this.editor.setTheme("ace/theme/eclipse");
        this.editor.session.setMode("ace/mode/javascript");
    };
    Editor.prototype.mounted = function () {
        this.createEditor();
    };
    Editor.prototype.getQry = function () {
        var $ = new dom_helper_1.DomHelper();
        if (!$.isHidden($.parent($.getById(this.id)))) {
            common_var_1.vue_event.$emit("set_qry", this.editor.getValue());
        }
    };
    Editor.prototype.catchEvent = function () {
        common_var_1.vue_event.$on("execute_qry", this.executeJsStoreQry);
        common_var_1.vue_event.$on("get_qry", this.getQry);
    };
    Editor.prototype.executeJsStoreQry = function () {
    };
    Editor = __decorate([
        vue_property_decorator_1.Component({
            props: {
                id: String
            }
        })
    ], Editor);
    return Editor;
}(vue_1.default));
exports.default = Editor;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

require("default/components.css")
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-6ec4738f')) {
            api.createRecord('data-v-6ec4738f', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/dom_helper.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomHelper = /** @class */ (function () {
    function DomHelper() {
    }
    DomHelper.prototype.getById = function (id) {
        return document.getElementById(id);
    };
    DomHelper.prototype.parent = function (el) {
        return el.parentElement;
    };
    DomHelper.prototype.isHidden = function (el) {
        return el.offsetParent === null;
    };
    return DomHelper;
}());
exports.DomHelper = DomHelper;
//# sourceMappingURL=dom_helper.js.map
});
___scope___.file("component/qry_result.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-c760ee62'}
Object.assign(_options, {_scopeId: 'data-v-c760ee62'})
Object.assign(_options, {
        _scopeId: "data-v-c760ee62",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"divResult"}},[_c('table',{staticClass:"table",domProps:{"innerHTML":_vm._s(_vm.resultInnerHtml)}})])},
        staticRenderFns: []
      })
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var common_var_1 = require("../common_var");
var util_1 = require("../util");
var QueryResult = /** @class */ (function (_super) {
    __extends(QueryResult, _super);
    function QueryResult() {
        var _this = _super.call(this) || this;
        _this.resultInnerHtml = "";
        _this.catchEvents();
        return _this;
    }
    QueryResult.prototype.printResult = function (result) {
        console.log(result);
        var resultType = util_1.Util.getType(result);
        switch (resultType) {
            case JsStore.Data_Type.Array:
                var rowsLength = result.length, htmlString = "<tr>", props = [];
                for (var prop in result[0]) {
                    props.push(prop);
                    htmlString += "<th>" + prop + "</th>";
                }
                htmlString += "</tr>";
                var Width = 100 / props.length;
                for (var i = 0; i < rowsLength; i++) {
                    var tempHtml = "<tr>";
                    for (var j = 0; j < props.length; j++) {
                        if (result[0] && result[0][0]) {
                            tempHtml += "<td>" + result[i][props[j]] + "</td>";
                        }
                        else {
                            tempHtml +=
                                "<td style=width:" +
                                    Width +
                                    "%>" +
                                    JSON.stringify(result[i][props[j]]) +
                                    "</td>";
                        }
                    }
                    tempHtml += "</tr>";
                    htmlString += tempHtml;
                }
                this.resultInnerHtml = htmlString;
                // $("#recordCount")
                //   .show()
                //   .text("No of Record : " + result.length);
                break;
            case JsStore.Data_Type.Object:
                result = JSON.stringify(result);
            case JsStore.Data_Type.String:
            case JsStore.Data_Type.Number:
                this.resultInnerHtml = result;
                break;
            default:
                alert("invalid result");
        }
    };
    QueryResult.prototype.catchEvents = function () {
        common_var_1.vue_event.$on("on_qry_result", this.printResult);
    };
    QueryResult = __decorate([
        vue_property_decorator_1.Component
    ], QueryResult);
    return QueryResult;
}(vue_1.default));
exports.default = QueryResult;
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

require("default/components.css")
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          if (api && !api.isRecorded('data-v-c760ee62')) {
            api.createRecord('data-v-c760ee62', module.exports.default);
          }
        }
      
});
___scope___.file("util.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getType = function (value) {
        if (value === null) {
            return JsStore.Data_Type.Null;
        }
        var type = typeof value;
        switch (type) {
            case 'object':
                if (Array.isArray(value)) {
                    return JsStore.Data_Type.Array;
                }
            default:
                return type;
        }
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map
});
___scope___.file("helpers/query_checker.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryChecker = /** @class */ (function () {
    function QueryChecker(query) {
        this._errMessage = "";
        this._api = "";
        this._query = query;
    }
    QueryChecker.prototype.isQryValid = function () {
        var api;
        var option = "";
        var not_allowed_keywords = ["Instance", "then", "catch"];
        not_allowed_keywords.every(function (item) {
            if (this._query.indexOf(item) >= 0) {
                this._errMessage = "keyword: '" + item + "' is not allowed, only write code for api call";
                return false;
            }
            return true;
        }, this);
        if (this._errMessage.length === 0) {
            api = this
                ._query
                .substring(0, this._query.indexOf("("));
            var allowed_api = [
                "select",
                "insert",
                "remove",
                "update",
                "isDbExist",
                "clear",
                "count",
                "dropDb",
                "bulkInsert",
                "exportJson"
            ];
            if (allowed_api.indexOf(api) >= 0) {
                option = this
                    ._query
                    .substring(this._query.indexOf("(") + 1, this._query.lastIndexOf(")"));
                eval("option =" + option);
                switch (api) {
                    case "select":
                    case "insert":
                    case "remove":
                    case "count":
                    case "update":
                    case "bulkInsert":
                    case "exportJson":
                        if (typeof option !== "object") {
                            this._errMessage = "invalid syntax, please take a look at doc for api - '" + api + "'";
                        }
                        break;
                    case "clear":
                        if (typeof option !== "string") {
                            this._errMessage = "invalid syntax, please take a look at doc for api - '" + api + "'";
                        }
                        break;
                    case "isDbExist":
                        if (typeof option !== "string" || typeof option !== "object") {
                            this._errMessage = "invalid syntax, please take a look at doc for api - '" + api + "'";
                        }
                        break;
                }
            }
            else if (api.length > 0) {
                this._errMessage = "invalid api - '" + api + "'";
            }
            else {
                this._errMessage = "invalid query";
            }
            if (this._errMessage.length === 0) {
                this._option = option;
                this._api = api;
                return true;
            }
            else {
                return false;
            }
        }
    };
    return QueryChecker;
}());
exports.QueryChecker = QueryChecker;
//# sourceMappingURL=query_checker.js.map
});
___scope___.file("components.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components.css", "#selectDb option {\n  text-align: center; }\n\n/*# sourceMappingURL=style.css.map */\n\n#divMenu[data-v-c33a269d] {\n  background-color: #d4d4f3;\n  height: 50px;\n}\n#divMenu div a[data-v-c33a269d] {\n    color: white;\n}\n\n#selectDb option[data-v-926b6219] {\n  text-align: center;\n}\n.table-name[data-v-926b6219] {\n  font-size: 20px;\n  font-family: monospace;\n}\n.column-name[data-v-926b6219] {\n  font-size: 15px;\n}\n.column-schema[data-v-926b6219] {\n  color: #372ae5;\n}\ntable[data-v-926b6219] {\n  margin-left: 15px;\n  border-right: 5px solid #777adb;\n  display: block;\n  width: 100%;\n}\n.db-name[data-v-926b6219] {\n  background-color: #ec6f42;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  padding: 10px;\n}\n\n#divQueryExecutor[data-v-3466dbfc] {\n  margin-top: 10px;\n  background-color: #f1f1f1;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n#divResultInfo[data-v-3466dbfc] {\n  height: 50px;\n  position: absolute;\n  bottom: 0px;\n  background: inherit;\n  z-index: 100;\n  width: 97%;\n}\ntable[data-v-3466dbfc] {\n  height: inherit;\n  width: 100%;\n}\ntable tr td[data-v-3466dbfc] {\n  padding-left: 20px;\n}\ntable tr td[data-v-3466dbfc]:last-child {\n  text-align: right;\n  padding-right: 20px;\n  padding-left: 50px;\n}\n.fade-enter-active[data-v-3466dbfc], .fade-leave-active[data-v-3466dbfc] {\n  transition: opacity .5s;\n  bottom: 0px;\n}\n.fade-enter[data-v-3466dbfc], .fade-leave-to[data-v-3466dbfc] {\n  opacity: 0;\n  bottom: -100px;\n}\n.seperator[data-v-3466dbfc] {\n  padding: 0px 10px;\n}\n.idb-editor {\n  width: 100%;\n  min-height: 200px; }\n\n/*# sourceMappingURL=style.sass.map */\n\n#divResult[data-v-c760ee62] {\n  min-height: 200px;\n  width: 99%;\n  left: 5px;\n  position: relative;\n  right: 5px;\n  background-color: white;\n}\n#divResult table tr td[data-v-c760ee62] {\n    text-align: center;\n}");
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('page-reload', function (data) {
        return window.location.reload();
    });
    client.on('page-hmr', function (data) {
        FuseBox.flush();
        FuseBox.dynamic(data.path, data.content);
        if (FuseBox.mainFile) {
            try {
                FuseBox.import(FuseBox.mainFile);
            }
            catch (e) {
                if (typeof e === 'string') {
                    if (/not found/.test(e)) {
                        return window.location.reload();
                    }
                }
                console.error(e);
            }
        }
    });
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
var process = FuseBox.import('process');


        if (process.env.NODE_ENV !== "production") {
          var api = FuseBox.import('vue-hot-reload-api');
          var Vue = FuseBox.import('vue');

          api.install(Vue);

          FuseBox.addPlugin({
            hmrUpdate: function (data) {
              var componentWildcardPath = '~/' + data.path.substr(0, data.path.lastIndexOf('/') + 1) + '*.vue';
              var isComponentStyling = (data.type === "css" && !!FuseBox.import(componentWildcardPath));

              if (data.type === "js" && /.vue$/.test(data.path) || isComponentStyling) {
                var fusePath = '~/' + data.path;

                FuseBox.flush();

                FuseBox.flush(function (file) {
                  return file === data.path;
                });

                FuseBox.dynamic(data.path, data.content);

                if (!isComponentStyling) {
                  var component = FuseBox.import(fusePath).default;
                  api.reload(component._vueModuleId||component.options._vueModuleId, component);
                }

                return true;
              }
            }
          });
        }
        
FuseBox.import("fusebox-hot-reload").connect(4000, "", false)

FuseBox.import("default/index.js");
FuseBox.main("default/index.js");
})
((function(__root__){
if (__root__["FuseBox"]) return __root__["FuseBox"];
var $isServiceWorker = typeof ServiceWorkerGlobalScope !== "undefined";
var $isWebWorker = typeof WorkerGlobalScope !== "undefined";
var $isBrowser = typeof window !== "undefined" && typeof window.navigator !== "undefined" || $isWebWorker || $isServiceWorker;
var g = $isBrowser ? (($isWebWorker || $isServiceWorker) ? {} : window) : global;
if ($isBrowser) {
    g["global"] = ($isWebWorker || $isServiceWorker) ? {} : window;
}
__root__ = !$isBrowser || typeof __fbx__dnm__ !== "undefined" ? module.exports : __root__;
var $fsbx = $isBrowser ? ($isWebWorker || $isServiceWorker) ? {} : (window["__fsbx__"] = window["__fsbx__"] || {})
    : g["$fsbx"] = g["$fsbx"] || {};
if (!$isBrowser) {
    g["require"] = require;
}
var $packages = $fsbx.p = $fsbx.p || {};
var $events = $fsbx.e = $fsbx.e || {};
function $getNodeModuleName(name) {
    var n = name.charCodeAt(0);
    var s = name.charCodeAt(1);
    if (!$isBrowser && s === 58) {
        return;
    }
    if (n >= 97 && n <= 122 || n === 64) {
        if (n === 64) {
            var s_1 = name.split("/");
            var target = s_1.splice(2, s_1.length).join("/");
            return [s_1[0] + "/" + s_1[1], target || undefined];
        }
        var index = name.indexOf("/");
        if (index === -1) {
            return [name];
        }
        var first = name.substring(0, index);
        var second = name.substring(index + 1);
        return [first, second];
    }
}
;
function $getDir(filePath) {
    return filePath.substring(0, filePath.lastIndexOf("/")) || "./";
}
;
function $pathJoin() {
    var string = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        string[_i] = arguments[_i];
    }
    var parts = [];
    for (var i = 0, l = arguments.length; i < l; i++) {
        parts = parts.concat(arguments[i].split("/"));
    }
    var newParts = [];
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (!part || part === ".")
            continue;
        if (part === "..") {
            newParts.pop();
        }
        else {
            newParts.push(part);
        }
    }
    if (parts[0] === "")
        newParts.unshift("");
    return newParts.join("/") || (newParts.length ? "/" : ".");
}
;
function $ensureExtension(name) {
    var matched = name.match(/\.(\w{1,})$/);
    if (matched) {
        if (!matched[1]) {
            return name + ".js";
        }
        return name;
    }
    return name + ".js";
}
;
function $loadURL(url) {
    if ($isBrowser) {
        var d = document;
        var head = d.getElementsByTagName("head")[0];
        var target;
        if (/\.css$/.test(url)) {
            target = d.createElement("link");
            target.rel = "stylesheet";
            target.type = "text/css";
            target.href = url;
        }
        else {
            target = d.createElement("script");
            target.type = "text/javascript";
            target.src = url;
            target.async = true;
        }
        head.insertBefore(target, head.firstChild);
    }
}
;
function $loopObjKey(obj, func) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            func(key, obj[key]);
        }
    }
}
;
function $serverRequire(path) {
    return { server: require(path) };
}
;
function $getRef(name, o) {
    var basePath = o.path || "./";
    var pkgName = o.pkg || "default";
    var nodeModule = $getNodeModuleName(name);
    if (nodeModule) {
        basePath = "./";
        pkgName = nodeModule[0];
        if (o.v && o.v[pkgName]) {
            pkgName = pkgName + "@" + o.v[pkgName];
        }
        name = nodeModule[1];
    }
    if (name) {
        if (name.charCodeAt(0) === 126) {
            name = name.slice(2, name.length);
            basePath = "./";
        }
        else {
            if (!$isBrowser && (name.charCodeAt(0) === 47 || name.charCodeAt(1) === 58)) {
                return $serverRequire(name);
            }
        }
    }
    var pkg = $packages[pkgName];
    if (!pkg) {
        if ($isBrowser && FuseBox.target !== "electron") {
            throw "Package not found " + pkgName;
        }
        else {
            return $serverRequire(pkgName + (name ? "/" + name : ""));
        }
    }
    name = name ? name : "./" + pkg.s.entry;
    var filePath = $pathJoin(basePath, name);
    var validPath = $ensureExtension(filePath);
    var file = pkg.f[validPath];
    var wildcard;
    if (!file && validPath.indexOf("*") > -1) {
        wildcard = validPath;
    }
    if (!file && !wildcard) {
        validPath = $pathJoin(filePath, "/", "index.js");
        file = pkg.f[validPath];
        if (!file && filePath === ".") {
            validPath = pkg.s && pkg.s.entry || "index.js";
            file = pkg.f[validPath];
        }
        if (!file) {
            validPath = filePath + ".js";
            file = pkg.f[validPath];
        }
        if (!file) {
            file = pkg.f[filePath + ".jsx"];
        }
        if (!file) {
            validPath = filePath + "/index.jsx";
            file = pkg.f[validPath];
        }
    }
    return {
        file: file,
        wildcard: wildcard,
        pkgName: pkgName,
        versions: pkg.v,
        filePath: filePath,
        validPath: validPath,
    };
}
;
function $async(file, cb, o) {
    if (o === void 0) { o = {}; }
    if ($isBrowser) {
        if (o && o.ajaxed === file) {
            return console.error(file, 'does not provide a module');
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    var contentType = xmlhttp.getResponseHeader("Content-Type");
                    var content = xmlhttp.responseText;
                    if (/json/.test(contentType)) {
                        content = "module.exports = " + content;
                    }
                    else {
                        if (!/javascript/.test(contentType)) {
                            content = "module.exports = " + JSON.stringify(content);
                        }
                    }
                    var normalized = $pathJoin("./", file);
                    FuseBox.dynamic(normalized, content);
                    cb(FuseBox.import(file, { ajaxed: file }));
                }
                else {
                    console.error(file, 'not found on request');
                    cb(undefined);
                }
            }
        };
        xmlhttp.open("GET", file, true);
        xmlhttp.send();
    }
    else {
        if (/\.(js|json)$/.test(file))
            return cb(g["require"](file));
        return cb("");
    }
}
;
function $trigger(name, args) {
    var e = $events[name];
    if (e) {
        for (var i in e) {
            var res = e[i].apply(null, args);
            if (res === false) {
                return false;
            }
        }
        ;
    }
}
;
function syntheticDefaultExportPolyfill(input) {
    return input !== null && ['function', 'object', 'array']
        .indexOf(typeof input) > -1 && input.default === undefined ?
        Object.isFrozen(input) ? input.default = input : Object.defineProperty(input, "default", { value: input, writable: true, enumerable: false }) : void 0;
}
function $import(name, o) {
    if (o === void 0) { o = {}; }
    if (name.charCodeAt(4) === 58 || name.charCodeAt(5) === 58) {
        return $loadURL(name);
    }
    var ref = $getRef(name, o);
    if (ref.server) {
        return ref.server;
    }
    var file = ref.file;
    if (ref.wildcard) {
        var safeRegEx = new RegExp(ref.wildcard
            .replace(/\*/g, "@")
            .replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            .replace(/@@/g, ".*")
            .replace(/@/g, "[a-z0-9$_-]+"), "i");
        var pkg_1 = $packages[ref.pkgName];
        if (pkg_1) {
            var batch = {};
            for (var n in pkg_1.f) {
                if (safeRegEx.test(n)) {
                    batch[n] = $import(ref.pkgName + "/" + n);
                }
            }
            return batch;
        }
    }
    if (!file) {
        var asyncMode_1 = typeof o === "function";
        var processStopped = $trigger("async", [name, o]);
        if (processStopped === false) {
            return;
        }
        return $async(name, function (result) { return asyncMode_1 ? o(result) : null; }, o);
    }
    var pkg = ref.pkgName;
    if (file.locals && file.locals.module)
        return file.locals.module.exports;
    var locals = file.locals = {};
    var path = $getDir(ref.validPath);
    locals.exports = {};
    locals.module = { exports: locals.exports };
    locals.require = function (name, optionalCallback) {
        var result = $import(name, {
            pkg: pkg,
            path: path,
            v: ref.versions,
        });
        if (FuseBox["sdep"]) {
            syntheticDefaultExportPolyfill(result);
        }
        return result;
    };
    if ($isBrowser || !g["require"].main) {
        locals.require.main = { filename: "./", paths: [] };
    }
    else {
        locals.require.main = g["require"].main;
    }
    var args = [locals.module.exports, locals.require, locals.module, ref.validPath, path, pkg];
    $trigger("before-import", args);
    file.fn.apply(args[0], args);
    $trigger("after-import", args);
    return locals.module.exports;
}
;
var FuseBox = (function () {
    function FuseBox() {
    }
    FuseBox.global = function (key, obj) {
        if (obj === undefined)
            return g[key];
        g[key] = obj;
    };
    FuseBox.import = function (name, o) {
        return $import(name, o);
    };
    FuseBox.on = function (n, fn) {
        $events[n] = $events[n] || [];
        $events[n].push(fn);
    };
    FuseBox.exists = function (path) {
        try {
            var ref = $getRef(path, {});
            return ref.file !== undefined;
        }
        catch (err) {
            return false;
        }
    };
    FuseBox.remove = function (path) {
        var ref = $getRef(path, {});
        var pkg = $packages[ref.pkgName];
        if (pkg && pkg.f[ref.validPath]) {
            delete pkg.f[ref.validPath];
        }
    };
    FuseBox.main = function (name) {
        this.mainFile = name;
        return FuseBox.import(name, {});
    };
    FuseBox.expose = function (obj) {
        var _loop_1 = function (k) {
            var alias = obj[k].alias;
            var xp = $import(obj[k].pkg);
            if (alias === "*") {
                $loopObjKey(xp, function (exportKey, value) { return __root__[exportKey] = value; });
            }
            else if (typeof alias === "object") {
                $loopObjKey(alias, function (exportKey, value) { return __root__[value] = xp[exportKey]; });
            }
            else {
                __root__[alias] = xp;
            }
        };
        for (var k in obj) {
            _loop_1(k);
        }
    };
    FuseBox.dynamic = function (path, str, opts) {
        this.pkg(opts && opts.pkg || "default", {}, function (___scope___) {
            ___scope___.file(path, function (exports, require, module, __filename, __dirname) {
                var res = new Function("__fbx__dnm__", "exports", "require", "module", "__filename", "__dirname", "__root__", str);
                res(true, exports, require, module, __filename, __dirname, __root__);
            });
        });
    };
    FuseBox.flush = function (shouldFlush) {
        var def = $packages["default"];
        for (var fileName in def.f) {
            if (!shouldFlush || shouldFlush(fileName)) {
                delete def.f[fileName].locals;
            }
        }
    };
    FuseBox.pkg = function (name, v, fn) {
        if ($packages[name])
            return fn($packages[name].s);
        var pkg = $packages[name] = {};
        pkg.f = {};
        pkg.v = v;
        pkg.s = {
            file: function (name, fn) { return pkg.f[name] = { fn: fn }; },
        };
        return fn(pkg.s);
    };
    FuseBox.addPlugin = function (plugin) {
        this.plugins.push(plugin);
    };
    FuseBox.packages = $packages;
    FuseBox.isBrowser = $isBrowser;
    FuseBox.isServer = !$isBrowser;
    FuseBox.plugins = [];
    return FuseBox;
}());
if (!$isBrowser) {
    g["FuseBox"] = FuseBox;
}

return __root__["FuseBox"] = FuseBox; } )(this))