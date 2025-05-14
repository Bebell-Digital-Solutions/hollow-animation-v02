<script>




  function visualize() {
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const container = document.querySelector('.ai');

    function update() {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b) / dataArray.length;

      container.style.setProperty('--l', avg/100);
      container.style.setProperty('--radius', `${6 + (avg/15)}vmin`);
      container.style.filter = `drop-shadow(0 0 ${avg/10}px rgba(109,103,200,${avg/100}))`;

      requestAnimationFrame(update);
    }
    update();
  }
