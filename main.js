// Run when the webpage is loaded
window.addEventListener('load', () => {
    Swal.fire({
        title: 'play music:)',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            resolveFetch().then(animationTimeline());
        } else {
            resolveFetch().then(animationTimeline());
        }
    })
})
