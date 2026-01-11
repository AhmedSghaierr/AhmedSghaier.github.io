// EASTER EGG ONLY
const pic = document.getElementById('profilePic');
const meme = document.getElementById('memeImg');
const sound = document.getElementById('memeSound');

pic.addEventListener('click', () => {
  // Play sound
  sound.currentTime = 0;
  sound.play();

  // Show meme with animation
  meme.style.display = 'block';
  meme.style.opacity = 0;
  meme.style.transform = 'translate(-50%, -50%) scale(0.5)';

  // Animate in
  let opacity = 0;
  let scale = 0.5;
  const animateIn = setInterval(() => {
    if(opacity < 1) opacity += 0.05;
    if(scale < 1) scale += 0.05;
    meme.style.opacity = opacity;
    meme.style.transform = `translate(-50%, -50%) scale(${scale})`;
    if(opacity >= 1 && scale >= 1) clearInterval(animateIn);
  }, 20);

  // Fade out after 3 seconds
  setTimeout(() => {
    const fadeOut = setInterval(() => {
      if(opacity > 0) {
        opacity -= 0.05;
        scale -= 0.05;
        meme.style.opacity = opacity;
        meme.style.transform = `translate(-50%, -50%) scale(${scale})`;
      } else {
        meme.style.display = 'none';
        clearInterval(fadeOut);
      }
    }, 20);
  }, 3000);
});