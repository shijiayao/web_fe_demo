const canvas_box = document.querySelector('.canvas-box');
const canvas_id = document.getElementById('canvas_id');

let DPR = devicePixelRatio;
DPR = 1;

const width = window.innerWidth * DPR;
const height = window.innerHeight * DPR;

const fontSize = 20 * DPR;

canvas_box.style.width = `${width}px`;
canvas_box.style.height = `${height}px`;

canvas_id.width = width;
canvas_id.height = height;

const canvas_ctx = canvas_id.getContext('2d');

// 列宽
const columnWidth = fontSize;

// 列数
const columnCount = Math.floor(width / columnWidth);

// 每一列下一个文字是第几个文字
const nextChar = new Array(columnCount).fill(0);

// 画一行文字
function draw () {
    canvas_ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    canvas_ctx.fillRect(0, 0, width, height);

    for (let index = 0; index < columnCount; index++) {
        const x = index * columnWidth;
        const y = (nextChar[index] + 1) * fontSize;

        canvas_ctx.fillStyle = getRandomColor();
        canvas_ctx.font = `${fontSize}px "Roboto Mono"`;
        canvas_ctx.fillText(getRandomChar(), x, y);

        if (y > height && Math.random() > 0.99) {
            nextChar[index] = 0;
        } else {
            ++nextChar[index];
        }
    }
}

setInterval(draw, 30);

// 随机颜色
function getRandomColor () {
    const rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    return rainbowArray[Math.floor(Math.random() * rainbowArray.length)];
}

// 随机字符
function getRandomChar () {
    const charString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-/=';

    return charString[Math.floor(Math.random() * charString.length)];
}
