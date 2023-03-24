(function(){
    'use strict';
    console.log('running js');

    const lock=document.getElementById('lock');
    const keychain=document.getElementById('keychain');
    const exterior=document.getElementById('exterior');
    const quilt=document.querySelector('#quiltImage');
    const kwale=document.querySelector('#kwaleImage');
    const pillow=document.querySelector('#pillowImage');
    const lighter=document.querySelector('#lighterImage');
    const back=document.getElementById('back');
    const exit1=document.querySelector('#exit1');
    const exit2=document.querySelector('#exit2');
    const exit3=document.querySelector('#exit3');
    const exit4=document.querySelector('#exit4');

    const unlock=new Audio('audio/unlock.wav');
    const keys=new Audio('audio/keys.mp3');
    const pop=new Audio('audio/pop.mp3');

    lock.addEventListener('click',function(){
        unlock.play();
        exterior.className='hidden';
    });

    keychain.addEventListener('mouseover',function(){
        keys.play();
    });

    quilt.addEventListener('click',function(){
        document.getElementById('AP').className='showing';
        pop.play();
        console.log('hi');
    });

    exit1.addEventListener('click',function(){
        document.getElementById('AP').className='hidden';
    });

    kwale.addEventListener('click',function(){
        document.getElementById('ET').className='showing';
        pop.play();
        console.log('hi');
    });

    exit2.addEventListener('click',function(){
        document.getElementById('ET').className='hidden';
    });

    pillow.addEventListener('click',function(){
        document.getElementById('KD').className='showing';
        pop.play();
        console.log('hi');
    });

    exit3.addEventListener('click',function(){
        document.getElementById('KD').className='hidden';
    });

    lighter.addEventListener('click',function(){
        document.getElementById('NN').className='showing';
        pop.play();
        console.log('hi');
    });

    exit4.addEventListener('click',function(){
        document.getElementById('NN').className='hidden';
    });

    back.addEventListener('click',function(){
        unlock.play();
        exterior.className='showing';
    });

})();