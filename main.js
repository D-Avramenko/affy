$(document).ready(function(){
    $('#go_to_news').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

    $('#go_to_about_us').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

     $('#go_to_other').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
     // Для вкладки новости
     // $('#Open').click(function(){
     // 	$('#Open').hide(1000);
     // 	$('#obz').css('display','inherit');
     // 	$('#News').animate({'max-height':'400px'},2500);
     // 	$('#News').append('<p id="Test">Скрыть</p>');
     // });
     // $('#Test').click(function(){
     // 	$('#Test').hide(1000);
     // 	$('#News').animate({'max-height':'258px'},2500);
     // });
     // Для вкладок вариант наведения NEWS
    $('#News').mouseenter(function(){
 		$('#News').animate({'max-height':'400px'},1000);
 		$('#obz').show(1000)
 	});
 	$('#News').mouseleave(function(){
 		$('#News').animate({'max-height':'258px'},1000)
 		$('#obz').hide(1000)
 		}); 
 	// Для вкладок вариант наведения About us
    $('#About_us').mouseenter(function(){
 		$('#About_us').animate({'max-height':'400px'},1000);
 		$('#obz1').show(1000)
 	});
 	$('#About_us').mouseleave(function(){
 		$('#About_us').animate({'max-height':'258px'},1000)
 		$('#obz1').hide(1000)
 		}); 
 	// Для вкладок вариант наведения Other
    $('#Other').mouseenter(function(){
 		$('#Other').animate({'max-height':'400px'},1000);
 		$('#obz2').show(1000)
 	});
 	$('#Other').mouseleave(function(){
 		$('#Other').animate({'max-height':'258px'},1000)
 		$('#obz2').hide(1000)
 		}); 
//sdasdasd
});