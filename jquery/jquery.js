$(document).ready(function(){
            //Oculta el menu al cargar la página
            $("#menu").hide();
            //mostramos el menú con click derecho
            $(document).bind("contextmenu", function(e){
                  $("#menu").css({'display':'block', 'left':e.pageX, 'top':e.pageY});
                  return false;
            });
            //cuando hagamos click, el menú desaparecerá
            $(document).click(function(e){
                  if(e.button == 0){
                        $("#menu").css("display", "none");
                  }
            });
            //si pulsamos escape, el menú desaparecerá
            $(document).keydown(function(e){
                  if(e.keyCode == 27){
                        $("#menu").css("display", "none");
                  }
            });

            //controlamos los botones del menú
            $("#menu").click(function(e){
                  // El switch utiliza los IDs de los <li> del menú
                  switch(e.target.id){
                        case "crear_proyecto":
                              alert("Proyecto creado!");
                              break;
                        case "crear_persona":
                              alert("Persona creada!");
                              break;}

            });


      });
