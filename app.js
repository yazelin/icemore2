var quotes=[
	'Life is not an exact science, it is an art.<br>\
	生活不是嚴謹科學，而是一種藝術。<br>\
	<small>Samuel Butler (1835-1902, 英國小說家)</small>',
	
	'The more we do, the more we can do.<br>\
	當做的愈多，能做的也就愈多。<br>\
	<small>William Hazlitt (1778-1830, 英國作家與文學評論家)</small>',
	
	'The future belongs to those who believe in the beauty of their dreams.<br>\
	未來是屬於那些相信自己美夢的人。<br>\
	<small>Eleanor Roosevelt (1884-1962, 前美國第一夫人,民權運動者)</small>',
	
	'Genius is one percent inspiration and ninety-nine percent perspiration.<br>\
	天才是一分靈感加上九十九分的努力。<br>\
	<small>Edison 愛迪生</small>',
	
	'A healthy mind is in a healthy body.<br>\
	有健康的身體才有健全的心靈。<br>\
	<small>Juvenal 朱文諾</small>',

	'One word frees us of all the weight and pain of life--that word is love.<br>\
	有個字能將我們從生命的重擔與苦痛中釋放--那個字就是「愛」。<br>\
	<small>Sophocles 莎弗克里士(希臘悲劇詩人)</small>',
	
	'Enjoy your own life without comparing it with that of another.<br>\
	享受自己的生活，別和別人比較。<br>\
	<small>Condorcet 康德賽</small>',

	'Well begun is half done.<br>\
	好的開始是成功的一半。<br>\
	<small>Horace 赫瑞斯</small>',

	'Every man desires to live long; but no man would be old.<br>\
	人人都希望活得久，卻沒人希望變老。<br>\
	<small>Jonathan Swift 強納生‧斯威夫特</small>',

	'Prosperity makes friends, adversity tries them.<br>\
	富貴交朋友，患難見真情。<br>\
	<small>Publius Syrus 賽魯士</small>',

	'No beauty is like the beauty of mind.<br>\
	心靈之美，最美。<br>\
	<small>Cooke 庫克</small>',

	"Living in the lap of luxury isn't bad except that you never know when luxury is going to stand up.<br>\
	能過著極盡奢華的生活的確不壞，糟的是你永不知道何時奢華將離你而去。<br>\
	<small>Ken Murray 肯‧穆雷</small>",

	'Kind words are the music of the world.<br>\
	親善之言乃人世的美樂。<br>\
	<small>Fabre 法布雷</small>',
   
	'Health is like money, we never have a true idea of its value until we lose it.<br>\
	健康如金錢，失去時才真正知其價值。<br>\
	<small>Billings 比林斯</small>',

	'Dare to do right! Dare to be true.<br>\
	勇於為善!勇於率真!<br>\
	<small>W. Wilson 威爾遜</small>',

	'Men are born with two eyes but one tongue, in order that they should see twice as much as they say.<br>\
	人生而有一雙眼一根舌，就是要人們多看少說。<br>\
	<small>Colton 柯爾頓</small>',

	'A man is known by the company he keeps.<br>\
	觀其友，知其行。<br>\
	<small>Samuel Smiles 山姆‧斯邁爾斯</small>',

	'The first wealth is health.<br>\
	首要之富為健康。<br>\
	<small>Emerson 愛默生</small>',

	'Every man is the maker of his own fortune.<br>\
	各人命運各自掌控。<br>\
	<small>Richard Steels 理查‧斯第爾斯</small>',

	'Wisdom is only found in truth.<br>\
	唯有真理中方能尋得智慧。<br>\
	<small>Goethe 歌德</small>',
	
	'Too many people live too much in the past. The past must be a springboard, not a sofa.<br>\
	太多人沉醉於過去種種，必須將過去作為跳板，而不是當作舒適的沙發。<br>\
	<small>Harold Macmillan 哈洛德‧麥克米倫</small>',

	'All of the animals except man know that the principal business of life is to enjoy it.<br>\
	除了人以外，所有的動物都知道生活的要事就是享受生活。  <br>\
	<small>Samuel Butler</small>',

	'Everybody is a moon, and has a dark side which he never shows to anybody.<br>\
	人人都是月亮，各有其永不示人的黑暗面。<br>\
	<small>Mark Twain 馬克吐溫</small>',

	'Living without an aim is like sailing without a compass.<br>\
	生活無目標，有如航行無羅盤。 <br>\
	<small>John Ruskin 約翰拉斯金</small>',
	
	'生命，就該浪費在美好的事物上'
	];
	
i = Math.floor(Math.random() * quotes.length);
$('#quotes').html(quotes[i]);
