const slideinleft = document.querySelectorAll('.slideleft');
const slideinup = document.querySelectorAll('.slideup')

//for fade in left
for (const user1 of slideinleft) {
    window.addEventListener('scroll', () => {
        console.log(user1);
        var pos = user1.getBoundingClientRect().top;
        var screenpos = window.innerHeight / 1.2;
        // var revpos = user.getBoundingClientRect();
        if (pos < screenpos) {
            user1.classList.add('slideInLeft');
        }
        if (screenpos < pos) {
            user1.classList.remove('slideInLeft');
        }
    }
    )

};

//for slide in up
for (const user of slideinup) {
    window.addEventListener('scroll', () => {
        console.log(user);
        var pos = user.getBoundingClientRect().top;
        var screenpos = window.innerHeight / 1.2;
        // var revpos = user.getBoundingClientRect();
        if (pos < screenpos) {
            user.classList.add('slideInUp');
        }
        if (screenpos < pos) {
            user.classList.remove('slideInUp');
        }
    }
    )

};