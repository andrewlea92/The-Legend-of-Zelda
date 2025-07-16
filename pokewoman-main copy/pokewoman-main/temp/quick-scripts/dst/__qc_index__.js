
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/GlobalData');
require('./assets/script/MapManager');
require('./assets/script/NewScript');
require('./assets/script/bag');
require('./assets/script/bag_back');
require('./assets/script/bags2');
require('./assets/script/battle_bag');
require('./assets/script/battle_man');
require('./assets/script/block_sprite');
require('./assets/script/camera');
require('./assets/script/camera_inif');
require('./assets/script/change');
require('./assets/script/enemy');
require('./assets/script/gamemanager');
require('./assets/script/gift');
require('./assets/script/handleSetting');
require('./assets/script/leaderboard');
require('./assets/script/libaoma');
require('./assets/script/login');
require('./assets/script/man');
require('./assets/script/man2');
require('./assets/script/man_end');
require('./assets/script/man_map3');
require('./assets/script/me');
require('./assets/script/moyan');
require('./assets/script/no');
require('./assets/script/pa');
require('./assets/script/register');
require('./assets/script/runaway');
require('./assets/script/select_dong');
require('./assets/script/setting');
require('./assets/script/universe');
require('./assets/script/universe_select');
require('./assets/script/yuan');
require('./assets/script/yuan_back');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();