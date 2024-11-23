function reviewData() {
    const form = document.getElementById('reservationForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    localStorage.setItem('reservationData', JSON.stringify(data));
    location.href = 'review.html';
}

function loadReviewData() {
    const data = JSON.parse(localStorage.getItem('reservationData'));
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = `
        <p>姓名：${data.name}</p>
        <p>聯絡電話：${data.phone}</p>
        <p>地址：${data.address}</p>
        <p>預約日期：${data.date}</p>
        <p>垃圾體積：${data.volume}</p>
        <p>垃圾種類：${data.type}</p>
    `;
}

function confirmData() {
    const data = JSON.parse(localStorage.getItem('reservationData'));
    const fileName = `reservation_${new Date().toISOString().slice(0, 10)}.xlsx`;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    location.href = 'success.html';
}

function loadSuccessData() {
    const data = JSON.parse(localStorage.getItem('reservationData'));
    const successContainer = document.getElementById('successContainer');
    successContainer.innerHTML = `
        <p>姓名：${data.name}</p>
        <p>聯絡電話：${data.phone}</p>
        <p>地址：${data.address}</p>
        <p>預約日期：${data.date}</p>
        <p>垃圾體積：${data.volume}</p>
        <p>垃圾種類：${data.type}</p>
    `;
}
