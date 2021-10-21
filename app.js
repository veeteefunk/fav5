const form = document.getElementById('form1');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');

class Album {
    constructor(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
}

form.addEventListener('submit', function(e) {

    const first = document.getElementById('metal');
    const second = document.getElementById('pop');
    const third = document.getElementById('classical');

    const album = new Album(first, second, third);

    console.log(metal.value);

    ans1.textContent = `${album.first.value}`;
    ans2.textContent = `${album.second.value}`;
    ans3.textContent = `${album.third.value}`;

    e.preventDefault();
});
