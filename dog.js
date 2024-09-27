document.addEventListener('DOMContentLoaded', () => {
    const dogImage = document.getElementById('dog-image');
    const newImageBtn = document.getElementById('new-image-btn');

    // Function to fetch and display a random dog image
    const fetchDogImage = async () => {
        try {
            // loading text or spinner 
            
            // dogImage.src = 'https://i.imgur.com/llF5iyg.gif'; // Loading GIF
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();

            if (data.status === 'success') {
                dogImage.src = data.message;
                dogImage.alt = 'A Random Dog';
            } else {
                throw new Error('Failed to fetch dog image.');
            }
        } catch (error) {
            console.error(error);
            dogImage.src = '';
            dogImage.alt = 'Failed to load image.';
            alert('Sorry, there was an error fetching the dog image.');
        }
    };

    // Event listener for the button
    newImageBtn.addEventListener('click', fetchDogImage);

    
    fetchDogImage();
});