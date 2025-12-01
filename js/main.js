document.getElementById('year').textContent = new Date().getFullYear();

function scrollCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  const scrollAmount = 250 * direction;
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
