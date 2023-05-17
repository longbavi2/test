var listItem = document.querySelectorAll("#listItem li a");
document.addEventListener("scroll", () => {
    listItem.forEach(item => {
        var box = document.querySelector(item.getAttribute("href"))
        var kichThuoc = box.getBoundingClientRect();
        if (kichThuoc.top <= 0 && kichThuoc.top + kichThuoc.height > 0) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
})