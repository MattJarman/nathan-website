export default {
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      resize: true
    }
  },
  particles: {
    color: {
      value: '#10B981'
    },
    links: {
      color: '#10B981',
      distance: 150,
      enable: true,
      opacity: 0.75,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 3,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 120
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}
