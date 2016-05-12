;(function (factory) {
    if (typeof define === "function" && define.amd) {
// AMD模式
        define([ "lib/jquery" ], factory);
    } else {
// 全局模式
        factory(jQuery);
    }
})(function ($) {
    var $body = $("body");
    var singleton = function(fn) {
        var result;
        return function() {
            return result || (result = fn.apply(this, arguments));
        }
    };
    var njs = {

        alert: function(str, func, config) {
            config = config || {};
            func = func || {};
            config.type = "alert";
            config.title = config.title || '提示';
            config.okText = config.okText || '确定';
            config.cancelText = config.cancelText || '取消';
            config.ok = func.ok || function() {return true;};
            config.cancel = func.cancel || function() {return true;};
            config.other = func.other || function() {};
            njs._show(str, config);
        },

        confirm: function(str, func, config) {
            config = config || {};
            func = func || {};
            config.type = "confirm";
            config.title = config.title || '提示';
            config.okText = config.okText || '确定';
            config.cancelText = config.cancelText || '取消';
            config.ok = func.ok || function() {return true;};
            config.cancel = func.cancel || function() {return true;};
            config.other = func.other || function() {};
            njs._show(str, config);
        },

        getMask: singleton(function() {
            return $body.append('<div class="N_dialog_mask"></div>').find(".N_dialog_mask");
        }),

        getDialog: singleton(function() {
            return $body.append('<div class="N_dialog"></div>').find(".N_dialog");
        }),

        _show: function(str, config) {
            var _html = '',
                $mask, $dialog;
            if(config.type == 'alert') {
                _html = '<div class="N_dialog_title">' + config.title + '</div>' +
                    '<div class="N_dialog_content">' + str + '</div>' +
                    '<div class="N_dialog_foot">' +
                    '<a href="javascript: void(0)" class="N_dialog_btn" data-type="ok">' + config.okText + '</a>' +
                    '</div>';
            } else {
                _html = '<div class="N_dialog_title">' + config.title + '</div>' +
                    '<div class="N_dialog_content">' + str + '</div>' +
                    '<div class="N_dialog_foot">' +
                    '<a href="javascript: void(0)" class="N_dialog_btn" data-type="ok">' + config.okText + '</a>' +
                    '<a href="javascript: void(0)" class="N_dialog_btn" data-type="cancel">' + config.cancelText + '</a>' +
                    '</div>';
            }

            $mask = njs.getMask();
            $dialog = njs.getDialog().html(_html);

            config.other();

            $(".N_dialog_btn").on('click', function(e) {
                var _this = $(this),
                    type = _this.attr("data-type");
                if (config[type]() == false) {
                    return false;
                } else {
                    $mask.hide();
                    $dialog.hide();
                }
            });

            $mask.show();
            $dialog.show();
        }
    };
    return (window.njs = njs);
});