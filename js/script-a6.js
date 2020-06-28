
$("#my-progress-bar").width("0%")

const btnone = $('.btn-j-one');
const btntwo = $('.btn-j-two');
const btnthree = $('.btn-j-three');

btnone.click(function () {
    $("#my-progress-bar").width("1%")
})

btntwo.click(function () {
    $("#my-progress-bar").width("3%")
})

btnthree.click(function () {
    $("#my-progress-bar").width("7%")
})