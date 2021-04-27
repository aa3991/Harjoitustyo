<script>
  // Taulukko, josta uutisia pyöritetään
  let news = [
    'Jänis veti velhon hatustaan.',
    'Kalastajat tuohduksissa: "Vesihiidet käyvät katiskoillamme!"',
    'Seikkailijat katosivat etsiessään näkymättömyysviittaa.',
    'Tutkimus sen todistaa: kääpiömiehen ja kääpiönaisen todellakin erottaa parran pituudesta.',
    'Aragorn antaa palttua Frodolle: "Minähän en miksikään korunkuskaajaksi ryhdy!"',
    'Klonkku paljastaa parhaimmat painonhallintaniksinsä!',
  ];

  // uutisten selaamismekanismi
  let i = 0;
  export let nakyvyysAika = 4000;

  setInterval(() => {
    i = i < news.length - 1 ? i + 1 : 0;
  }, nakyvyysAika);
  // näkyvän uutisen päivittyminen ruutuun
  $: visibleNews = news[i];
</script>

<div>
  <p>KUUMIMMAT FANTASIAUUTISET - {visibleNews}</p>
</div>

<style>
  p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0;
    font-size: 1em;
    color: white;
  }
</style>
