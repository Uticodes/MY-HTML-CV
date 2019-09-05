// console.log('it works')

// $(document).ready(function () {
//     $('.submit').click(function (event) {

//         console.log('Clicked button')


//         var name = $('.name').val()
//         var email = $('.email').val()
//         var title = $('.title').val()
//         var message = $('.message').val()
//         var statusElm = $('.status')
//         statusElm.empty()

//         if (name.length < 1) {
//             alert('Name field cannot be empty')
//         }

//         else if (name.length > 1 && name.length <= 4) {
//             alert('Name must not be less than four letters')
//         }

//         else {
//             event.preventDefault()
//             statusElm.append('Valid Name')
//         }

//         if (email.length > 2 && email.includes('@') && email.includes('.')) {
//             statusElm.append('Invalid email')
//         }
//         else if (email.length < 1) {
//             event.preventDefault()
//             alert('Email field cannot be empty')
//         }
//         else {
//             event.preventDefault()
//             alert('Invalid email')
//         }

//         if (title.length >= 1) {
//             statusElm.append('Invalid title')
//         }
//         else {
//             event.preventDefault()
//             alert('Title field cannot not empty')
//         }

//         if (message.length >= 20) {
//             statusElm.append('<div> Invalid message</div>')
//         } else {
//             event.preventDefault()
//             alert('Message must not be less than 20 letters')
//         }
//     })
// })

//     function goTo(selector, timeout, cb) {
//         let $el = $(selector);
//         if (!$el[0]) return;
//         let $par = $el.parent();
//         if ($par.is("body")) $par = $("html, body");
//         setTimeout(() => {
//             $par.stop().animate({scrollTop: $el.offset().top}, 1000, cb && cb.call($el[0]));
//         }, timeout || 0);
//         }

//         $("[href^='#']").on("click", function(e) {
//         e.preventDefault();
//         goTo($(this).attr("href"));
//         });