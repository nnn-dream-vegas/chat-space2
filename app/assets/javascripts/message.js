
$(function(){
    function buildHTML(message){


    var html = `<div class=message>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                      ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                      ${message.created_at}("%Y/%m/%d %H:%M")
                      </div>
                    </div>
                    <div class="lower-message">
                      ${ - if message.content.present? }
                      <p class="lower-message__content">
                      ${message.content}
                      </p>
                      ${ message.image.url}
                    </div>
                  </div> `
    return html;
  }



  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.content').append(html);
      $('.messages').append(html);
    })

     .fail(function(){
        alert('error');
      })
  })
     function scroll(){
      $('.content').animate({scrollTop: ('.content')[0].scrollHeight},'fast');
    }
  })


