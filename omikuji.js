'use script';
{
    const omikujiObj = {
        title:"OMIKUJI",
        omikujiItem: [
            '大吉',
            '中吉',
            '小吉',
            '吉',
            '凶',
            '大凶',
        ],
        omikuji: function() {
            const resultItem = document.getElementById('result');
            const r_math = Math.floor(Math.random()*this.omikujiItem.length);
            resultItem.textContent = this.omikujiItem[r_math];
        },

        detailMessageButton: function() {
            const omikujiDetailMessageButton = document.getElementById('omikujiButton');
            omikujiDetailMessageButton.value = 'もう一度占う';
            omikujiDetailMessageButton.id = 'detailMessageButton';
        }
    }
    const h1 = document.querySelector('h1');
    h1.textContent = omikujiObj.title;
    const omikujiButton = document.getElementById('omikujiButton');

    omikujiButton.addEventListener('click', (e)=> {
        if ( e.target.id === "omikujiButton" ) {
            omikujiObj.omikuji();
            omikujiObj.detailMessageButton();
        } else {
            location.reload();
        }
    },false);
    
}