
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