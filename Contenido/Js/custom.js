/**
 * Created by dev10 on 11/20/2015.
 */


//<--! Eventos de la pantalla-->

// var support = Hammer.prefixed(document.body.style, 'touchAction');
//document.getElementById(support ? 'native' : 'no-native').className += ' show';

var touchActions = ['auto', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'];
Hammer.each(touchActions, function(touchAction) {
    var el = document.getElementById(touchAction.replace(" ", "-"));

    var mc = Hammer(el, {
        touchAction: touchAction
    });
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    mc.get('pinch').set({ enable: true });
    mc.get('rotate').set({ enable: true });

    mc.on("pan swipe rotate pinch tap doubletap press", function(ev) {
        if(ev.deltaX<=0 && ev.type=='pan')
        //el.textContent = ev.type +" "+ el.textContent;

            console.log(ev.deltaX);
    });
});

//<--! Eventos de la pantalla-->