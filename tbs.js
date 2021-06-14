var testimonialsContainer = document.querySelector('.testimonial-container')
var testimonial = document.querySelector('.testimonial')
var UserImage = document.querySelector('.user-image')
var username = document.querySelector('.username')
var role = document.querySelector('.role')


var testimonials = [
    {
        name : 'Miyah Myles',
        position : 'Marketing',
        photo: 'https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&w=300&h=300',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas quam aut fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta. fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta." ,
    },

    {
        name : 'John Cena',
        position : 'Software Engineer',
        photo: 'https://tse4.mm.bing.net/th?id=OIP.VUewYM7sKeuBsX74iEs4nwHaKi&pid=Api&P=0&w=300&h=300',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas quam aut fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta. fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta." ,
    },

    {
        name : 'Sasha Ho',
        position : 'Accountant',
        photo: 'https://tse4.mm.bing.net/th?id=OIP._NfD2gIbuqi67DsXhZOVugHaLG&pid=Api&P=0&w=300&h=300',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas quam aut fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta. fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta." ,
    },

    {
        name : 'Jonathan Nunfiez',
        position : 'Graphic Designer',
        photo: 'https://tse1.mm.bing.net/th?id=OIP.cIu6-WdfUR3uKMR3ustr2wHaKl&pid=Api&P=0&w=300&h=300',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas quam aut fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta. fuga facere ullam, sunt, nam saepe doloremque architecto aspernatur eius beatae debitis. Illum in omnis tenetur culpa soluta." ,
    },
];

let idx = 1

function updateTestimonal(){
    var { name, position, photo, text} = testimonials[idx]
     testimonial.innerHTML = text
     UserImage.src = photo
     username.innerHTML = name
     role.innerHTML = position

     idx++

     if(idx > testimonials.length - 1){
         idx = 0
     }
}

setInterval(updateTestimonal , 10000)


updateTestimonal()

