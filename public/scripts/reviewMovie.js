<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
function render(data){
    var html = data.name + data.date + data.body;
    $('#commentContainer').append(html);
}

$(document).ready(function() {
    var comment =[{"name":"a", "date":"10 Apr, 2020", "body":"hi"}];
    for (let i = 0; i<comment.length;i++) {
        render(comment[i]);
    }
    
    $('#addComment').click(function(){
        var addObj = {
            "name": $('#nameR').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val()
        };
        comment.push(addObj);
        render(addObj);
    });
});
