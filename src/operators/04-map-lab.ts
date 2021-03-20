import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const lorem = document.createElement('div');
lorem.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare erat eu ipsum lobortis, eu pretium neque tempor. Maecenas ornare congue odio, in convallis enim porta in. Vivamus tincidunt urna vitae laoreet imperdiet. In hac habitasse platea dictumst. Curabitur tortor massa, tincidunt a placerat non, ullamcorper ac lectus. Vivamus nisl ipsum, rhoncus sit amet maximus pellentesque, vulputate maximus tortor. Sed pellentesque dignissim eros, sit amet pellentesque enim aliquam ut. Sed a ex ullamcorper, posuere lacus non, vulputate ipsum.
<br/><br/>
Proin eu ullamcorper risus, id molestie sem. Praesent nec arcu et leo maximus blandit vel aliquet urna. Praesent ut quam mi. Sed id lacus sed sapien aliquet semper. Pellentesque egestas volutpat diam, non convallis lacus imperdiet sit amet. Aliquam erat volutpat. Curabitur ut sapien eu turpis porttitor iaculis. Vestibulum at mauris tortor. Etiam cursus elit non finibus tempus.
<br/><br/>
Integer congue, ipsum a efficitur malesuada, ex ipsum pellentesque erat, sed convallis odio libero in odio. Proin bibendum nunc tortor, eget dictum leo sodales posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque non elit sit amet risus finibus semper. Nullam quis ex ante. Donec rutrum porttitor elit ut efficitur. Maecenas arcu diam, elementum vitae varius id, vestibulum sed libero. Nulla tincidunt id tellus sed ultricies. Nullam sagittis gravida interdum. Pellentesque non tempor ante. Etiam tincidunt convallis porttitor.
<br/><br/>
Curabitur sit amet semper massa, sit amet aliquet dolor. Nullam hendrerit ligula orci, sit amet pretium lacus molestie non. Sed augue eros, euismod ut ante eu, vulputate porta turpis. Sed sed mauris vehicula, egestas leo ac, interdum purus. Cras lobortis lorem vitae libero scelerisque auctor. Nulla porttitor sapien id diam suscipit, a tincidunt nisl pulvinar. Curabitur eleifend, nibh nec dignissim convallis, sapien lacus aliquet leo, a tempor orci erat quis libero. Sed iaculis, nibh eu consectetur aliquet, mi nibh fringilla felis, imperdiet mattis leo lorem et est. Donec rhoncus sagittis iaculis. Ut pretium, metus molestie mattis vestibulum, dolor diam commodo nulla, quis gravida leo libero vitae libero. Aliquam commodo nisl felis, eu venenatis felis imperdiet quis. Nullam ac tellus eu ante rhoncus molestie at vitae mauris. Integer a nisl ligula.
<br/><br/>
Phasellus lacinia nunc nibh, tristique ornare urna dictum at. Donec sed quam ante. Suspendisse vitae mollis magna. Duis lacinia erat ut pharetra condimentum. Maecenas nunc risus, bibendum quis pretium sit amet, rutrum ac quam. Cras viverra risus et ultricies molestie. Donec dignissim faucibus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur elementum hendrerit. Quisque maximus ligula et erat volutpat vulputate. Ut sit amet neque varius, faucibus turpis vitae, ultricies purus. In luctus quis velit sit amet mollis. Fusce ultrices nisl orci, et dapibus nulla tincidunt pulvinar.
<br/><br/>
Quisque eget viverra nunc. Sed laoreet dui non ipsum commodo ultrices. Nunc nec neque vitae elit dapibus finibus in sit amet nisi. Vestibulum lobortis dolor et dui tincidunt, tempor congue turpis molestie. Quisque suscipit tempor urna. Phasellus leo massa, posuere et lectus et, blandit porttitor magna. Aliquam at est gravida lectus tincidunt mollis cursus at purus. Phasellus interdum, purus vitae efficitur elementum, risus odio posuere arcu, eu luctus sem nunc sed justo. Suspendisse varius est placerat, consequat lectus eget, mattis velit.
<br/><br/>
Praesent ligula justo, posuere et lorem nec, malesuada maximus est. Maecenas ultrices massa ex, vel consectetur nisi elementum tempus. Aenean eget ultrices leo, eget aliquet nulla. Suspendisse eleifend nulla et neque porta, vitae rutrum mauris pellentesque. Vestibulum sagittis pharetra iaculis. Etiam ut ante porta, lacinia felis pretium, pulvinar purus. Curabitur odio odio, cursus vitae blandit at, tincidunt vel massa. Praesent nec ultricies augue, non volutpat mauris. Donec faucibus vehicula mi eu finibus. Donec magna orci, ultrices porta purus ornare, tincidunt eleifend dui. Nulla vel luctus nisi. Donec mattis libero arcu, ut ullamcorper arcu congue in. Phasellus a leo risus. Aenean viverra iaculis elit et laoreet.
<br/><br/>
Sed scelerisque quam quis odio auctor, vitae fringilla purus tincidunt. Mauris purus velit, congue vitae lacus ac, dignissim scelerisque nibh. Aliquam fringilla ante est, vel rhoncus mi faucibus vitae. Duis sollicitudin eros libero, vel consequat leo facilisis sed. Phasellus vulputate condimentum mi, pellentesque tristique nunc. Nullam sollicitudin malesuada lacus id dapibus. Nunc ullamcorper tellus eget eleifend efficitur. Fusce posuere velit nec tempor posuere. In vel fringilla libero. Nam efficitur neque vel eros molestie, in sagittis enim cursus. Vivamus sit amet feugiat tellus. Morbi dictum ullamcorper venenatis. Morbi ornare risus at mauris dictum, eu porttitor magna varius. Duis nulla felis, semper eu congue tempor, porta sed nibh.
<br/><br/>
Suspendisse ultricies luctus ante, congue consequat dolor consequat at. Donec egestas sagittis dolor ac volutpat. Duis non dapibus turpis, id efficitur ante. Etiam hendrerit, lorem sit amet congue lobortis, turpis eros mattis ante, viverra interdum leo massa eu dolor. Donec quis nisi et purus porttitor tincidunt quis tincidunt dui. Sed at urna nec lacus suscipit tincidunt. Sed vel erat a leo eleifend laoreet a eget elit. Nullam in lectus lectus. Integer vel enim fermentum purus vestibulum facilisis. Phasellus quis orci felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Nunc egestas mi sit amet luctus tempor.
<br/><br/>
Vivamus efficitur risus eget imperdiet faucibus. Phasellus mattis sapien sit amet tincidunt vehicula. Nulla facilisi. Sed id mattis massa, eu scelerisque tellus. Duis rutrum id nunc id aliquam. Quisque consectetur dui neque, vitae condimentum neque pretium imperdiet. Praesent varius ex ac enim facilisis sollicitudin. Suspendisse vitae eros scelerisque, hendrerit purus ac, interdum augue. Suspendisse porta sollicitudin lacus id cursus. Proin tellus lectus, volutpat quis quam nec, dapibus fringilla nunc.
<br/><br/>
Vestibulum eu augue eu mi pretium sollicitudin in ac arcu. Mauris vulputate elementum condimentum. Cras luctus nisi ullamcorper molestie varius. Curabitur eu feugiat risus. Nulla congue tortor non arcu ultricies, vel posuere nisl porttitor. Sed fringilla diam ligula, ac ornare nunc pharetra at. Vivamus porta augue ac fermentum pharetra. Integer eget metus vitae quam molestie sagittis eu id nulla. Donec et sollicitudin orci. Integer id congue mauris, ut vulputate massa. Donec sagittis nulla a ligula scelerisque egestas. Maecenas vel vehicula sapien. In ante lorem, porttitor ac sem eget, feugiat euismod mauris. Integer eleifend nisl eu nulla hendrerit, vel posuere est feugiat.
<br/><br/>
Duis non sollicitudin leo. Aliquam tincidunt odio nec diam ultrices ornare. Praesent dui mauris, blandit nec posuere vitae, efficitur a nunc. Vestibulum tempor augue nibh, at efficitur nunc consequat nec. Sed vulputate egestas laoreet. Aenean lobortis ipsum at lorem interdum maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus suscipit cursus. Proin ut sagittis metus. Sed ultrices leo non neque interdum, eu congue nibh tristique.
<br/><br/>
Aenean sodales dignissim leo in ultrices. Sed euismod turpis at egestas sagittis. Morbi iaculis nunc vitae dictum interdum. Nunc semper pretium lobortis. Nunc sed nunc tristique, suscipit risus eu, molestie lorem. Vestibulum eleifend mollis suscipit. Sed finibus ante vel metus feugiat, ac convallis felis laoreet. Maecenas vel cursus lacus. Morbi eget lobortis justo, ac consequat urna. Etiam a interdum dui. Nulla commodo, urna sit amet rutrum egestas, mi mauris placerat mauris, sit amet vehicula odio ex sagittis tortor. Donec fermentum lacinia tristique.
<br/><br/>
Donec ut tortor aliquet, ullamcorper leo eu, dapibus dui. Morbi viverra est ut justo finibus blandit vel ultricies quam. Mauris interdum sem leo, vitae consequat metus vulputate eget. Pellentesque ornare id urna eget laoreet. Integer dignissim, nisl ac varius commodo, lorem magna porttitor turpis, quis faucibus massa velit sit amet eros. Suspendisse venenatis, sapien sed ullamcorper vestibulum, dolor ipsum vulputate ipsum, et egestas ex odio a purus. Sed viverra ligula tincidunt risus malesuada, at iaculis turpis luctus. Vivamus sed finibus ante.
<br/><br/>
Proin ut massa dignissim lectus mollis tincidunt ut ac eros. Aenean auctor id leo non rutrum. Phasellus euismod aliquam orci, vel dignissim lorem iaculis egestas. Sed posuere pretium elementum. Suspendisse eu viverra sapien. Curabitur congue aliquam magna, vitae blandit lorem rhoncus et. Sed eu velit lorem. Sed ac eros aliquet dui tincidunt aliquet in ut leo. Sed tincidunt turpis sed ex auctor ullamcorper.
<br/><br/>
Proin convallis commodo ipsum eu facilisis. Aenean ullamcorper cursus tincidunt. Nulla consectetur vulputate tortor, ut tincidunt libero vehicula facilisis. Nunc at massa volutpat, congue turpis ac, tempor augue. Cras at dui non nisi viverra fermentum. Nulla facilisi. Morbi ut malesuada felis. Pellentesque sollicitudin mattis ipsum eget auctor.
<br/><br/>
Quisque ut dignissim erat, vitae tristique nisl. Suspendisse in arcu in est malesuada ultricies. Nunc a sapien non erat facilisis rhoncus. Cras quis libero id metus faucibus pulvinar ac in est. Donec ullamcorper tristique ligula, quis laoreet arcu euismod sit amet. Ut id nibh et nisi mollis blandit vulputate et sem. Proin lobortis tortor eu lacus consequat vulputate.
<br/><br/>
Duis dignissim volutpat sem et interdum. Nam ullamcorper nisi ac sem vehicula facilisis. In dapibus ultricies ultricies. Curabitur sit amet accumsan magna. Suspendisse facilisis sagittis nisi. In ante mauris, euismod vel metus eu, porttitor vulputate ligula. Quisque neque urna, dapibus nec faucibus vel, pharetra ac mauris. Vestibulum in lacus nec eros finibus accumsan nec nec felis. Mauris dolor tortor, sollicitudin eget nulla a, ornare lacinia nibh. Donec tempor egestas hendrerit. Vestibulum convallis leo vel mauris efficitur, nec pulvinar mauris tempor.
<br/><br/>
Maecenas et tincidunt dolor. Proin eget auctor mi. Morbi pharetra aliquam nulla, at elementum enim. Donec aliquet mi vel justo tincidunt suscipit. Maecenas fringilla ipsum et urna gravida vulputate. Morbi egestas faucibus elementum. Duis cursus magna ut leo tempus tincidunt. Integer ut rhoncus neque, a sagittis turpis. Nunc id auctor dui, ac porttitor augue. Etiam luctus laoreet nulla, vitae venenatis lorem ultrices sit amet. Integer fringilla sapien quis lectus lacinia eleifend. Proin luctus dui dui, nec fermentum libero posuere et. Praesent ante neque, ullamcorper eu rutrum a, euismod sit amet urna. Praesent fringilla nunc ut lacus iaculis consequat. Sed ac malesuada mi. Integer dignissim viverra leo, at vulputate arcu iaculis id.
`;

const body = document.querySelector('body');
body.append(lorem);

const calculatePercentage = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  map(calculatePercentage),
  tap((perc) => console.log(`${perc.toFixed(2)}%`))
);

progress$.subscribe(
  (percentage) => (progressBar.style.width = `${percentage}%`)
);
