require(['lib/config', 'lib/jquery', 'tool/njs', 'tool/design'], function (config, $, njs, disign){
    var $chapter = $(".chapter");

    init();

    function init() {
        getChapter(1);
        njs.alert(
            '2222',
            {
                ok: function() {
                },
                cancel: function() {
                    alert("no");
                    return false;
                }
            },
            {
                title: '确定吗',
                okText: '是的',
                cancelText: '不是'
            }
        );
        _bind();
    }

    function _bind() {
        $chapter.on('click', function(e) {
            e.preventDefault();
            var _this = $(this),
                href = _this.attr("data-chapter");
            getChapter(href);
        });
        $(".title").on('click', function() {
            njs.confirm(
                '1',
                {
                    ok: function() {
                        alert("yes");
                    },
                    cancel: function() {
                        alert("no");
                        return false;
                    }
                },
                {
                    title: '确定吗',
                    okText: '是的',
                    cancelText: '不是'
                }
            );
        });
    }

    function getChapter(chapter) {
        $.ajax({
            url: '/designPattern/chapter.php?chapter=' + chapter,
            type: 'get',
            dataType: 'html',
            success: function(html) {
                $("#J_chapter").html(html);
            },
            error: function() {

            }
        });
    }
});