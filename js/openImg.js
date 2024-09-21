function openImg(element) {
    const src = element.src;
    document.getElementById('gameImage').src = src;
    $('#imageModal').modal('show');
}