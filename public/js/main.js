$(function() {

  $('#m_btn').on('click', function() {
    $('#m_menu').sidebar('toggle');
  });
  
  $('#back').on('click', function() {
    $('#m_menu').sidebar('hide');
  });
  
  $('#m_menu a').on('click', function() {
    $('#m_menu').sidebar('hide');
  });

  $('.pop').popup({
    position : 'top center',
    variation: 'inverted'
  });

  $('#dim').dimmer({on: 'hover'});

  $('#dim').on('click', function() {
    $('.page.dimmer').dimmer('show');
  });

  $('.ui.rating').rating();

  $('.ui.accordion').accordion({
    duration: 200,
    onOpen: function() {
      var stepInd = $(this).attr('data-index');
      $('.ui.steps div').removeClass('active');
      $('.ui.steps div:eq('+ stepInd +')').addClass('active');
    },
    collapsible: false
  });

  $('.ui.steps div').on('click', function() {
      $('.ui.steps div').removeClass('active');
      $(this).addClass('active');
      var ind = $(this).index();
      $('.ui.accordion').accordion('open', ind);
  });

  $('.ui.checkbox').checkbox();

  $('.ui.dropdown').dropdown();

  $('.ui.form').form({
    name: {
      identifier  : 'fName',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    gender: {
      identifier  : 'gender',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please select a gender'
        }
      ]
    },
    username: {
      identifier : 'username',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a username'
        }
      ]
    },
    password: {
      identifier : 'password',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    },
    terms: {
      identifier : 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
      ]
    }
  });
});
