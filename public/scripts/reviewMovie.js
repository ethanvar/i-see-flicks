function render(review){
    var html = review.nameR + " " + review.dateR + " " + review.bodyR + " ";
    $('#containerReview').append(html);
}

$(document).ready(function() {
    var review =[];
    for (let i = 0; i < review .length;i++) {
        render(review [i]);
    }
    $('#addReview').click(function(){
        var addReview = {
            "nameR": $('#nameReview').val(),
            "dateR": $('#dateReview').val(),
            "bodyR": $('#bodyReview').val()
        };
        review.push(addReview);
        render(addReview);
    });
});
