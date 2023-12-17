let text = function(txt){
    document.getElementById("independence").innerText=txt;
}

setTimeout(function(){
    text(10);
    setTimeout(() => {
        text(9);
        setTimeout(() => {
            text(8);
            setTimeout(() => {
                text(7);
                setTimeout(() => {
                    text(6);
                    setTimeout(() => {
                        text(5);
                        setTimeout(() => {
                            text(4);
                            setTimeout(() => {
                                text(3);
                                setTimeout(() => {
                                    text(2);
                                    setTimeout(() => {
                                        text(1);
                                         setTimeout(() => {
                                                text("HAPPY INDEPENDENCE DAY!!!!!!");
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)

