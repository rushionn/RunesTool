document.getElementById("imageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表單提交的默認行為

    var inputData = document.getElementById("inputData").value;

    // 在 canvas 上繪製文本
    var canvas = document.getElementById("outputCanvas");
    var context = canvas.getContext("2d");
    
    // 設定 canvas 大小
    canvas.width = 400;
    canvas.height = 200;

    // 清空 canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // 繪製文本
    context.font = "20px Arial";
    context.fillStyle = "black"; // 設定文字顏色
    context.fillText(inputData, 50, 100); // 在 (50, 100) 位置顯示文本
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    var canvas = document.getElementById("outputCanvas");
    var link = document.createElement("a");
    link.download = "generated_image.png";
    link.href = canvas.toDataURL(); // 將 canvas 轉換為圖片的 URL
    link.click(); // 自動觸發下載
});