$(window).on('load', function () { $(".preloader .item-wrapper").delay(1000).animate({ top: "-100%" }, 1000, "easeInQuart"); $(".preloader").delay(1000).fadeOut(1000); }); $(window).on("scroll", function () { $(this).scrollTop() > 1e3 ? $(".back2top-btn").show() : $(".back2top-btn").hide(); }), $(window).on("scroll", function () { $(this).scrollTop() > 80 ? $(".navbar-part").addClass("navbar-fixed") : $(".navbar-part").removeClass("navbar-fixed"); }), $(".navbar-toggle").on("click", function () { $(".navbar-overlay").addClass("active"), $(".cencel").on("click", function () { $(".navbar-overlay").removeClass("active"); }); }), $(function () { $(".navbar-dropdown a").click(function () { $(this).next().toggle(), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show()); }); }); var date = new Date().getFullYear(); $('#date').html(date);


function adicionarAtivo() {
    // Obter a data e hora atual
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDay(); // Retorna um valor de 0 (domingo) a 6 (sábado)
    var horaAtual = dataAtual.getHours();

  
    // Verificar se a hora e o dia correspondem aos critérios desejados e adicionar a classe "active"
    if (diaAtual === 0) {
        document.getElementById('domingo').classList.add('active');
        document.getElementById('domingo-').classList.add('active');
        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 6 && horaAtual < 9){
            var hr = document.getElementById('6D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 11){
            var hr = document.getElementById('9D');
            hr.insertAdjacentHTML("beforeend", '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 11 && horaAtual < 13){
            var hr = document.getElementById('11D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 13 && horaAtual < 15){
            var hr = document.getElementById('13D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 22){
            var hr = document.getElementById('20D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 22){
            var hr = document.getElementById('22D');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
              
                      
        }
    
    else if (diaAtual === 1) {
        document.getElementById('segunda').classList.add('active');
        document.getElementById('segunda-').classList.add('active');

        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 5 && horaAtual < 9){
            var hr = document.getElementById('6SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 12){
            var hr = document.getElementById('9SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 12 && horaAtual < 14){
            var hr = document.getElementById('12SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 14 && horaAtual < 15){
            var hr = document.getElementById('14SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 21){
            var hr = document.getElementById('20SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 21 && horaAtual < 22){
            var hr = document.getElementById('21SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 22){
            var hr = document.getElementById('22SF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
              
        
    }
    else if (diaAtual === 2) {
        document.getElementById('terca').classList.add('active');
        document.getElementById('terca-').classList.add('active');

        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 6 && horaAtual < 9){
            var hr = document.getElementById('6TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 12){
            var hr = document.getElementById('9TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 12 && horaAtual < 13){
            var hr = document.getElementById('12TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 13 && horaAtual < 14){
            var hr = document.getElementById('13TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 14 && horaAtual < 15){
            var hr = document.getElementById('14TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 21){
            var hr = document.getElementById('20TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 21 && horaAtual < 22){
            var hr = document.getElementById('21TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 22 && horaAtual < 23){
            var hr = document.getElementById('22TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 23){
            var hr = document.getElementById('23TF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
              
        
    }
    else if (diaAtual === 3) {
        document.getElementById('quarta').classList.add('active');
        document.getElementById('quarta-').classList.add('active');
        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 6 && horaAtual < 9){
            var hr = document.getElementById('6QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 11){
            var hr = document.getElementById('9QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 12 && horaAtual < 13){
            var hr = document.getElementById('12QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 14 && horaAtual < 15){
            var hr = document.getElementById('14QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 22){
            var hr = document.getElementById('20QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
    
        else if (horaAtual >= 22){
            var hr = document.getElementById('22QF');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }


    }
    else if (diaAtual === 4) {
        document.getElementById('quinta').classList.add('active');
        document.getElementById('quinta-').classList.add('active');

        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 6 && horaAtual < 9){
            var hr = document.getElementById('6QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 11){
            var hr = document.getElementById('9QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 12 && horaAtual < 14){
            var hr = document.getElementById('12QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 14 && horaAtual < 15){
            var hr = document.getElementById('14QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 22){
            var hr = document.getElementById('20QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
      
        else if (horaAtual >= 22){
            var hr = document.getElementById('22QI');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        
    }
    else if (diaAtual === 5) {
        document.getElementById('sexta').classList.add('active');
        document.getElementById('sexta-').classList.add('active');

        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 6 && horaAtual < 9){
            var hr = document.getElementById('6SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 12){
            var hr = document.getElementById('9SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 12 && horaAtual < 14){
            var hr = document.getElementById('12SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }       
        else if (horaAtual >= 14 && horaAtual < 15){
            var hr = document.getElementById('14SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 22){
            var hr = document.getElementById('20SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 22){
            var hr = document.getElementById('22SX');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
    }
    else if (diaAtual === 6) {
        document.getElementById('sabado').classList.add('active');
        document.getElementById('sabado-').classList.add('active');
        
        if (horaAtual >= 0 && horaAtual < 2){
            var hr = document.getElementById('24S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        if (horaAtual >= 2 && horaAtual < 4){
            var hr = document.getElementById('2S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 4 && horaAtual < 6){
            var hr = document.getElementById('4S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 6 && horaAtual < 9){
            var hr = document.getElementById('6S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 9 && horaAtual < 11){
            var hr = document.getElementById('9S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 11 && horaAtual < 13){
            var hr = document.getElementById('11S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 13 && horaAtual < 15){
            var hr = document.getElementById('13S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 15 && horaAtual < 18){
            var hr = document.getElementById('15S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 18 && horaAtual < 20){
            var hr = document.getElementById('18S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 20 && horaAtual < 22){
            var hr = document.getElementById('20S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
        else if (horaAtual >= 22){
            var hr = document.getElementById('22S');
            hr.insertAdjacentHTML('beforeend', '  <img width=25 height=30 src="https://i.postimg.cc/sDS32h4t/sound.gif" alt="sound">');
        }
              
        }
    }
  
  
  // Chamar a função quando o documento estiver pronto

document.addEventListener('DOMContentLoaded', adicionarAtivo);
