(function(){
    'use strict';
    console.log('running js');
    alert("Figure out how to access the interior of the box and find the clickable items within (not all items are clickable)");

    const lock=document.getElementById('lock');
    const exterior=document.getElementById('exterior');
    const quilt=document.querySelector('#quiltImage');
    const kwale=document.querySelector('#kwaleImage');
    const pillow=document.querySelector('#pillowImage');
    const lighter=document.querySelector('#lighterImage');
    const exit1=document.querySelector('#exit1');
    const exit2=document.querySelector('#exit2');
    const exit3=document.querySelector('#exit3');
    const exit4=document.querySelector('#exit4');

    lock.addEventListener('click',function(){
        exterior.className='hidden';
    });

    quilt.addEventListener('click',function(){
        document.getElementById('AP').className='showing';
        console.log('hi');
    });

    exit1.addEventListener('click',function(){
        document.getElementById('AP').className='hidden';
    });

    kwale.addEventListener('click',function(){
        document.getElementById('ET').className='showing';
        console.log('hi');
    });

    exit2.addEventListener('click',function(){
        document.getElementById('ET').className='hidden';
    });

    pillow.addEventListener('click',function(){
        document.getElementById('KD').className='showing';
        console.log('hi');
    });

    exit3.addEventListener('click',function(){
        document.getElementById('KD').className='hidden';
    });

    lighter.addEventListener('click',function(){
        document.getElementById('NN').className='showing';
        console.log('hi');
    });

    exit4.addEventListener('click',function(){
        document.getElementById('NN').className='hidden';
    });

})();