// Callback haqida 
// Callbakc bu funksiyalar ishlash ketmaketligini belgilaydi

function like (book, callback){
    console.log(`i like ${book}`);
    callback();
};

like ("laughable", function(){
    console.log("i like computer");
});
