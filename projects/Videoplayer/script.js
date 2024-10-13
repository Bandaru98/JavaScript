const musicData = [
    {
        name: 'Video One',
        url: 'https://videos.pexels.com/video-files/2491284/2491284-sd_960_506_24fps.mp4'
    },
    {
        name: 'Video Two',
        url: 'https://videos.pexels.com/video-files/1181911/1181911-sd_960_506_24fps.mp4'
    },
    {
        name: 'Video Three',
        url: 'https://videos.pexels.com/video-files/1847910/1847910-sd_640_360_30fps.mp4'
    },
    {
        name: 'Video Twenty',
        url: 'https://videos.pexels.com/video-files/3958714/3958714-sd_640_360_30fps.mp4'
    }
];

const musicList = document.getElementById('music-list');
const fetchMusicButton = document.getElementById('fetch-music');
const videoPlayer = document.getElementById('video-player');
const musicPlayer = document.getElementById('music-player');

// Event listener for fetching music data
fetchMusicButton.addEventListener('click', () => {
    displayMusicList(musicData);
});

// Display the music list
function displayMusicList(musicData) {
    musicList.innerHTML = ''; // Clear any previous list

    musicData.forEach((music, index) => {
        const musicCard = document.createElement('div');
        musicCard.classList.add('music-card');

        musicCard.innerHTML = `
        <h4>${music.name}</h4>
        <button onclick="playMusic(${index})">Play</button>
      `;

        musicList.appendChild(musicCard);
    });
}

// Function to play the selected video
function playMusic(index) {
    const selectedMusic = musicData[index];
    videoPlayer.src = selectedMusic.url;
    musicPlayer.style.display = 'block'; // Show the video player
    videoPlayer.play(); // Auto-play the selected video
}