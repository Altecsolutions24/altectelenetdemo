const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// const observer_2 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) =>{
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('about1');
//         }else{
//             entry.target.classList.remove('about1');
//         }
//     });
// });

// const hiddenElements_about = document.querySelectorAll('.hidden_about');
// hiddenElements_about.forEach((el) => observer.observe(el));


const observer1 = new IntersectionObserver((entries1) => {
    entries1.forEach((entry1) =>{
        console.log(entry1);
        if(entry1.isIntersecting){
            entry1.target.classList.add('about1');
        }else{
            entry1.target.classList.remove('about1');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.hidden_about');
hiddenElements1.forEach((el) => observer1.observe(el));