function render(review){
    const html = review.nameR + " " + review.dateR + " " + review.bodyR + " ";
    $('#containerReview').append(html);
}

$(document).ready(function() {
    const review =[];
    for (let i = 0; i < review .length;i++) {
        render(review [i]);
    }
    $('#addReview').click(function(){
        const addReview = {"nameR": $('#nameReview').val(), "dateR": $('#dateReview').val(), "bodyR": $('#bodyReview').val()};
        review.push(addReview);
        render(addReview);
    });
});
