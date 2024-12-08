(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();


  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });


  // Date and time picker
  $('.date').datetimepicker({
    format: 'L'
  });
  $('.time').datetimepicker({
    format: 'HH:mm',
    disabledHours: [21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });


  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 10000,
    animateOut: 'fadeOutLeft',
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ]
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });
  const doctorsByDepartment = {
    kardiyoloji: [
      "Prof Dr. Ayşe Demir",
      "Prof Dr. Mehmet Yılmaz",
      "Dr. Ayşe Kara",
      "Dr. Emre Şahin"
    ],
    noroloji: [
      "Prof Dr. Ceren Aydın",
      "Prof Dr. Mustafa Demir",
      "Doç Dr. Zeynep Kaya",
      "Uzm. Dr. Emre Kaya"
    ],
    gögüs: [
      "Prof. Dr. Elif Nur Demir",
      "Prof. Dr. Mehmet Özgür Yılmaz",
      "Uzm. Dr. Ayşe Ceren Şahin",
	  "Doç. Dr. Ali Rıza Kaya"
    ],
    ortopedi: [
      "Prof. Dr. Zeynep Arslan",
      "Prof. Dr. Ahmet Can Demir",
      "Uzm. Dr. Ayşe Yıldırım",
	  "Doç. Dr. Murat Kaya"
    ],
    dis: [
      "Prof. Dr. Ayşe Nur Korkmaz",
      "Prof. Dr. Hasan Cem Yıldız",
      "Uzm. Dr. Elif Sena Kaya",
	  "Doç. Dr. Mehmet Ali Çelik"
    ],
    laboratuvar: [
      "Prof. Dr. Ali Rıza Demir",
      "Doç. Dr. Serkan Yılmaz",
      "Prof. Dr. Elif Hande Arslan",
	  "Uzm. Dr. Zeynep Şahin"
    ]
  };

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const doctorSelect = document.getElementById('doctor');
    const departmentSelect = document.getElementById('department'); // Randevu formunda varsa

    // Doktor seçeneklerini temizleme fonksiyonu
    function clearDoctorOptions() {
      doctorSelect.innerHTML = '<option selected>Doktor Seçin</option>';
    }

    // Doktor seçeneklerini doldurma fonksiyonu
    function populateDoctors(department) {
      if (doctorsByDepartment[department]) {
        doctorsByDepartment[department].forEach(doctor => {
          const option = document.createElement('option');
          option.value = doctor;
          option.textContent = doctor;
          doctorSelect.appendChild(option);
        });
      }
    }

    // Eğer data-department varsa, otomatik doldur
    const predefinedDepartment = form.getAttribute('data-department');
    if (predefinedDepartment) {
      clearDoctorOptions();
      populateDoctors(predefinedDepartment);
    }

    // Eğer bir bölüm seçimi varsa, kullanıcı seçimine göre doldur
    if (departmentSelect) {
      departmentSelect.addEventListener('change', function () {
        clearDoctorOptions();
        const selectedDepartment = this.value;
        if (selectedDepartment !== 'Bölüm Seçin') {
          populateDoctors(selectedDepartment);
        }
      });
    }
  });


})(jQuery);
