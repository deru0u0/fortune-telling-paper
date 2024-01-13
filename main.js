'use script';
{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=> {
        omikuji();
    },false);

    function omikuji() {
        const result = document.getElementById('result');
        const result_text = document.getElementById('result_text');
        const omikuji = [
            '大吉',
            '中吉',
            '小吉',
            '吉',
            '凶',
            '大凶',
        ];
        const omikujiText = [
            '大吉の場合の処理が入ります。結果がこちらに入ります。',
            '中吉の場合の処理が入ります。結果がこちらに入ります。',
            '小吉の場合の処理が入ります。結果がこちらに入ります。',
            '吉の場合の処理が入ります。結果がこちらに入ります。',
            '凶の場合の処理が入ります。結果がこちらに入ります。',
            '大凶の場合の処理が入ります。結果がこちらに入ります。',
        ];
        const r_math = Math.floor(Math.random()*omikuji.length);
        result.textContent = omikuji[r_math];
        result_text.textContent = omikujiText[r_math];
    }



}