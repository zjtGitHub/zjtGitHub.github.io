const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [{
      name: "やわらかな光",
      artist: 'やまだ豊',
      url: 'https://sharefs.yun.kugou.com/202004202301/54c2ea743b1154506d73e43f71e9d5dd/G127/M04/02/08/H4cBAFplFvqAKLjXAFiuNgFn4RM482.mp3',
      cover: 'http://p2.music.126.net/RhoBgUR2za7uF4pU5FUAaw==/5967049604004905.jpg?param=177y177',
    },
    {
      name: "桜花抄",
      artist: '天門',
      url: 'https://sharefs.yun.kugou.com/202004202303/bac0be6c061e270b286903163c4d64f7/G110/M0A/1E/05/rg0DAFvl-r6ALKPoAEcVuZd61KI109.mp3',
      cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
    },
    {
      name: "Journey",
      artist: 'Capo Productions',
      url: 'https://sharefs.yun.kugou.com/202004202302/7faf36fd287181ca55d8c25f29ecccfd/G185/M0A/0F/14/WYcBAF5UbZOAVREbACwVOYJKl2w649.mp3',
      cover: 'http://p1.music.126.net/x-LVbj4tX6oEDH3qkqJP2g==/663005511556827.jpg?param=177y177',
    },
    {
      name: "イエスタデイ",
      artist: 'Official髭男dism',
      url: 'https://sharefs.yun.kugou.com/202004202259/bd2a160bde81e0c27beb54e80a74a81f/G173/M03/1A/1F/7Q0DAF2H5HeAXADFAEkO8P3-Y4I163.mp3',
      cover: 'http://p2.music.126.net/MZ7xHTi6IH7DxW1FrZnRPw==/109951164416269481.jpg?param=130y130',
    },
  ]
});
