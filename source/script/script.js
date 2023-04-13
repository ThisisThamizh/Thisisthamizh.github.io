
const card = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        })
    },
    { 
        threshold: 0.7,
    }
)

card.forEach(card => {
    observer.observe(card);
})
if ('IntersectionObserver' in window) {
    console.log('IntersectionObserver is supported');
}
else {
    console.log('IntersectionObserver is not supported');
}



