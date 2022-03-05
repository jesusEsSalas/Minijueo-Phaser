export default {

    key: 'menu',

    plugins: ['InputPlugin'],

    preload: function() {
        this.load.image('sky', 'assets/first.png');
    },
  
    create: function () {
      this.input.keyboard.enabled = false;
  
      this.add.sprite(400, 300, 'sky');
  
      this.add.text(400, 300, 'Cavern Quest\n\n  play →', {
        align: 'center',
        fill: '#EECB0A',
        fontFamily: 'sans-serif',
        fontSize: 48,
        fontWeight: 'bold'
      })
        .setOrigin(0.5, 0);
  
      this.input.on('pointerdown', function () {
        this.scene.switch('play');
      }, this);
    }
  
  };