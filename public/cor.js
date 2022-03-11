function getRandomColor() {

    let defaultColors = [
        "0d6efd",
        "d63384",
        "dc3545",
        "fd7e14",
        "ffc107",
        "198754",
        "20c997",
        "0dcaf0",
        "fff",
        "0d6efd",
        "198754",
        "0dcaf0",
        "ffc107",
        "dc3545",
        "f8f9fa"
    ]

    return defaultColors[Math.floor(Math.random() * defaultColors.length)]
}