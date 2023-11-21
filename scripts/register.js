document.addEventListener("DOMContentLoaded", () => {
    const firstNextButton = document.querySelector('#next');

    firstNextButton.addEventListener("click", ()  => {
        const formPartOne = document.querySelector('#part-1');
        const formPartTwo = document.querySelector('#part-2');
        formPartOne.style.display = 'none';
        formPartTwo.style.display = 'flex';
    })
})