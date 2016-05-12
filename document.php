<?php include 'common/head.php' ?>
<link rel="stylesheet/less" href="static/css/document.less" />
<link rel="stylesheet/less" href="static/css/tool/njs.css" />
<?php include 'common/header.php' ?>
<div class="container document-container">
    <div class="row">
        <div class="side-nav">
            <h1>JavaScript <small>Design Pattern</small></h1>
            <p class="title">Catalog</p>
            <ul class="sidebar-menu">
                <?php
                $chapterArr = ['Singleton', 'Simple Factory'];
                for($i = 1; $i <= count($chapterArr); $i++) {
                    echo '<li><a class="chapter" href="javascript:void(0)" data-chapter="' . $i . '">' . $chapterArr[$i - 1] . '</a></li>';
                } ?>
            </ul>
        </div>
        <div class="col-md-offset-3">
            <div class="content" id="J_chapter">
                <table>
                    <tr>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>2</span>
                        </td>
                        <td>
                            <span>3</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<!--    <script type="text/javascript" src="static/js/lib/require.min.js" data-main="static/js/document"></script>-->
<?php include 'common/foot.php' ?>