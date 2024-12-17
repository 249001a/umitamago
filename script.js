$(document).ready(function () {
    // ハンバーガーボタンのクリックイベント
    $('.hamburger').on('click', function () {
        $(this).toggleClass('open'); // ボタンの✕と三本線を切り替え
        $('.side-menu').toggleClass('open'); // メニューのスライド表示
    });

    // メニューリンクをクリックしたらメニューを閉じる
    $('.side-menu a').on('click', function () {
        $('.hamburger').removeClass('open');
        $('.side-menu').removeClass('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded');
    // 必要に応じて追加のスクリプトをここに記述
});
