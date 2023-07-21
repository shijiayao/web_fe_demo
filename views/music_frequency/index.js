let canvas_id = document.getElementById('music_canvas');
let canvas_ctx = canvas_id.getContext('2d');

const rectHeight = 255;
const width = 5;
const gap = 1;

let canvasWidth = (width + gap) * 256 - 1;

canvas_id.width = canvasWidth;
canvas_id.height = rectHeight;

function drawRect (array) {
    canvas_ctx.clearRect(0, 0, canvasWidth, rectHeight);

    for (let index = 0; index < array.length; index++) {
        let height = array[index];
        let x = index * (width + gap);
        let y = rectHeight - height;

        if (height >= rectHeight) {
            height = rectHeight;
            y = 0;
        }

        canvas_ctx.fillStyle = 'greenyellow';
        canvas_ctx.fillRect(x, y, width, height);
    }
}

let audio_id = document.getElementById('music_audio');
let analyser = null;
let isInit = false;
let audio_array = [];

audio_id.onplay = function () {
    const audioCtx = new AudioContext();
    // 创建一个音频分析节点
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    audio_array = new Uint8Array(analyser.frequencyBinCount);

    const source = audioCtx.createMediaElementSource(audio_id);
    source.connect(analyser);

    analyser.connect(audioCtx.destination);

    isInit = true;
};

function update () {
    requestAnimationFrame(update);
    if (isInit) {
        analyser.getByteFrequencyData(audio_array);
        drawRect(audio_array);
    }
}

update();
