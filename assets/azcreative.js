
// run kembang api


    var audio1 = document.getElementById("myAudio1");
    var audio2 = document.getElementById("myAudio2");

    function playAudio(a) {
    	if (a == 1) {
    		audio1.play();
    	}else{
    		audio2.play();
    	}
    }

    function playOnLoad() {
        playAudio(audio1);
    }



function changeTextEverySecond() {
        var textElement = document.getElementById("textId");
          var texts = [
        	"Gak Kerasa yaa kita udah di penghujung tahun 2024",
        	"Tahun 2024 akan berlalu, berganti tahun menjadi 2025",
        	"Ayoo Zaii kita Sambut tahun 2025 dengan semangat Zaii  ",
        	'Happy New Year 2025'
        ]
        var currentIndex = 0;

        function changeText() {
            if (currentIndex < texts.length) {
                var currentTextElement = textElement.querySelector("h2");

                // Tambahkan class "fadeOut" untuk animasi fade-out
                currentTextElement.classList.add("fadeOut");

                // Hapus class "fadeIn" untuk menghindari efek fade-in pada teks yang sama
                currentTextElement.classList.remove("fadeIn");

                setTimeout(function () {
                    currentTextElement.textContent = texts[currentIndex];

                    // Hapus class "fadeOut" untuk menghindari efek fade-out pada teks yang sama
                    currentTextElement.classList.remove("fadeOut");

                    // Tambahkan class "fadeIn" untuk animasi fade-in
                    currentTextElement.classList.add("fadeIn");

                    currentIndex++;
                    setTimeout(changeText, 3900);

                    if (currentIndex === texts.length) {
						    tampilkantombol_happynewyear();
						}


                }, 1000);
            }
        }

        // Panggil fungsi changeText untuk pertama kali
        changeText();
    }


 function tampilkantombol_happynewyear() {


 	//alert('tess')
 	document.getElementById("tombol").style.display = 'inline-block';
 	 document.getElementById("tombol").classList.add("bounce");


 }


 // ketika tombol di klik

 function open_finish(){
 	playAudio(2)
 	 var video = document.getElementById("video-background");
  video.play();
 	document.getElementById("tombol").style.display = 'none';



 	document.getElementById("typing_text").style.display = 'block';



  const text = `Hai, Luzaini.

Selamat Tahun Baru 2025! Aku harap tahun ini bawa banyak kebahagiaan dan hal-hal baik buat kamu.

Jujur, di momen tahun baru ini, aku gak bisa berhenti mikirin semua yang pernah kita lewati bareng. Banyak banget kenangan yang masih tersimpan rapi di hati, dan aku sadar, kamu adalah bagian penting dalam hidupku yang gak pernah benar-benar hilang.

Aku tahu mungkin gak gampang buat balik kayak dulu, tapi aku pengin banget bisa punya kesempatan lagi buat perbaiki semuanya. Aku masih sayang, masih berharap, dan aku tahu itu gak mudah, tapi aku gak mau nyerah gitu aja.

Kalau kamu masih punya ruang buat aku di hatimu, aku bakal berusaha sebaik mungkin buat jadi yang kamu butuhin. Tapi apa pun yang kamu pilih, aku tetap doain yang terbaik buat kamu. Semoga tahun ini jadi tahun yang luar biasa buat kita, entah bersama atau masing-masing.

Hilman Ramdani`;

    const typingTextElement = document.getElementById('typing_text');
    
	    
	 
	     typeWriter(text, typingTextElement);
 	
 }


 function typeWriter(text, element) {
        let i = 0;
        const speed = 50; // Kecepatan penulisan (ms)

        function type() {
            if (i < text.length) {
                 element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }



function openvideobg(){
    alert('asda')
}


